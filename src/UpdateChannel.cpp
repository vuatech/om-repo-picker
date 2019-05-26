#include "UpdateChannel.h"
#include <QProcess>
#include <QByteArray>

const repo updateChannels[] = {
	{ "release", QT_TR_NOOP("Release"), QT_TR_NOOP("Always stay on this release") },
	{ "rock", QT_TR_NOOP("Rock"), QT_TR_NOOP("Always stay on current stable release") },
	{ "rolling", QT_TR_NOOP("Rolling"), QT_TR_NOOP("Rolling release - current, working versions") },
	{ "cooker", QT_TR_NOOP("Cooker"), QT_TR_NOOP("Development branch - most current, may break at any time") },
	{ nullptr, nullptr, nullptr },
};

const repo repos[] = {
	{ "main", QT_TR_NOOP("Main"), QT_TR_NOOP("The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.") },
	{ "unsupported", QT_TR_NOOP("Unsupported"), QT_TR_NOOP("Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don't mind an occasional crash.") },
	{ "restricted", QT_TR_NOOP("Restricted"), QT_TR_NOOP("Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.") },
	{ "non-free", QT_TR_NOOP("Non-Free"), QT_TR_NOOP("Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You're on your own.") },
	{ nullptr, nullptr, nullptr },
};

static int cachedUpdateChannel = -1;
static QString cachedArch = QString::null;

QString rpmArch() {
	if(!cachedArch.isNull())
		return cachedArch;
	QProcess p;
	p.setProgram("/usr/bin/rpm");
	p.setArguments(QStringList() << "--eval" << "%{_target_cpu}");
	p.start(QIODevice::ReadOnly);
	p.setReadChannel(QProcess::StandardOutput);
	p.waitForFinished();
	cachedArch=p.readAllStandardOutput().trimmed();
	return cachedArch;
}

QString secondaryArch() {
	if(rpmArch() == "x86_64" || rpmArch() == "znver1")
		return "i686";
	else if(rpmArch() == "aarch64")
		return "armv7hnl";
	return QString::null;
}

int currentUpdateChannel() {
	if(cachedUpdateChannel >= 0)
		return cachedUpdateChannel;

	for(int i=0; updateChannels[i].name; i++) {
		QProcess p;
		p.setProgram("/usr/bin/dnf");
		p.setArguments(QStringList() << "config-manager" << "--dump" << (QString(updateChannels[i].name) + "-" + rpmArch()));
		p.start(QIODevice::ReadOnly);
		p.setReadChannel(QProcess::StandardOutput);
		p.waitForFinished();
		while(p.canReadLine()) {
			QByteArray b = p.readLine(256).trimmed();
			if(b.startsWith("enabled =")) {
				if(b.endsWith("1")) {
					// That's the one...
					cachedUpdateChannel = i;
					return i;
				} else {
					// It's disabled, so we don't have to bother reading the
					// rest of dnf config-manager
					break;
				}
			}
		}
	}
	return 0;
}

bool repoEnabled(char const * const name, QString const &arch) {
	QString repo=QString(updateChannels[currentUpdateChannel()].name) + "-";
	repo += arch;
	if(strcmp(name, "main"))
		repo += QString("-") + name;
	QProcess p;
	p.setProgram("/usr/bin/dnf");
	p.setArguments(QStringList() << "config-manager" << "--dump" << repo);
	p.start(QIODevice::ReadOnly);
	p.setReadChannel(QProcess::StandardOutput);
	p.waitForFinished();
	while(p.canReadLine()) {
		QByteArray b = p.readLine(256).trimmed();
		if(b.startsWith("enabled ="))
			return b.endsWith("1");
	}
	return false;
}
