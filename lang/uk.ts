<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="uk">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="20"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>Вибір репозиторію OpenMandriva Software</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="30"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Нижче ви можете вибрати, з яких репозиторіїв ви хочете встановлювати та оновлювати пакети (додаткові програми, ігри тощо).</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="48"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="50"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Скасувати</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="177"/>
        <source>Update channel changed</source>
        <translation>Змінено канал оновлення</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="177"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Канал оновлення змінено. Ймовірно, ви хочете оновити всі пакунки в графічному менеджері пакетів або запустивши «dnf --refresh distro-sync» у командному рядку.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>Репозиторії OpenMandriva</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Сторонні репозиторії</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Сторонні репозиторії, що містять (зазвичай небезкоштовне) програмне забезпечення, де ні програмне забезпечення, ні пакети не обслуговуються командою OpenMandriva. Ці пакунки не знаходяться під нашим контролем, і ви отримаєте оновлення до того, як вони будуть протестовані на OpenMandriva. Використовуйте на свій страх і ризик.</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>К&amp;анал оновлення</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>&amp;Канал оновлення:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Увімкнути &amp;testing репозиторій (оновлення завчасно для QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Ви справді хочете знизити версію?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Ви намагаєтеся перейти на канал оновлень, старіший за той, який ви зараз використовуєте. Це призведе до зниження версії пакетів, які можуть працювати або не працювати. Повернення до старіших версій не підтримується (старіші версії програм не можуть знати про потенційні зміни в новіших версіях...) і цілком може зламати вашу систему. Ви впевнені, що хочете це зробити?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Оновимо?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Ви збираєтеся переключитися на швидший канал оновлення. Повернення до більш повільного каналу оновлення системи не підтримується і може призвести до пошкодження системи. Ви впевнені, що хочете це зробити?</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation>Main репозиторій містить основні пакети, які складають OpenMandriva Lx. Його завжди слід увімкнути.</translation>
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
        <translation>Unsupported містить пакети, які є безкоштовними, але офіційно не підтримуються OpenMandriva. Хоча ми виправимо їх, якщо щось зламається, це низький пріоритет. Увімкніть Unsupported, якщо вони вам потрібні, і не заперечуйте випадкові збої.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restricted</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>Restricted містить пакети, які є безкоштовними, але обтяжені патентами, які можуть зробити їх незаконним використання або поширення в деяких країнах. Ви несете відповідальність за дотримання місцевих законів.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>Non-Free</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>Non-free містить пакети, які не є безкоштовними.(як у OpenSource) Навіть якби ми цього захочемо, ми не зможемо вирішити в них проблеми. Ми не можемо прочитати код або перевірити, що насправді роблять пакети. Вони можуть стерти ваш жорсткий диск. Все на ваш страх та ризик.</translation>
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
        <translation>Веб-браузер Brave</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Браузер Google Chrome. Натомість ми настійно рекомендуємо використовувати безкоштовний браузер, наприклад Falkon, Chromium, Firefox або Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Браузер Microsoft Edge. Натомість ми настійно рекомендуємо використовувати безкоштовний браузер, наприклад Falkon, Chromium, Firefox або Otter.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Месенджер Skype. Натомість ми настійно рекомендуємо використовувати безкоштовний месенджер, наприклад Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Skype Unstable</source>
        <translation>Skype Unstable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Бета-версія месенджера Skype. Натомість ми настійно рекомендуємо використовувати безкоштовний месенджер, наприклад Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>Платформа ділового спілкування Microsoft Teams. Натомість ми настійно рекомендуємо використовувати безкоштовну платформу, наприклад Mattermost.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>IDE Visual Studio Code. Ми наполегливо рекомендуємо використовувати Qt Creator, KDevelop або інші альтернативні IDE.</translation>
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
        <translation>Завжди залишайтеся на цьому релізі</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Завжди залишайтеся на цьому стабильному релізі</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Rolling</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Rolling реліз - поточні, робочі версії</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Гілка розробки - найактуальніша, може зламатися в будь-який момент</translation>
    </message>
</context>
</TS>