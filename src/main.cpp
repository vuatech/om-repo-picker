#include "MainDialog.h"
#include <QApplication>

int main(int argc, char **argv) {
	QApplication app(argc, argv);
	MainDialog d;
	return d.exec();
}
