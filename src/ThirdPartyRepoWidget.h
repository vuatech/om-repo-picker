#pragma once

#include <QGroupBox>
#include <QBoxLayout>
#include <QLabel>
#include <QList>
#include <QCheckBox>

class ThirdPartyRepoWidget:public QGroupBox {
	Q_OBJECT
public:
	ThirdPartyRepoWidget(QWidget *parent);
	// Workaround for nasty layout bug. Can probably be removed once we move to Qt 6
	QSize minimumSizeHint() const override { return _layout.sizeHint().grownBy(QMargins(0, 0, 0, 100)); }
	bool repoEnabled(int n) const { return _repo.at(n)->isChecked(); }
protected:
	QBoxLayout		_layout;
	QLabel *		_label;
	QList<QCheckBox *>	_repo;
};
