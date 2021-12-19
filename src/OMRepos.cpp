#include <QCoreApplication>
#include <QLabel>
#include "OMRepos.h"
#include "ClickableLabel.h"
#include "Tools.h"

#include <iostream>

OMRepos::OMRepos(QWidget *parent):QGroupBox(tr("OpenMandriva repositories"), parent),_layout(this) {
	int y=0;
	for(int i=0; repos[i].name; i++) {
		QCheckBox *cb=new QCheckBox(QCoreApplication::translate("repos", repos[i].translatedName), this);
		QLabel *lbl=new ClickableLabel(QCoreApplication::translate("repos", repos[i].description), this);
		cb->setChecked(::repoEnabled(repoName(i)));
		// Let's make sure n00b don't break things...
		if(!strcmp(repos[i].name, "main")) {
			cb->setChecked(true);
			cb->setEnabled(false);
		}
		lbl->setBuddy(cb);
		_layout.addWidget(cb, y, 1);
		_layout.addWidget(lbl, y++, 2);
		_repo.append(cb);
	}
	_layout.setHorizontalSpacing(5);
	_layout.setColumnStretch(0, 0);
	_layout.setColumnStretch(1, 1);
}
