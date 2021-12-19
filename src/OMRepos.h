#pragma once

#include <QGroupBox>
#include <QGridLayout>
#include <QList>
#include <QCheckBox>

class OMRepos:public QGroupBox {
	Q_OBJECT
public:
	OMRepos(QWidget *parent);
	bool repoEnabled(int n) const { return _repo.at(n)->isChecked(); }
protected:
	QGridLayout		_layout;
	QList<QCheckBox*>	_repo;
};
