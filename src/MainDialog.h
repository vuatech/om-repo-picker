#pragma once
#include <QDialog>
#include <QGridLayout>
#include <QLabel>
#include <QComboBox>
#include <QCheckBox>
#include <QPushButton>
#include <QMap>
#include "UpdateChannelPicker.h"
#include "RepoWidget.h"

class MainDialog:public QDialog {
	Q_OBJECT
public:
	MainDialog(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags());
protected:
	QGridLayout *	_layout;
	UpdateChannelPicker *	_updateChannel;
	QLabel *	_topLbl;
	QMap<QString,RepoWidget*>	_repoWidgets;
	QPushButton *	_ok;
	QPushButton *	_cancel;
};
