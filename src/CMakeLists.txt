include_directories(${CMAKE_CURRENT_BINARY_DIR})

file(GLOB TRANSLATIONS ${CMAKE_SOURCE_DIR}/lang/*.ts)
file(GLOB SOURCES ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp)

add_executable(om-repo-picker ${SOURCES})
qt_add_translations(om-repo-picker TS_FILES ${TRANSLATIONS} RESOURCE_PREFIX "/i18n" )
target_link_libraries(om-repo-picker Qt6::Widgets Qt6::Core)
install(TARGETS om-repo-picker DESTINATION bin)
