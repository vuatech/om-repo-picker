#include "UpdateChannelPicker.h"
#include "Tools.h"
#include <QHBoxLayout>
#include <QMessageBox>
#include <QProcess>

UpdateChannelPicker::UpdateChannelPicker(QWidget *parent):QGroupBox(tr("U&pdate channel"), parent),_layout(this) {

	_updateChannelLbl = new QLabel(tr("&Update channel:"), this);
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
	if(idx < currentUpdateChannel() && currentUpdateChannel() != 1) {
		// Switching between release and rock (1) is possible...
		// For anything else, switching backwards is dangerous...
		if(QMessageBox::warning(qobject_cast<QWidget*>(parent()), tr("Really try to downgrade?"), tr("You're trying to switch to an update channel older than what you're currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can't know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?"), QMessageBox::Yes|QMessageBox::No, QMessageBox::No) == QMessageBox::No) {
			_updateChannel->setCurrentIndex(currentUpdateChannel());
			return;
		}
	} else if(idx > currentUpdateChannel() && idx != 1) {
		if(QMessageBox::information(qobject_cast<QWidget*>(parent()), tr("Really upgrade?"), tr("You're about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?"), QMessageBox::Yes|QMessageBox::No, QMessageBox::Yes) == QMessageBox::No) {
			_updateChannel->setCurrentIndex(currentUpdateChannel());
			return;
		}
	}
	_updateChannelExplanation->setText("<center>" + tr(updateChannels[idx].description) + "</center>");
}
