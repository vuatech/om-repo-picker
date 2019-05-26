#pragma once

#include <QGroupBox>
#include <QGridLayout>
#include <QLabel>
#include <QCheckBox>

class RepoWidget:public QGroupBox {
	Q_OBJECT
public:
	RepoWidget(QString const &name, QString const &text, QWidget *parent=0);
protected:
	QGridLayout	_layout;
	QLabel *	_label;
	QCheckBox *	_enable;
	QCheckBox *	_enable32;
};
