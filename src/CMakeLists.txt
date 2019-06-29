include_directories(${CMAKE_CURRENT_BINARY_DIR})

qt5_create_translation(QM_FILES ${CMAKE_SOURCE_DIR} ../lang/en.ts)

add_executable(om-repo-picker MainDialog.cpp Tools.cpp UpdateChannelPicker.cpp RepoWidget.cpp main.cpp ${QM_FILES})
target_link_libraries(om-repo-picker Qt5::Widgets Qt5::Core)
install(TARGETS om-repo-picker DESTINATION bin)
