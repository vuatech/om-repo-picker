<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="ca">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="20"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>Selector de repositoris de programari de l&apos;OpenMandriva</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="30"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>A continuació, podeu triar des de quins repositoris voleu instal·lar i actualitzar els paquets (aplicacions addicionals, jocs, etc.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="48"/>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="50"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel·la</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="177"/>
        <source>Update channel changed</source>
        <translation>Ha canviat el canal d&apos;actualització.</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="177"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>S&apos;ha canviat el canal d’actualització. Probablement hauríeu d&apos;actualitzar tots els paquets amb el gestor de paquets gràfic o executant &quot;dnf --refresh distro-sync&quot; en una línia d&apos;ordres.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>Repositoris de l&apos;OpenMandriva</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Repositoris de tercers</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Repositoris de tercers que contenen programari (normalment no gratuït) on ni el programari ni els paquets són mantinguts per l&apos;equip d&apos;OpenMandriva. Aquests paquets no estan sota el nostre control i en rebreu actualitzacions abans que s&apos;hagin provat a l&apos;OpenMandriva. Feu-los servir segons la vostra responsabilitat.</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>&amp;Canal d&apos;actualització</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>&amp;Canal d&apos;actualització:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Habilita els repositoris de proves (actualitzacions prèvies al QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Realement voleu provar la degradació?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Esteu intentant canviar a un canal d’actualització més antic del que esteu utilitzant actualment. Això comportarà la degradació dels paquets, fet que pot funcionar o no. Tornar a versions anteriors no és compatible (les versions més antigues de les aplicacions no saben dels canvis potencials en versions més noves...) i això podria trencar el vostre sistema. Segur que ho voleu fer?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Realment voleu actualitzar?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Esteu a punt de canviar a un canal d’actualització més ràpid. Tingueu en compte que es tracta d’un canvi permanent. No és compatible la degradació del sistema tornant a un canal d’actualització més lent i això podria trencar el vostre sistema. Segur que ho voleu fer?</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation>El repositori principal Main conté els paquets principals que formen l&apos;OpenMandriva Lx. Sempre ha d&apos;estar habilitat</translation>
    </message>
</context>
<context>
    <name>repos</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>Main</source>
        <translation>Main</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Unsupported</source>
        <translation>Sense suport</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don&apos;t mind an occasional crash.</source>
        <translation>El repositori Unsupported conté paquets gratuïts, però no compatibles oficialment amb l&apos;OpenMandriva. Tot i que intentarem arreglar-los si es trenca alguna cosa, aquesta és una prioritat baixa. Habiliteu-lo si us en cal algun paquet i no us importa algun accident ocasional.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restringit</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>El repositori Restricted conté paquets gratuïts, però amb patents que poden fer-los il·legals d&apos;usar o distribuir en alguns països. Sou responsable de complir les lleis locals.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>No lliure</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>El repositori Non-free conté paquets que no són gratuïts (com a codi obert). Fins i tot si ho volem, no podem solucionar-ne els problemes. No en podem llegir el codi, ni verificar què fan realment els paquets. Tot i que no se&apos;n coneixen efectes secundaris, poden contenir programari espia o programari maliciós. Poden esborrar el disc dur. Aquí aneu sol.</translation>
    </message>
</context>
<context>
    <name>thirdPartyRepos</name>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>Brave Browser</source>
        <translation>Navegador Brave</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>The Brave web browser.</source>
        <translation>El navegador web valent</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>El navegador Google Chrome. Us recomanem que useu un navegador gratuït, com ara Falkon, Chromium, Firefox o Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>El navegador Microsoft Edge. Us recomanem que useu un navegador gratuït, com ara Falkon, Chromium, Firefox o Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>La missatgeria instantània de Skype. Us recomanem fermament que useu un missatger gratuït, com ara Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Skype Unstable</source>
        <translation>Skype inestable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Versions beta de la missatgeria instantània de Skype. Us recomanem fermament que useu un missatger gratuït, com ara Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>La plataforma de comunicació empresarial de Microsoft Teams. Us recomanem fermament que useu una plataforma gratuïta, com ara Mattermost.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>L&apos;IDE del codi Visual Studio. Recomanem fermament usar Qt Creator, KDevelop o altres IDE alternatius.</translation>
    </message>
</context>
<context>
    <name>updateChannels</name>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Release</source>
        <translation>Versió</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Always stay on this release</source>
        <translation>Mantén-te sempre en aquesta versió</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Mantén-te sempre a la versió estable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Contínua</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Versió contínua. Versió de treball, actual.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Branca de desenvolupament. La més actual, es pot trencar en qualsevol moment.</translation>
    </message>
</context>
</TS>