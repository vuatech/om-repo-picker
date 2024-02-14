<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="pl">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="20"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>Wybór repozytoriów oprogramowania dla OpenMandriva</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="30"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Poniżej, możesz wybrać z jakich repozytoriów chcesz instalować i aktualizować pakiety (dodatkowe aplikacje, gry, itp.).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="48"/>
        <source>&amp;OK</source>
        <translation>%Zastosuj</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="50"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="177"/>
        <source>Update channel changed</source>
        <translation>Zmieniono kanał aktualizacji</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="177"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Kanał aktualizacji został zmieniony. Prawdopodobnie chcesz odświeżyć wszystkie pakiety w graficznym menadżerze pakietów lub za pomocą polecenia  &quot;dnf --refresh distro-sync&quot; w wierszu poleceń.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>Repozytoria OpenMandrivy</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Repozytoria stron trzecich</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Repozytoria stron trzecich zawierające oprogramowanie (zwykle niewolne), w przypadku którego ani oprogramowanie, ani pakiety nie są utrzymywane przez zespół OpenMandriva. Pakiety te nie są pod naszą kontrolą i będziesz otrzymywać aktualizacje, zanim zostaną przetestowane w OpenMandriva. Używaj ich na własne ryzyko.</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>K&amp;anał aktualizacji</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>&amp;Kanał aktualizacji:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Włącz &amp;testowe repozytoria (Wcześniejsze aktualizacje dla QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Naprawdę chcesz korzystać ze starszej wersji?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Próbujesz przełączyć się do kanału aktualizacji starszego niż ten, którego używasz obecnie. To poskutkuje dezaktualizacją pakietów, które mogą dziać lub być niesprawne. Powrót do starszych wersji jest nieobsługiwany (starsze wersje aplikacji nie mogą wiedzieć o potencjalnych zmianach w nowszych wersjach...) i równie dobrze mogą uszkodzić system. Czy jesteś pewien?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Naprawdę uaktualnić?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Zamierzasz przełączyć się do szybszego kanału aktualizacji. Pamiętaj, że jest to trwała zmiana, przywrócenie systemu do wolniejszego kanału aktualizacji nie jest obsługiwane i może zepsuć twój system. Czy na pewno chcesz to zrobić?</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation>Repozytorium Main zawiera główne pakiety tworzące OpenMandriva Lx. Powinno być zawsze włączone.</translation>
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
        <translation>Repozytorium Unsupported zawiera pakiety, które są bezpłatne, ale nie są oficjalnie obsługiwane przez OpenMandriva. Chociaż jeśli coś się zepsuje to staramy się je naprawiać, jednak jest to dla nas niski priorytet. Włącz opcję Unsupported, jeśli ich potrzebujesz i nie przejmuj się okazjonalnymi awariami.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restricted</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>Repozytorium Restricted zawiera pakiety, które są bezpłatne, ale mogą być obciążone patentami, które mogą sprawić, że ich używanie lub dystrybucja będzie nielegalna w niektórych krajach. Użytkownik jest odpowiedzialny za przestrzeganie lokalnych przepisów.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>Non-Free</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>Repozytorium Non-free zawiera pakiety, które nie są wolne (jak w przypadku Open Source). Nawet jeślibyśmy chcieli, nie jesteśmy w stanie naprawić w nich problemów. Nie możemy odczytać kodu ani zweryfikować, co faktycznie robią pakiety. Chociaż nie są znane żadne skutki uboczne, mogą one zawierać oprogramowanie szpiegujące lub złośliwe oprogramowanie. Mogą wymazać Twój dysk twardy. Jesteś zdany na siebie.</translation>
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
        <translation>Przeglądarka Brave</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Przeglądarka Google Chrome. Zdecydowanie zalecamy zamiast tego korzystanie z wolnej przeglądarki, takiej jak Falkon, Chromium, Firefox lub Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Przeglądarka Microsoft Edge. Zdecydowanie zalecamy zamiast tego korzystanie z wolnej przeglądarki, takiej jak Falkon, Chromium, Firefox lub Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Komunikator Skype. Zdecydowanie zalecamy zamiast tego korzystanie z wolnego komunikatora, takiego jak Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Skype Unstable</source>
        <translation>Skype Unstable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Wersje beta komunikatora Skype. Zdecydowanie zalecamy zamiast tego korzystanie z wolnego komunikatora, takiego jak Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>Platforma komunikacji biznesowej Microsoft Teams. Zdecydowanie zalecamy zamiast tego korzystanie z wolnej platformy, takiej jak Mattermost.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>Edytor kodu IDE programu Visual Studio. Zdecydowanie zalecamy używanie Qt Creator, KDevelop lub innych alternatywnych IDE.</translation>
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
        <translation>Zawsze korzystaj z tej wersji</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Zawsze korzystać z obecnego stabilnego wydania</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Rolling</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Wydanie Rolling - aktualna, działająca wersja</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Gałąź rozwojowa - najbardziej aktualna, w każdej chwili może się zepsuć</translation>
    </message>
</context>
</TS>