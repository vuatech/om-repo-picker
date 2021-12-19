#include <QCoreApplication>
#include "RepoWidget.h"
#include "Tools.h"

RepoWidget::RepoWidget(int repo, QWidget *parent):QGroupBox(repos[repo].translatedName, parent),_layout(this)
{
	int y=0;
	_label = new QLabel(QCoreApplication::translate("repos", repos[repo].description), this);
	_label->setWordWrap(true);
	_layout.addWidget(_label, ++y, 1, 1, 2);
	setCheckable(true);
	setChecked(repoEnabled(repoName(repo)));
	if(!strcmp(repos[repo].name, "main")) {
		// Let's not allow n00b to disable main...
		setChecked(true);
		setDisabled(true);
	}
}
