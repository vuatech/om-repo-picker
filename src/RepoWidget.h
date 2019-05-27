#pragma once

#include <QGroupBox>
#include <QGridLayout>
#include <QLabel>
#include <QCheckBox>

class RepoWidget:public QGroupBox {
	Q_OBJECT
public:
	RepoWidget(int repo, QWidget *parent=0);
	bool enabled() const { return _enable->isChecked(); }
	bool enabled32() const { return _enable32 && _enable32->isChecked(); }
protected:
	QGridLayout	_layout;
	QLabel *	_label;
	QCheckBox *	_enable;
	QCheckBox *	_enable32;
};
