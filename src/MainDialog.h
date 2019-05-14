#pragma once
#include <QDialog>
#include <QGridLayout>
#include <QLabel>
#include <QCheckBox>
#include <QPushButton>

class MainDialog:public QDialog {
	Q_OBJECT
public:
	MainDialog(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags());
protected:
	QGridLayout *	_layout;
	QLabel *	_topLbl;
	QLabel *	_mainExp;
	QCheckBox *	_main;
	QCheckBox *	_main32;
	QLabel *	_unsupportedExp;
	QCheckBox *	_unsupported;
	QCheckBox *	_unsupported32;
	QLabel *	_restrictedExp;
	QCheckBox *	_restricted;
	QCheckBox *	_restricted32;
	QLabel *	_nonfreeExp;
	QCheckBox *	_nonfree;
	QCheckBox *	_nonfree32;
	QPushButton *	_ok;
	QPushButton *	_cancel;
};
