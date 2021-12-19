#include <QCoreApplication>
#include "ThirdPartyRepoWidget.h"
#include "Tools.h"

ThirdPartyRepoWidget::ThirdPartyRepoWidget(QWidget *parent):QGroupBox(tr("Third party repositories"), parent),_layout(QBoxLayout::TopToBottom, this) {
	_label = new QLabel(tr("Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk."), this);
	_label->setWordWrap(true);
	_layout.addWidget(_label);
	for(int i=0; thirdPartyRepos[i].name; i++) {
		QCheckBox *cb=new QCheckBox(QCoreApplication::translate("thirdPartyRepos", thirdPartyRepos[i].description), this);
		cb->setChecked(::repoEnabled(thirdPartyRepos[i].name));
		_layout.addWidget(cb);
		_repo.append(cb);
	}
}
