#include "RepoWidget.h"
#include "Tools.h"

RepoWidget::RepoWidget(int repo, QWidget *parent):QGroupBox(repos[repo].translatedName, parent),_layout(this)
{
	int y=0;
	_label = new QLabel(tr(repos[repo].description), this);
	_label->setWordWrap(true);
	_layout.addWidget(_label, ++y, 1, 1, 2);
	_enable = new QCheckBox(tr("&Enable"), this);
	_layout.addWidget(_enable, ++y, 1);
	_enable->setChecked(repoEnabled(repoName(repo)));
	if(!strcmp(repos[repo].name, "main")) {
		// Let's not allow n00b to disable main...
		_enable->setChecked(true);
		_enable->setDisabled(true);
	}
	if(!secondaryArch().isNull()) {
		_enable32 = new QCheckBox(tr("Ena&ble %1 repositories").arg(secondaryArch()), this);
		_enable32->setChecked(repoEnabled(repoName(repo, -1, secondaryArch())));
		_layout.addWidget(_enable32, y, 2);
	} else
		_enable32 = nullptr;
}
