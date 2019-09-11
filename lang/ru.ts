<?xml version="1.0" ?><!DOCTYPE TS><TS language="ru" version="2.1">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="10"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>OpenMandriva Software Repository Picker</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="20"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Ниже вы можете выбрать, из каких репозиториев вы хотите устанавливать и обновлять пакеты (дополнительные приложения, игры и т.д.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="22"/>
        <source>32-bit repositories contain the same packages built for 32 bit processors. Those repositories are usually useful only for compatibility with prebuilt packages for older systems - such as binary-only games and applications built for 32-bit processors and running 32-bit Windows applications in Wine.</source>
        <translation>32-битные репозитории содержат те же самые пакеты, но собранные для 32-битных процессоров. Эти репозитории обычно полезны только для совместимости с пакетами, собранными для более старых систем - к примеру, игры без исходного кода, приложения, собранные для 32-битных процессоров, и запуск 32-битных Windows приложений в Wine </translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="36"/>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="38"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>Update channel changed</source>
        <translation>Источник обновлений изменён</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Источник обновлений был изменён. Возможно вам стоит обновить все репозитории в графическом пакетном менеджере, или выполнить &quot;dnf --refresh distro-sync&quot; в командной строке.</translation>
    </message>
</context>
<context>
    <name>RepoWidget</name>
    <message>
        <location filename="../src/RepoWidget.cpp" line="10"/>
        <source>&amp;Enable</source>
        <translation>&amp;Включить</translation>
    </message>
    <message>
        <location filename="../src/RepoWidget.cpp" line="19"/>
        <source>Ena&amp;ble 32-bit</source>
        <translation>Вклю&amp;чить 32-бит</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="7"/>
        <source>U&amp;pdate channel</source>
        <translation>И&amp;сточник обновлений</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="9"/>
        <source>&amp;Update channel:</source>
        <translation>&amp;Источник обновлений:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="19"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Включить &amp;тестовые репозитории (Более быстрые обновления для QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>Really try to downgrade?</source>
        <translation>Вы уверены, что хотите откатить источник обновлений?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Вы хотите перейти на источник обновлений, который старее, чем тот, который вы сейчас используете. Это приведёт к установке более старых версий пакетов, которые могут и не работать. Возвращение к более старым версиям не поддерживается (более старые версии приложений не могут знать о возможных изменениях в новых версиях...) и могут сломать вашу систему. Вы уверены, что хотите это сделать? </translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>Really upgrade?</source>
        <translation>Вы уверены, что хотите обновиться?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Вы пытаетесь перейти на более быстрый источник обновлений. Учтите, что это безвозвратная операция, так как возвращение к более медленному источнику обновлений не поддерживается и может сломать вашу систему. Вы уверены, что хотите это сделать?</translation>
    </message>
</context>
</TS>