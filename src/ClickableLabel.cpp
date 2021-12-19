#include "ClickableLabel.h"
#include <QAbstractButton>

ClickableLabel::ClickableLabel(QString const &text, QWidget *parent):QLabel(text, parent) {
	setWordWrap(true);
}

void ClickableLabel::mousePressEvent(QMouseEvent *) {
	QAbstractButton *b=qobject_cast<QAbstractButton*>(buddy());
	if(b)
		b->click();
}
