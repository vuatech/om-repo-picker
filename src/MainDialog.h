#pragma once
#include <QDialog>
#include <QGridLayout>
#include <QLabel>
#include <QComboBox>
#include <QCheckBox>
#include <QPushButton>
#include <QMap>
#include "Tools.h"
#include "UpdateChannelPicker.h"
#include "RepoWidget.h"
#include "ThirdPartyRepoWidget.h"

class MainDialog:public QDialog {
	Q_OBJECT
public:
	MainDialog(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags());
	~MainDialog();
	QSize sizeHint() const override;
public slots:
	void okClicked();
protected:
	QGridLayout *	_layout;
	UpdateChannelPicker *	_updateChannel;
	QLabel *	_topLbl;
	RepoWidget **	_repoWidgets;
	ThirdPartyRepoWidget *_thirdParty;
	QPushButton *	_ok;
	QPushButton *	_cancel;
};
