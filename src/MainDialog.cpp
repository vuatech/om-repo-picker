#include "MainDialog.h"

MainDialog::MainDialog(QWidget *parent, Qt::WindowFlags f):QDialog(parent,f) {
	_layout = new QGridLayout(this);
	setLayout(_layout);

	_topLbl = new QLabel(tr("Here you can select from which repositories you want to install and update packages (extra applications, games, etc.)"), this);
	_topLbl->setWordWrap(true);
	_layout->addWidget(_topLbl, 1, 1, 1, 2);

	_mainExp = new QLabel(tr("The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled."), this);
	_mainExp->setWordWrap(true);
	_layout->addWidget(_mainExp, 2, 1, 1, 2);
	_main = new QCheckBox(tr("&Main"), this);
	_layout->addWidget(_main, 3, 1);
	_main32 = new QCheckBox(tr("M&ain (32-bit)"), this);
	_layout->addWidget(_main32, 3, 2);
	
	_unsupportedExp = new QLabel(tr("Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don't mind an occasional crash."), this);
	_unsupportedExp->setWordWrap(true);
	_layout->addWidget(_unsupportedExp, 4, 1, 1, 2);
	_unsupported = new QCheckBox(tr("&Unsupported"), this);
	_layout->addWidget(_unsupported, 5, 1);
	_unsupported32 = new QCheckBox(tr("C&ontrib (32-bit)"));
	_layout->addWidget(_unsupported32, 5, 2);

	_restrictedExp = new QLabel(tr("Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws."), this);
	_restrictedExp->setWordWrap(true);
	_layout->addWidget(_restrictedExp, 6, 1, 1, 2);
	_restricted = new QCheckBox(tr("&Restricted"), this);
	_layout->addWidget(_restricted, 7, 1);
	_restricted32 = new QCheckBox(tr("R&estricted (32-bit)"));
	_layout->addWidget(_restricted32, 7, 2);

	_nonfreeExp = new QLabel(tr("Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You're on your own."), this);
	_nonfreeExp->setWordWrap(true);
	_layout->addWidget(_nonfreeExp, 8, 1, 1, 2);
	_nonfree = new QCheckBox(tr("&Non-free"), this);
	_layout->addWidget(_nonfree, 9, 1);
	_nonfree32 = new QCheckBox(tr("Non-&free (32-bit)"));
	_layout->addWidget(_nonfree32, 9, 2);

	_ok = new QPushButton(tr("O&K"), this);
	_layout->addWidget(_ok, 10, 1);
	_cancel = new QPushButton(tr("Cance&l"), this);
	_layout->addWidget(_cancel, 10, 2);

	_ok->setFocus();

	connect(_ok, &QPushButton::clicked, this, &QDialog::accept);
	connect(_cancel, &QPushButton::clicked, this, &QDialog::reject);
}
