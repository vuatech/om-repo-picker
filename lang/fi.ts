<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fi">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="19"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>OpenMandriva Software Repository Picker</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="29"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Voit valita, mistä arkistoista haluat asentaa ja päivittää paketteja (lisäsovelluksia, pelejä jne.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="47"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="49"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Peruuta</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>Update channel changed</source>
        <translation>Päivitys kanava vaihdettu</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Päivitys kanava on muuttunut. Haluat ilmeisesti päivittää kaikki paketit graafisessa paketinhallinnassa tai suorita komentorivillä &quot;dnf --refresh distro-sync&quot;.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>OpenMandriva arkistot</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Kolmannen osapuolen arkistot</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Kolmannen osapuolen arkistot, sisältävät (yleensä ei-ilmaisia) ohjelmistoja, joita OpenMandriva-tiimi ei voi ylläpitää koska ne ovat suljettua ohjelmistoa. Nämä paketit eivät ole meidän hallinnassamme ja saat päivitykset ennen kuin niitä on testattu OpenMandrivalla. Käytä omalla vastuullasi.</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>Päivitys &amp;kanava</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>&amp;Päivitys kanava:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Käytä &amp;testausarkiston pakettivarastoa (päivitykset etukäteen QA:lle)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Yritätkö todella alentaa versiota?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Olet vaihtamassa päivitys kanavaan, joka on vanhempi kuin mitä käytät tällä hetkellä. Tämä johtaa pakettien alentamiseen, mikä saattaa toimia tai sitten ei. Paluuta vanhoihin versioihin ei tueta (sovellusten vanhat versiot eivät voi tietää mahdollisista muutoksista uudemmissa versioissa...) ja voi hyvinkin rikkoa järjestelmän. Oletko varma, että haluat tehdä tämän?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Oikeasti päivitys?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Olet vaihtamassa nopeampaan päivitys kanavaan. Huomaa, että tämä on pysyvä vaihto, järjestelmä alenee palaamalla hitaampaan kanavaan eikä sitä tueta ja voi rikkoa järjestelmän. Oletko varma, että haluat tehdä tämän?</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation>Main arkisto sisältää pääosan paketeista, jotka muodostavat OpenMandriva Lx:n. Tämän tulee olla aina käytössä.</translation>
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
        <translation>Unsupported</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don&apos;t mind an occasional crash.</source>
        <translation>Unsupported sisältää paketteja, jotka ovat ilmaisia, mutta OpenMandriva ei tue niitä virallisesti. Yritämme korjata ne, jos jokin menee rikki, mutta tämä on alhainen prioriteetti. Ota Unsupported käyttöön, jos tarvitset niitä etkä välitä satunnaisesta kaatumisesta.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restricted</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>Restricted sisältää paketteja, jotka ovat ilmaisia, mutta rasittaa patentit, jotka voivat tehdä niistä laittomia käyttää tai levittää joissakin maissa. Olet vastuussa paikallisten lakien noudattamisesta.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>Non-Free</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>Non-free sisältää paketteja, jotka eivät ole ilmaisia (kuten avoimessa lähdekoodissa). Vaikka haluaisimme, emme voi korjata niissä olevia ongelmia. Emme voi lukea koodia tai tarkistaa, mitä paketit todella tekevät. Vaikka sivuvaikutuksia ei tunneta, ne voivat sisältää vakoilu- tai haittaohjelmia. Ne voivat tyhjentää kiintolevyn. Olet omillasi.</translation>
    </message>
</context>
<context>
    <name>thirdPartyRepos</name>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>Brave Browser</source>
        <translation>Brave Browser</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>The Brave web browser.</source>
        <translation>Brave selain, joka estää jäljittäjät sekä mainokset ja samasta syystä väittää olevansa 3x nopempi kuin Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Google Chrome on suosittu selain, mutta suosittelemme käyttämään selaimia, kuten Falkon, Chromium, Firefox jne.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Microsoft Edge on suosittu selain, mutta suosittelemme käyttämään selaimia, kuten Falkon, Chromium, Firefox jne.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Opera Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Opera browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Yandex Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>The Yandex browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Vivaldi Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Vivaldi browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Skype on tunnettu pikaviestintä, mutta suosittelemme käyttämään viestimiä kuten Telegram, Choqok, Quaternion, Nheko jne.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Skype Unstable</source>
        <translation>Skype Unstable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Skype beetaversiot tarjoaa uusimman version, mutta suosittelemme käyttämään jotain muuta ilmaista viestintäohjelmaa.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>Microsoft Teams on tunnettu yritysviestintä, suosittelemme käyttämään ilmaista vaihtoehtoa kuten Mattermost tai Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>Visual Studio Code, suosittelemme vahvasti parempia vaihtoehtoja kuten Qt Creator ja KDevelop alustan käyttöä.</translation>
    </message>
</context>
<context>
    <name>updateChannels</name>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Release</source>
        <translation>Vapauta</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Always stay on this release</source>
        <translation>Pysy aina tässä julkaisussa</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Pysy aina nykyisessä vakaassa julkaisussa</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Rolling</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Rolling - nykyinen, toimiva versio</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Kehitysversio - uusin, jossa on taikaa, mutta helposti särkyvä</translation>
    </message>
</context>
</TS>
