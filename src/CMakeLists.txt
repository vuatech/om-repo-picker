include_directories(${CMAKE_CURRENT_BINARY_DIR})

add_executable(om-repo-picker MainDialog.cpp UpdateChannelPicker.cpp RepoWidget.cpp main.cpp)
target_link_libraries(om-repo-picker Qt5::Widgets Qt5::Core)
install(TARGETS om-repo-picker DESTINATION bin)
