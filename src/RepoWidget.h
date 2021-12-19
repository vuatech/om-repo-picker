#pragma once

#include <QGroupBox>
#include <QGridLayout>
#include <QLabel>
#include <QCheckBox>

class RepoWidget:public QGroupBox {
	Q_OBJECT
public:
	RepoWidget(int repo, QWidget *parent=0);
protected:
	QGridLayout	_layout;
	QLabel *	_label;
};
