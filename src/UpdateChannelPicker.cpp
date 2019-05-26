#include "UpdateChannelPicker.h"
#include <QHBoxLayout>

UpdateChannelPicker::UpdateChannelPicker(QWidget *parent):QGroupBox(tr("&Update channel")),_layout(this) {

	_updateChannelLbl = new QLabel(tr("Update &channel:"), this);
	_layout.addWidget(_updateChannelLbl, 0, 0);
	_updateChannel = new QComboBox(this);
	_layout.addWidget(_updateChannel, 0, 1);
	_updateChannelLbl->setBuddy(_updateChannel);
	_updateChannel->addItem(tr("4.0"), QVariant("release"));
	_updateChannel->addItem(tr("Rock", "update channel"), QVariant("rock"));
	_updateChannel->addItem(tr("Rolling", "update channel"), QVariant("rolling"));
	_updateChannel->addItem(tr("Cooker", "update channel"), QVariant("cooker"));
	connect(_updateChannel, static_cast<void (QComboBox::*)(int)>(&QComboBox::currentIndexChanged), this, &UpdateChannelPicker::updateChannelSelected);
	_updateChannelExplanation = new QLabel(this);
	_layout.addWidget(_updateChannelExplanation, 1, 0, 1, 2);
	updateChannelSelected(0);
}

void UpdateChannelPicker::updateChannelSelected(int idx)
{
	switch(idx) {
	case 0:
		_updateChannelExplanation->setText("<center>" + tr("Always stay on this release") + "</center>");
		break;
	case 1:
		_updateChannelExplanation->setText("<center>" + tr("Always use the current stable release") + "</center>");
		break;
	case 2:
		_updateChannelExplanation->setText("<center>" + tr("Rolling release - current, known working version") + "</center>");
		break;
	case 3:
		_updateChannelExplanation->setText("<center>" + tr("Development branch - current, untested development") + "</center>");
		break;
	}
}
