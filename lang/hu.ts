<?xml version="1.0" ?><!DOCTYPE TS><TS language="hu" version="2.1">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="10"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>OpenMandriva Szoftvertároló-választó</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="20"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Az alábbiakban kiválaszthatja, hogy mely tárolókból szeretné telepíteni és frissíteni a csomagokat (extra alkalmazások, játékok stb.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="22"/>
        <source>32-bit repositories contain the same packages built for 32 bit processors. Those repositories are usually useful only for compatibility with prebuilt packages for older systems - such as binary-only games and applications built for 32-bit processors and running 32-bit Windows applications in Wine.</source>
        <translation>A 32 bites tárolók ugyanazokat a csomagokat tartalmazzák, de 32 bites processzorokhoz készültek. Ezek a tárolók általában csak a régebbi rendszerekhez előre összeállított csomagokkal való kompatibilitás szempontjából hasznosak - például a csak bináris játékok és a 32 bites processzorokhoz összeállított alkalmazások, valamint a 32 bites Windows alkalmazások futtatása a Wine-ban.</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="36"/>
        <source>&amp;OK</source>
        <translation>Oké</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="38"/>
        <source>&amp;Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>Update channel changed</source>
        <translation>Frissítési csatorna változott</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>A frissítési csatorna megváltozott. Valószínűleg frissíteni kell az összes csomagot a grafikus csomagkezelőben vagy a &quot;dnf --refresh distro-sync&quot; terminálparancs futtatásával.</translation>
    </message>
</context>
<context>
    <name>RepoWidget</name>
    <message>
        <location filename="../src/RepoWidget.cpp" line="10"/>
        <source>&amp;Enable</source>
        <translation>Engedélyez</translation>
    </message>
    <message>
        <location filename="../src/RepoWidget.cpp" line="19"/>
        <source>Ena&amp;ble 32-bit</source>
        <translation>32-bit engedélyezése</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="7"/>
        <source>U&amp;pdate channel</source>
        <translation>Frissítési csatorna</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="9"/>
        <source>&amp;Update channel:</source>
        <translation>Frissítési csatorna:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="19"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Testing tárolók engedélyezése (Újabb frissítések a teszteléshez)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>Really try to downgrade?</source>
        <translation>Tényleg megpróbál régebbi verzióra váltani?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Egy régebbi frissítési csatornára próbál váltani, mint amit jelenleg használ. Ez a csomagok visszaállítását eredményezi, ami vagy működik, vagy nem. A régebbi verziókra való visszalépés nem támogatott (az alkalmazások régebbi verziói nem tudhatnak az újabb verziók esetleges változásairól...), és könnyen tönkreteheti a rendszerét. Biztos benne, hogy ezt akarja csinálni?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>Really upgrade?</source>
        <translation>Tényleg frissíteni szeretne?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Gyorsabb frissítési csatornára fog váltani. Felhívjuk figyelmét, hogy ez egy végleges váltás, a rendszer visszaállítása lassabb frissítési csatornára való visszatéréssel nem támogatott, és tönkreteheti a rendszert. Biztos vagy benne, hogy ezt akarja csinálni?</translation>
    </message>
</context>
</TS>