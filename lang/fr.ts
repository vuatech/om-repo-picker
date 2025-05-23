<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="fr">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="19"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>Sélecteur de dépôts logiciels d&apos;OpenMandriva</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="29"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Ci-dessous, vous pouvez choisir à partir de quels dépôts vous voulez installer et mettre à jour les paquets (applications supplémentaires, jeux, etc.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="47"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="49"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>Update channel changed</source>
        <translation>&amp;Canal de mise à jour modifié</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Le canal de mise à jour a été changé. Vous devriez rafraîchir tous les paquets dans le gestionnaire graphique de paquets ou en lançant « dnf --refresh distro-sync » dans une ligne de commande.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>Dépôts d&apos;OpenMandriva</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Dépôts tiers</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Des dépôts tiers contenant des logiciels (généralement non libres) dont ni le logiciel ni les paquets ne sont maintenus par l&apos;équipe d&apos;OpenMandriva. Ces paquets ne sont pas sous notre contrôle et vous recevrez des mises à jour avant qu&apos;elles n&apos;aient été testées sur OpenMandriva. Utilisation à vos risques et périls</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>&amp;Canal de mise à jour</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>Cana&amp;l de mise à jour:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Activer les dépôts de &amp;Test (mise à jour précoce pour QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Vous voulez vraiment rétrograder ?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Vous tentez d&apos;activer un canal de mise à jour plus ancien que l&apos;actuel. Cela va rétrograder les paquets logiciels et il se peut qu&apos;ils ne fonctionnent plus.
Rétrograder vers d&apos;anciennes versions d&apos;applications n&apos;est pas supporté (Les anciennes versions ne peuvent utiliser les évolutions futur des nouvelles versions...) 
Cela peut endommager votre système. Êtes-vous sûr de vouloir continuer ?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Vous confirmez la mise à jour ?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Vous êtes sur le point de basculer sur un canal de mise à jour plus rapide. Prenez garde! C&apos;est une modification permanente, un retour sur le canal plus lent ne serait pas supporté et risque d’endommager votre système.
Êtes vous certain de vouloir faire cela ? </translation>
    </message>
</context>
<context>
    <name>repos</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation>Le dépôt principal contient les principaux paquets qui composent OpenMandriva Lx. Il devrait toujours être activé</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Extra</source>
        <translation>Extra</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Extra contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Extra if you need them and don&apos;t mind an occasional crash.</source>
        <translation>Extra contient des paquets libres, mais qui ne sont pas officiellement supportés par OpenMandriva. Nous essaierons de les corriger si quelque chose casse, mais ce n&apos;est pas une priorité. Activez Extra si vous en avez besoin et si vous n&apos;avez pas peur d&apos;un crash occasionnel</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restreint</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>Restreint contient des paquets gratuits, mais soumis à des brevets qui peuvent rendre leur utilisation ou leur distribution illégale dans certains pays. Il est de votre responsabilité de vous conformer aux lois locales.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>Non Libre</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>Non-libre contient des paquets qui ne sont pas libres (comme dans Open Source). Même si nous le voulons, nous ne pouvons pas résoudre les problèmes qu&apos;ils posent. Nous ne pouvons pas lire le code, ni vérifier ce que les paquets font réellement. Bien qu&apos;il n&apos;y ait pas d&apos;effets indésirables connus, ils peuvent contenir des logiciels espions ou des logiciels malveillants. Ils peuvent effacer votre mémoire. Vous êtes seul responsable</translation>
    </message>
</context>
<context>
    <name>thirdPartyRepos</name>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>Brave Browser</source>
        <translation>Navigateur Brave</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>The Brave web browser.</source>
        <translation>Le navigateur web Brave.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Navigateur Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Le navigateur Google Chrome. Nous vous recommandons fortement d&apos;utiliser plutôt un navigateur libre, tel quel Falkon, Chromium, Firefox ou Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Navigateur Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Le navigateur Microsoft Edge. Nous vous recommandons fortement d&apos;utiliser plutôt un navigateur libre, tel quel Falkon, Chromium, Firefox ou Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Opera Browser</source>
        <translation>Navigateur Opera</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Opera browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Le navigateur Opera. Nous vous recommandons fortement d&apos;utiliser plutôt un navigateur libre, tel quel Falkon, Chromium, Firefox ou Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Yandex Browser</source>
        <translation>Navigateur Yandex</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>The Yandex browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Le navigateur Yandex. Nous vous recommandons fortement d&apos;utiliser plutôt un navigateur libre, tel quel Falkon, Chromium, Firefox ou Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Vivaldi Browser</source>
        <translation>Navigateur Vivaldi</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Vivaldi browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Le navigateur Vivaldi. Nous vous recommandons fortement d&apos;utiliser plutôt un navigateur libre, tel quel Falkon, Chromium, Firefox ou Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>La messagerie instantanée Skype. Nous vous recommandons vivement d&apos;utiliser une messagerie libre, telle que Telegram, par exemple.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Skype Unstable</source>
        <translation>Skype non stable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Versions bêta de la messagerie instantanée Skype. Nous vous recommandons vivement d&apos;utiliser une messagerie libre, telle que Telegram, par exemple.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>La plateforme de communication professionnelle Microsoft Teams. Nous recommandons vivement l&apos;utilisation d&apos;une plateforme libre, telle que Mattermost, par exemple.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>L&apos;IDE Visual Studio Code. Nous recommandons fortement l&apos;utilisation de Qt Creator, KDevelop ou d&apos;autres IDE.</translation>
    </message>
</context>
<context>
    <name>updateChannels</name>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Release</source>
        <translation>Release</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Always stay on this release</source>
        <translation>Restez toujours sur cette version</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Toujours rester sur la version stable actuelle</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Rolling</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Rolling release - versions actuelles et fonctionnelles</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Branche de développement - la plus récente, peut être cassée à tout moment</translation>
    </message>
</context>
</TS>