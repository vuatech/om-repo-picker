#include "Tools.h"
#include <QProcess>
#include <QFile>
#include <QByteArray>

#include <iostream>

#include <unistd.h>
#include <fcntl.h>

const repo updateChannels[] = {
	{ "release", QT_TRANSLATE_NOOP("updateChannels", "Release"), QT_TRANSLATE_NOOP("updateChannels", "Always stay on this release"), nullptr, nullptr },
	{ "rock", QT_TRANSLATE_NOOP("updateChannels", "Rock"), QT_TRANSLATE_NOOP("updateChannels", "Always stay on current stable release"), nullptr, nullptr },
	{ "rolling", QT_TRANSLATE_NOOP("updateChannels", "Rolling"), QT_TRANSLATE_NOOP("updateChannels", "Rolling release - current, working versions"), nullptr, nullptr },
	{ "cooker", QT_TRANSLATE_NOOP("updateChannels", "Cooker"), QT_TRANSLATE_NOOP("updateChannels", "Development branch - most current, may break at any time"), nullptr, nullptr },
	{ nullptr, nullptr, nullptr, nullptr, nullptr },
};

const repo repos[] = {
	{ "main", QT_TRANSLATE_NOOP("repos", "Main"), QT_TRANSLATE_NOOP("repos", "The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled."), nullptr, nullptr },
	{ "unsupported", QT_TRANSLATE_NOOP("repos", "Unsupported"), QT_TRANSLATE_NOOP("repos", "Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don't mind an occasional crash."), nullptr, nullptr },
	{ "restricted", QT_TRANSLATE_NOOP("repos", "Restricted"), QT_TRANSLATE_NOOP("repos", "Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws."), nullptr, nullptr },
	{ "non-free", QT_TRANSLATE_NOOP("repos", "Non-Free"), QT_TRANSLATE_NOOP("repos", "Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You're on your own."), nullptr, nullptr },
	{ nullptr, nullptr, nullptr, nullptr, nullptr },
};

const repo thirdPartyRepos[] = {
#ifdef __x86_64__
	{ "brave", QT_TRANSLATE_NOOP("thirdPartyRepos", "Brave Browser"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Brave web browser."), "https://brave-browser-rpm-release.s3.brave.com/x86_64/", "https://brave-browser-rpm-release.s3.brave.com/brave-core.asc" },
	{ "google-chrome", QT_TRANSLATE_NOOP("thirdPartyRepos", "Google Chrome"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead."), "http://dl.google.com/linux/chrome/rpm/stable/x86_64", "https://dl.google.com/linux/linux_signing_key.pub" },
	{ "microsoft-edge", QT_TRANSLATE_NOOP("thirdPartyRepos", "Microsoft Edge"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead."), "https://packages.microsoft.com/yumrepos/edge/", "https://packages.microsoft.com/keys/microsoft.asc" },
	{ "opera-browser", QT_TRANSLATE_NOOP("thirdPartyRepos", "Opera Browser"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Opera browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead."), "https://rpm.opera.com/rpm", "https://rpm.opera.com/rpmrepo.key" },
	{ "yandex-browser", QT_TRANSLATE_NOOP("thirdPartyRepos", "Yandex Browser"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Yandex browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead."), "https://repo.yandex.ru/yandex-browser/rpm/stable/x86_64/", "https://repo.yandex.ru/yandex-browser/YANDEX-BROWSER-KEY.GPG" },
	{ "vivaldi-browser", QT_TRANSLATE_NOOP("thirdPartyRepos", "Vivaldi Browser"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Vivaldi browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead."), "https://repo.vivaldi.com/archive/rpm/x86_64", "https://repo.vivaldi.com/archive/linux_signing_key.pub" },	
	{ "skype", QT_TRANSLATE_NOOP("thirdPartyRepos", "Skype"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead."), "https://repo.skype.com/rpm/stable/", "https://repo.skype.com/data/SKYPE_GPG-KEY" },
	{ "skype-unstable", QT_TRANSLATE_NOOP("thirdPartyRepos", "Skype Unstable"), QT_TRANSLATE_NOOP("thirdPartyRepos", "Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead."), "https://repo.skype.com/rpm/stable/", "https://repo.skype.com/data/SKYPE_GPG-KEY" },
	{ "teams", QT_TRANSLATE_NOOP("thirdPartyRepos", "Microsoft Teams"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead."), "https://packages.microsoft.com/yumrepos/ms-teams", "https://packages.microsoft.com/keys/microsoft.asc" },
#endif
#if defined(__x86_64__) || defined(__aarch64__) || defined(__arm__)
	{ "vscode", QT_TRANSLATE_NOOP("thirdPartyRepos", "Visual Studio Code"), QT_TRANSLATE_NOOP("thirdPartyRepos", "The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs."), "https://packages.microsoft.com/yumrepos/vscode/", "https://packages.microsoft.com/keys/microsoft.asc" },
#endif
	{ nullptr, nullptr, nullptr, nullptr, nullptr },
};

static int cachedUpdateChannel = -1;
static QString cachedArch = QString();

QString rpmArch() {
	if(!cachedArch.isEmpty())
		return cachedArch;
	QProcess p;
	p.setProgram("/usr/bin/rpm");
	// We really want:
	//p.setArguments(QStringList() << "--eval" << "%{_target_cpu}");
	// But this doesn't catch the special case of using an x86_64 OS
	// on a znver1 machine -- so let's query a core package instead
	p.setArguments(QStringList() << "-q" << "--qf" << "%{ARCH}" << "filesystem");
	p.start(QIODevice::ReadOnly);
	p.setReadChannel(QProcess::StandardOutput);
	p.waitForFinished();
	cachedArch=p.readAllStandardOutput().trimmed();
	if(cachedArch.isEmpty()) {
		// Fall back to --eval %{_target_cpu} if for some reason filesystem isn't installed
		p.setProgram("/usr/bin/rpm");
		p.setArguments(QStringList() << "--eval" << "%{_target_cpu}");
		p.start(QIODevice::ReadOnly);
		p.setReadChannel(QProcess::StandardOutput);
		p.waitForFinished();
		cachedArch=p.readAllStandardOutput().trimmed();
	}
	return cachedArch;
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

QString repoName(int repo, int updateChannel, QString const &arch, QString const &special) {
	if(updateChannel < 0)
		updateChannel = currentUpdateChannel();

	QString r=QString(updateChannels[updateChannel].name);
	if(!special.isEmpty())
		r += "-" + special;
       	r += "-" + arch;
	if(strcmp(repos[repo].name, "main"))
		r += QString("-") + repos[repo].name;
	return r;
}

bool repoEnabled(QString const &repo) {
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

bool disableRepos(QStringList const &repos) {
	QString cmd;
	QStringList args;
	if(access(QFile::encodeName("/etc/yum.repos.d/openmandriva-cooker-" + rpmArch() + ".repo"), W_OK)) {
		cmd="/usr/bin/kdesu";
		args << "--" << "/usr/bin/dnf";
	} else {
		cmd="/usr/bin/dnf";
	}
	args << "config-manager" << "--set-disabled" << repos;
	return QProcess::execute(cmd, args) == 0;
}

bool enableRepos(QStringList const &repos) {
	QString cmd;
	QStringList args;
	if(access(QFile::encodeName("/etc/yum.repos.d/openmandriva-cooker-" + rpmArch() + ".repo"), W_OK)) {
		cmd="/usr/bin/kdesu";
		args << "--" << "/usr/bin/dnf";
	} else {
		cmd="/usr/bin/dnf";
	}
	args << "config-manager" << "--set-enabled" << repos;
	return QProcess::execute(cmd, args) == 0;
}
