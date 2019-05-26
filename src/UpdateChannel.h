#pragma once

typedef struct {
	char const * const name;
	char const * const translatedName;
	char const * const description;
} repo;

extern const repo updateChannels[];
extern const repo repos[];
extern int currentUpdateChannel();
extern bool repoEnabled(char const * const name);
