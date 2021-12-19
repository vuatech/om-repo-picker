#pragma once

#include <QLabel>

class ClickableLabel:public QLabel {
	Q_OBJECT
public:
	ClickableLabel(QString const &text, QWidget *parent);
protected:
	void mousePressEvent(QMouseEvent *event);
};
