#include "MainDialog.h"
#include <QApplication>
#include <QTranslator>
#include <iostream>

int main(int argc, char **argv) {
	QApplication app(argc, argv);
	QTranslator tr;
	QString locale = QLocale::system().name();
	if(!tr.load(":/i18n/" + locale + ".qm")) {
		locale = locale.split('_').at(0);
		(void)tr.load(":/i18n/" + locale + ".qm");
	}
	app.installTranslator(&tr);
	MainDialog d;
	return d.exec();
}
