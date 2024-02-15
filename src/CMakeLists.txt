include_directories(${CMAKE_CURRENT_BINARY_DIR})

qt6_create_translation(QM_FILES ${CMAKE_SOURCE_DIR} ../lang/en.ts)

add_executable(om-repo-picker MainDialog.cpp Tools.cpp UpdateChannelPicker.cpp OMRepos.cpp ThirdPartyRepoWidget.cpp ClickableLabel.cpp FixedWidthScrollArea.cpp main.cpp ${QM_FILES})
target_link_libraries(om-repo-picker Qt6::Widgets Qt6::Core)
install(TARGETS om-repo-picker DESTINATION bin)
