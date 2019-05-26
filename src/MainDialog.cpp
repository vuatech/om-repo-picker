#include "MainDialog.h"
#include "UpdateChannel.h"
#include <QtGlobal>

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
		RepoWidget *w = new RepoWidget(i, this);
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
