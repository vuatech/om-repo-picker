#include "RepoWidget.h"

RepoWidget::RepoWidget(QString const &name, QString const &text, QWidget *parent):QGroupBox(name, parent),_layout(this)
{
	int y=0;
	_label = new QLabel(text, this);
	_label->setWordWrap(true);
	_layout.addWidget(_label, ++y, 1, 1, 2);
	_enable = new QCheckBox(tr("&Enable"), this);
	_layout.addWidget(_enable, ++y, 1);
	if(name == "Main") {
		_enable->setChecked(true);
		_enable->setDisabled(true);
	}
	_enable32 = new QCheckBox(tr("Ena&ble 32-bit"), this);
	_layout.addWidget(_enable32, y, 2);
}
