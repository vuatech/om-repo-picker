#include "FixedWidthScrollArea.h"

void FixedWidthScrollArea::resizeEvent(QResizeEvent *e) {
	QScrollArea::resizeEvent(e);
	widget()->setFixedWidth(e->size().width());
	setMaximumHeight(widget()->height());
}
