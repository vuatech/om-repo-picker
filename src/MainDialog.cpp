#include "MainDialog.h"
#include "Tools.h"
#include <QtGlobal>
#include <QMessageBox>
#include <QFile>
#include <QApplication>
#include <QWindow>
#include <QScreen>
#include <QDir>
#include <QTemporaryFile>
#include <QProcess>

extern "C" {
#include <unistd.h>
}

MainDialog::MainDialog(QWidget *parent, Qt::WindowFlags f):QDialog(parent,f) {
	setWindowIcon(QIcon("/usr/share/icons/hicolor/scalable/apps/om-repopicker.svg"));
	setWindowTitle(tr("OpenMandriva Software Repository Picker"));

	int y=0;

	_layout = new QGridLayout(this);
	setLayout(_layout);

	_updateChannel = new UpdateChannelPicker(this);
	_layout->addWidget(_updateChannel, y, 1, 1, 2);

	QString help = tr("Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).");
	_topLbl = new QLabel(help, this);
	_topLbl->setWordWrap(true);
	_layout->addWidget(_topLbl, ++y, 1, 1, 2);

	int repoCount=0;
	for(repoCount=0; repos[repoCount].name; repoCount++);

	_omRepos = new OMRepos(this);
	_layout->addWidget(_omRepos, ++y, 1, 1, 2);

	_thirdParty = (thirdPartyRepos[0].name ? new ThirdPartyRepoWidget(this) : nullptr);
	if(_thirdParty) {
		_thirdPartyScroller = new FixedWidthScrollArea(this);
		_thirdPartyScroller->setWidget(_thirdParty);
		_layout->addWidget(_thirdPartyScroller, ++y, 1, 1, 2);
	}

	_ok = new QPushButton(tr("&OK"), this);
	_layout->addWidget(_ok, ++y, 1);
	_cancel = new QPushButton(tr("&Cancel"), this);
	_layout->addWidget(_cancel, y, 2);

	_ok->setFocus();

	connect(_ok, &QPushButton::clicked, this, &MainDialog::okClicked);
	connect(_cancel, &QPushButton::clicked, this, &QDialog::reject);
}

MainDialog::~MainDialog() {
}

QSize MainDialog::sizeHint() const {
	// The dialog tends to be too small (truncating some text)
	// without overriding sizeHint...
	int w = QDialog::sizeHint().width(),
	    h = QDialog::sizeHint().height();
	QScreen const * const s = windowHandle()->screen();
	int const aw = s->availableGeometry().width(),
	          ah = s->availableGeometry().height();
	if(h < ah * .95)
		h = ah * .95;
	if(w < aw * .6)
		w = aw * .6;
	return QSize(w, h);
}

void MainDialog::okClicked() {
	hide();
	QApplication::processEvents();

	QStringList disable;
	QStringList enable;
	int const uc=_updateChannel->updateChannel();
	if(uc != currentUpdateChannel()) {
		for(int i=0; repos[i].name; i++) {
			QString name=repoName(i, currentUpdateChannel());
			if(repoEnabled(name))
				disable << name;
			// Also got to disable updates repositories (for release (0) and rock (1))
			// and testing (for all)
			if(currentUpdateChannel() < 2) {
				name=repoName(i, currentUpdateChannel(), rpmArch(), "updates");
				if(repoEnabled(name))
					disable << name;
			}
			name=repoName(i, currentUpdateChannel(), rpmArch(), "testing");
			if(repoEnabled(name))
				disable << name;
		}
	}

	for(int i=0; repos[i].name; i++) {
		QString name=repoName(i, uc);
		if(_omRepos->repoEnabled(i) && !repoEnabled(name)) {
			enable << name;
			if(uc < 2) {
				name=repoName(i, uc, rpmArch(), "updates");
				if(!repoEnabled(name))
					enable << name;
			}
		} else if(!_omRepos->repoEnabled(i) && repoEnabled(name)) {
			disable << name;
			if(uc < 2) {
				name=repoName(i, uc, rpmArch(), "updates");
				if(repoEnabled(name))
					disable << name;
			}
			name=repoName(i, uc, rpmArch(), "testing");
			if(repoEnabled(name))
				disable << name;
		}

		name=repoName(i, uc, rpmArch(), "testing");
		if(_omRepos->repoEnabled(i) && _updateChannel->testingEnabled() && !repoEnabled(name))
			enable << name;
		else if(!_updateChannel->testingEnabled() && repoEnabled(name))
			disable << name;
	}
	if(_thirdParty) {
		for(int i=0; thirdPartyRepos[i].name; i++) {
			QString const repoFile = QLatin1String("/etc/yum.repos.d/") + QLatin1String(thirdPartyRepos[i].name) + ".repo";
			if(_thirdParty->repoEnabled(i) && !repoEnabled(thirdPartyRepos[i].name)) {
				if(!QFile::exists(repoFile)) {
					// The repo files for 3rd party stuff are usually
					// created by the 3rd party packages themselves,
					// leaving us with a bit of a chicken-and-egg
					// problem...
					QTemporaryFile f(QDir::temp().absoluteFilePath(thirdPartyRepos[i].name));
					if(f.open()) {
						f.write((QLatin1String("[") + QLatin1String(thirdPartyRepos[i].name) + QLatin1String("]\n")).toUtf8());
						f.write((QLatin1String("name=") + QLatin1String(thirdPartyRepos[i].name) + QLatin1String("\n")).toUtf8());
						f.write((QLatin1String("baseurl=") + QLatin1String(thirdPartyRepos[i].url) + QLatin1String("\n")).toUtf8());
						f.write("enabled=1\n");
						f.write("type=rpm-md\n");
						if(thirdPartyRepos[i].gpgKey) {
							f.write("gpgcheck=1\n");
							f.write((QLatin1String("gpgkey=") + QLatin1String(thirdPartyRepos[i].gpgKey) + QLatin1String("\n")).toUtf8());
						}
					}
					f.close();
					QString cmd;
					QStringList args;
					if(access(QFile::encodeName("/etc/yum.repos.d"), W_OK)) {
						cmd="/usr/bin/pkexec";
						args << "/bin/mv";
					} else {
						cmd="/bin/mv";
					}
					args << f.fileName() << repoFile;
					QProcess::execute(cmd, args);
				} else
					enable << thirdPartyRepos[i].name;
			} else if(!_thirdParty->repoEnabled(i) && repoEnabled(thirdPartyRepos[i].name)) {
				disable << thirdPartyRepos[i].name;
			}
		}
	}
	disable.removeDuplicates();
	enable.removeDuplicates();
	if(!disable.isEmpty())
		disableRepos(disable);
	if(!enable.isEmpty())
		enableRepos(enable);
	QDialog::accept();

	if(uc != currentUpdateChannel()) {
		QMessageBox::information(nullptr, tr("Update channel changed"), tr("The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running \"dnf --refresh distro-sync\" in a command line."), QMessageBox::Ok);
	}
}
