#pragma once

#include <QGroupBox>
#include <QGridLayout>
#include <QLabel>
#include <QComboBox>

class UpdateChannelPicker:public QGroupBox {
	Q_OBJECT
public:
	UpdateChannelPicker(QWidget *parent=0);
	int updateChannel() const { return _updateChannel->currentIndex(); }
public slots:
	void updateChannelSelected(int index);
protected:
	QGridLayout	_layout;
	QLabel *	_updateChannelLbl;
	QComboBox *	_updateChannel;
	QLabel *	_updateChannelExplanation;
};
