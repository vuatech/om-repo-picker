#pragma once
#include <QScrollArea>
#include <QResizeEvent>

class FixedWidthScrollArea:public QScrollArea {
	Q_OBJECT
public:
	FixedWidthScrollArea(QWidget *parent):QScrollArea(parent) {}
protected:
	void resizeEvent(QResizeEvent *e) override;
};
