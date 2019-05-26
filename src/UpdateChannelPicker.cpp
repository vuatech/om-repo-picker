#include "UpdateChannelPicker.h"
#include "UpdateChannel.h"
#include <QHBoxLayout>
#include <QProcess>

UpdateChannelPicker::UpdateChannelPicker(QWidget *parent):QGroupBox(tr("&Update channel"), parent),_layout(this) {

	_updateChannelLbl = new QLabel(tr("Update &channel:"), this);
	_layout.addWidget(_updateChannelLbl, 0, 0);
	_updateChannel = new QComboBox(this);
	_layout.addWidget(_updateChannel, 0, 1);
	_updateChannelLbl->setBuddy(_updateChannel);
	for(int i=0; updateChannels[i].name; i++)
		_updateChannel->addItem(tr(updateChannels[i].translatedName), QVariant(updateChannels[i].name));
	connect(_updateChannel, static_cast<void (QComboBox::*)(int)>(&QComboBox::currentIndexChanged), this, &UpdateChannelPicker::updateChannelSelected);
	_updateChannelExplanation = new QLabel(this);
	_layout.addWidget(_updateChannelExplanation, 1, 0, 1, 2);
	_updateChannel->setCurrentIndex(currentUpdateChannel());
}

void UpdateChannelPicker::updateChannelSelected(int idx)
{
	_updateChannelExplanation->setText("<center>" + tr(updateChannels[idx].description) + "</center>");
}
