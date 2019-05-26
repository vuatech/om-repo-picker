#pragma once
#include <QString>

typedef struct {
	char const * const name;
	char const * const translatedName;
	char const * const description;
} repo;

extern const repo updateChannels[];
extern const repo repos[];
extern int currentUpdateChannel();
/** Get the current rpm architecture (unlike uname, this
/   knows the difference between e.g. x86_64 and znver1 */
extern QString rpmArch();
extern QString secondaryArch();
extern bool repoEnabled(char const * const name, QString const &arch=rpmArch());
