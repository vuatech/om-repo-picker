#include "MainDialog.h"
#include "Tools.h"
#include <QtGlobal>
#include <QMessageBox>
#include <QDesktopWidget>
#include <QApplication>

MainDialog::MainDialog(QWidget *parent, Qt::WindowFlags f):QDialog(parent,f) {
	setWindowIcon(QIcon("/usr/share/icons/hicolor/scalable/apps/om-repopicker.svg"));
	setWindowTitle(tr("OpenMandriva Software Repository Picker"));

	int y=0;

	_layout = new QGridLayout(this);
	setLayout(_layout);

	_updateChannel = new UpdateChannelPicker(this);
	_layout->addWidget(_updateChannel, y, 1, 1, 2);

	QString help = tr("Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).");
	help += "\n";
	help += tr("32-bit repositories contain the same packages built for 32 bit processors. Those repositories are usually useful only for compatibility with prebuilt packages for older systems - such as binary-only games and applications built for 32-bit processors and running 32-bit Windows applications in Wine.");
	_topLbl = new QLabel(help, this);
	_topLbl->setWordWrap(true);
	_layout->addWidget(_topLbl, ++y, 1, 1, 2);

	int repoCount=0;
	for(repoCount=0; repos[repoCount].name; repoCount++);

	_repoWidgets=new RepoWidget*[repoCount];
	for(int i=0; repos[i].name; i++) {
		_repoWidgets[i]=new RepoWidget(i, this);
		_layout->addWidget(_repoWidgets[i], ++y, 1, 1, 2);
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
	delete[] _repoWidgets;
}

QSize MainDialog::sizeHint() const {
	// The dialog tends to be too small (truncating some text)
	// without overriding sizeHint...
	int w = QDialog::sizeHint().width(),
	    h = QDialog::sizeHint().height();
	int const aw = QApplication::desktop()->availableGeometry().width(),
	          ah = QApplication::desktop()->availableGeometry().height();
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
			if(!secondaryArch().isEmpty()) {
				name=repoName(i, currentUpdateChannel(), secondaryArch());
				if(repoEnabled(name))
					disable << name;
				// Also got to disable updates repositories (for release (0) and rock (1))
				// and testing (for all)
				if(currentUpdateChannel() < 2) {
					name=repoName(i, currentUpdateChannel(), secondaryArch(), "updates");
					if(repoEnabled(name))
						disable << name;
				}
				name=repoName(i, currentUpdateChannel(), secondaryArch(), "testing");
				if(repoEnabled(name))
					disable << name;
			}
		}
	}

	for(int i=0; repos[i].name; i++) {
		QString name=repoName(i, uc);
		if(_repoWidgets[i]->enabled() && !repoEnabled(name)) {
			enable << name;
			if(uc < 2) {
				name=repoName(i, uc, rpmArch(), "updates");
				if(!repoEnabled(name))
					enable << name;
			}
		} else if(!_repoWidgets[i]->enabled() && repoEnabled(name)) {
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
		if(_repoWidgets[i]->enabled() && _updateChannel->testingEnabled() && !repoEnabled(name))
			enable << name;
		else if(!_updateChannel->testingEnabled() && repoEnabled(name))
			disable << name;

		if(!secondaryArch().isEmpty()) {
			name=repoName(i, uc, secondaryArch());
			if(_repoWidgets[i]->enabled32() && !repoEnabled(name)) {
				enable << name;
				if(uc < 2) {
					name=repoName(i, uc, secondaryArch(), "updates");
					if(!repoEnabled(name))
						enable << name;
				}
			}
			else if(!_repoWidgets[i]->enabled32() && repoEnabled(name)) {
				disable << name;
				if(uc < 2) {
					name=repoName(i, uc, secondaryArch(), "updates");
					if(repoEnabled(name))
						disable << name;
				}
				name=repoName(i, uc, secondaryArch(), "testing");
				if(repoEnabled(name))
					disable << name;
			}

			name=repoName(i, uc, secondaryArch(), "testing");
			if(_repoWidgets[i]->enabled32() && _updateChannel->testingEnabled() && !repoEnabled(name))
				enable << name;
			else if(!_updateChannel->testingEnabled() && repoEnabled(name))
				disable << name;
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
		QMessageBox::information(0, tr("Update channel changed"), tr("The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running \"dnf --refresh distro-sync\" in a command line."), QMessageBox::Ok);
	}
}
