#include "MainDialog.h"
#include <QtGlobal>

typedef struct {
	char const * const name;
	char const * const translatedName;
	char const * const explanation;
} Repo;

static const Repo repos[] = {
	{ "main", QT_TR_NOOP("Main"), QT_TR_NOOP("The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.") },
	{ "unsupported", QT_TR_NOOP("Unsupported"), QT_TR_NOOP("Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don't mind an occasional crash.") },
	{ "restricted", QT_TR_NOOP("Restricted"), QT_TR_NOOP("Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.") },
	{ "non-free", QT_TR_NOOP("Non-Free"), QT_TR_NOOP("Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You're on your own.") },
	{ nullptr, nullptr, nullptr },
};

MainDialog::MainDialog(QWidget *parent, Qt::WindowFlags f):QDialog(parent,f) {
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

	for(int i=0; repos[i].name; i++) {
		RepoWidget *w = new RepoWidget(tr(repos[i].translatedName), tr(repos[i].explanation), this);
		_layout->addWidget(w, ++y, 1, 1, 2);
		_repoWidgets.insert("main", w);
	}

	_ok = new QPushButton(tr("O&K"), this);
	_layout->addWidget(_ok, ++y, 1);
	_cancel = new QPushButton(tr("Cance&l"), this);
	_layout->addWidget(_cancel, y, 2);

	_ok->setFocus();

	connect(_ok, &QPushButton::clicked, this, &QDialog::accept);
	connect(_cancel, &QPushButton::clicked, this, &QDialog::reject);
}
