#pragma once
#include <QString>
#include <QStringList>

typedef struct {
	char const * const name;
	char const * const translatedName;
	char const * const description;
	char const * const url;
	char const * const gpgKey;
} repo;

extern const repo updateChannels[];
extern const repo repos[];
extern const repo thirdPartyRepos[];
extern int currentUpdateChannel();
/** Get the current rpm architecture (unlike uname, this
/   knows the difference between e.g. x86_64 and znver1 */
extern QString rpmArch();
/** Get the full name for a repository
 * @param repo Repository index (main/unsupported/restricted/non-free)
 * @param updateChannel Update channel index (release/rock/rolling/cooker) [If negative, active update channel will be used]
 * @param arch Architecture (by default, current architecture will be used)
 * @param special "Special" repository (updates/testing/...)
 */
extern QString repoName(int repo, int updateChannel=-1, QString const &arch=rpmArch(), QString const &special=QString());
extern bool repoEnabled(QString const &repoName);
extern bool disableRepos(QStringList const &repos);
extern bool enableRepos(QStringList const &repos);
