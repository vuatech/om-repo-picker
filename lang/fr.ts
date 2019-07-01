<?xml version="1.0" ?><!DOCTYPE TS><TS language="fr" version="2.1">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="10"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>Sélecteur de dépôts logiciels d&apos;OpenMandriva</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="20"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Ci-dessous, vous pouvez choisir à partir de quels dépôts vous voulez installer et mettre à jour les paquets (applications supplémentaires, jeux, etc.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="22"/>
        <source>32-bit repositories contain the same packages built for 32 bit processors. Those repositories are usually useful only for compatibility with prebuilt packages for older systems - such as binary-only games and applications built for 32-bit processors and running 32-bit Windows applications in Wine.</source>
        <translation>Les dépôts 32 bits contiennent les mêmes paquets conçus pour les processeurs 32 bits. Ces dépôts ne sont généralement utiles que pour la compatibilité avec les paquets pré-construits pour les anciens systèmes - tels que les jeux et applications binaires uniquement, les applications conçues pour les processeurs 32 bits et les applications Windows 32 bits fonctionnant sous Wine.</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="36"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="38"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>Update channel changed</source>
        <translation>&amp;Canal de mise à jour modifié</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Le canal de mise à jour a été changé. Vous devriez rafraîchir tous les paquets dans le gestionnaire graphique de paquets ou en lançant « dnf --refresh distro-sync » dans une ligne de commande.</translation>
    </message>
</context>
<context>
    <name>RepoWidget</name>
    <message>
        <location filename="../src/RepoWidget.cpp" line="10"/>
        <source>&amp;Enable</source>
        <translation>&amp;Activer</translation>
    </message>
    <message>
        <location filename="../src/RepoWidget.cpp" line="19"/>
        <source>Ena&amp;ble 32-bit</source>
        <translation>&amp;Activer 32-bits</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="7"/>
        <source>U&amp;pdate channel</source>
        <translation>&amp;Canal de mise à jour</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="9"/>
        <source>&amp;Update channel:</source>
        <translation>Cana&amp;l de mise à jour:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="19"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Activer les dépôts de &amp;Test (mise à jour précoce pour QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>Really try to downgrade?</source>
        <translation>Vous voulez vraiment rétrograder ?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Vous tentez d&apos;activer un canal de mise à jour plus ancien que l&apos;actuel. Cela va rétrograder les paquets logiciels et il se peut qu&apos;ils ne fonctionnent plus.
Rétrograder vers d&apos;anciennes versions d&apos;applications n&apos;est pas supporté (Les anciennes versions ne peuvent utiliser les évolutions futur des nouvelles versions...) 
Cela peut endommager votre système. Êtes-vous sûr de vouloir continuer ?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>Really upgrade?</source>
        <translation>Vous confirmez la mise à jour ?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Vous êtes sur le point de basculer sur un canal de mise à jour plus rapide. Prenez garde! C&apos;est une modification permanente, un retour sur le canal plus lent ne serait pas supporté et risque d’endommager votre système.
Êtes vous certain de vouloir faire cela ? </translation>
    </message>
</context>
</TS>