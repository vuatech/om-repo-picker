#include "RepoWidget.h"
#include "UpdateChannel.h"

RepoWidget::RepoWidget(int repo, QWidget *parent):QGroupBox(repos[repo].translatedName, parent),_layout(this)
{
	int y=0;
	_label = new QLabel(tr(repos[repo].description), this);
	_label->setWordWrap(true);
	_layout.addWidget(_label, ++y, 1, 1, 2);
	_enable = new QCheckBox(tr("&Enable"), this);
	_layout.addWidget(_enable, ++y, 1);
	if(!strcmp(repos[repo].name, "main")) {
		// Let's not allow n00b to disable main...
		_enable->setDisabled(true);
	}
	_enable->setChecked(repoEnabled(repos[repo].name));
	if(!secondaryArch().isNull()) {
		_enable32 = new QCheckBox(tr("Ena&ble 32-bit"), this);
		_enable32->setChecked(repoEnabled(repos[repo].name, secondaryArch()));
		_layout.addWidget(_enable32, y, 2);
	} else
		_enable32 = nullptr;
}
