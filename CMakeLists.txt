project(om-repo-picker)
SET(PROJECT_VERSION "1.2.4")

cmake_minimum_required(VERSION 3.14.0 FATAL_ERROR)
set(QT_MIN_VERSION "6.2.0")
set(QT_MAJOR_VERSION 6)
set(KF_MAJOR_VERSION 6)
find_package(ECM 5.240.0 REQUIRED NO_MODULE)
set(CMAKE_MODULE_PATH ${ECM_MODULE_PATH} ${ECM_KDE_MODULE_DIR} ${PROJECT_SOURCE_DIR})

include(ECMInstallIcons)
include(FeatureSummary)
include(KDEInstallDirs)
include(KDECMakeSettings)
include(KDECompilerSettings)

find_package(Qt6 ${QT_MIN_VERSION} CONFIG REQUIRED COMPONENTS Core Gui Widgets LinguistTools)

add_subdirectory(src)
add_subdirectory(desktop)

feature_summary(WHAT ALL FATAL_ON_MISSING_REQUIRED_PACKAGES)
