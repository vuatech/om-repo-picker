<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="it">
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
        <translation>Qui di seguito, puoi selezionare da quale repository vuoi installare ed aggiornare i pacchetti (altre applicazioni, giochi, ecc.)</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="47"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="49"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancella</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>Update channel changed</source>
        <translation>Cambiato il canale per l&apos;aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Il canale per l&apos;aggiornamento è cambiato. Adesso è consigliabile ricaricare tutti i pacchetti tramite il gestore di pacchetti grafico o meglio ancora con &quot;dnf --refresh distro-sync&quot; da riga di comando.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>OpenMandriva repository</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Repository di terze parti</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Repository di terze parti contenenti software (solitamente non libero) dove né il software né i pacchetti sono mantenuti dal team di OpenMandriva. Questi pacchetti non sono sotto il nostro controllo e riceverai aggiornamenti prima che siano stati testati su OpenMandriva. Usali a tuo rischio e pericolo.</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>A&amp;ggiorna il canale</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>Aggio&amp;rna il canale:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Abilita i repository &amp;testing (aggiornamenti precoci finalizzati al processo di QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Sei sicuro di voler provare a retrocedere?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Stai per retrocedere ad un canale più vecchio di quello che stai usando attualmente. Alcuni pacchetti saranno riportati ad una versione precedente, che potrebbe funzionare oppure no. Tornare a versioni più vecchie non è supportato (le vecchie versioni potrebbero non essere compatibili con potenziali cambiamenti nelle nuove, o altro di imprevedibile) e l&apos;operazione potrebbe guastare il tuo sistema. Sei proprio sicuro di volerlo fare?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Sei sicuro di voler avanzare?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Stai per avanzare ad un canale più veloce nell&apos;aggiornamento dei pacchetti. Tieni presente che è un cambiamento definitivo: se volessi retrocedere il tuo sistema tornando ad un canale più lento, ciò non sarà supportato poichè l&apos;operazione potrebbe guastare il tuo sistema.</translation>
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
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation>Il repository Main contiene i pacchetti principali che compongono OpenMandriva Lx. Dovrebbe essere sempre abilitato.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Unsupported</source>
        <translation>Unsupported</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Unsupported contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Unsupported if you need them and don&apos;t mind an occasional crash.</source>
        <translation>Unsupported contiene pacchetti che sono liberi, ma non ufficialmente supportati da OpenMandriva. Mentre cercheremo di sistemarli se qualcosa si guasta, questa è una bassa priorità. Abilita Unsupported se ne hai bisogno e non ti preoccupa un crash occasionale.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restricted</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>Restricted contiene pacchetti che sono liberi, ma gravati da brevetti che possono renderli illegali da usare o distribuire in alcuni paesi. Sei responsabile del rispetto delle tue leggi locali.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>Non-Free</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>Non-free contiene pacchetti che non sono liberi (nel senso di Open Source). Anche se vogliamo, non possiamo risolvere i problemi in essi. Non possiamo leggere il codice, o verificare cosa fanno effettivamente i pacchetti. Anche se non ci sono effetti collaterali noti, potrebbero contenere spyware o malware. Usali a tuo rischio e pericolo.</translation>
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
        <translation>Il navigatore web Brave</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Il navigatore web Google Chrome. Noi raccomandiamo di preferire un browser libero come ad esempio Falkon, Chromium, Firefox o Otter</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Il navigatore web Microsoft Edge. Noi raccomandiamo di preferire un browser libero come ad esempio Falkon, Chromium, Firefox o Otter</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Opera Browser</source>
        <translation>Opera Browser</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Opera browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Il navigatore web Opera. Noi raccomandiamo di preferire un browser libero come ad esempio Falkon, Chromium, Firefox o Otter</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Yandex Browser</source>
        <translation>Yandex Browser</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>The Yandex browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Il navigatore web Yandex. Noi raccomandiamo di preferire un browser libero come ad esempio Falkon, Chromium, Firefox o Otter</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Vivaldi Browser</source>
        <translation>Vivaldi Browser</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Vivaldi browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Il navigatore web Vivaldi. Noi raccomandiamo di preferire un browser libero come ad esempio Falkon, Chromium, Firefox o Otter</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Messaggistica istantanea Skype online. Noi raccomandiamo un programma di messaggistica libero, come Telegram piuttosto.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Skype Unstable</source>
        <translation>Skype Unstable</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>L&apos;applicazione di messaggistica istantanea Skype versione beta. Noi raccomandiamo un programma di messaggistica libero, come Telegram piuttosto.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>La piattaforma di comunicazione aziendale Microsoft Teams. Noi raccomandiamo una piattaforma libera, come Mattermost piuttosto.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>L&apos;IDE Visual Studio Code. Noi raccomandiamo di usare Qt Creator, KDevelop o altri IDE alternativi piuttosto.</translation>
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
        <translation>Rimanere sempre su questa versione</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Rimanere sempre sulla versione stabile corrente</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Rolling</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Rolling release - versione corrente e funzionante</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Ramo di sviluppo - il più attuale, può guastarsi in qualsiasi momento</translation>
    </message>
</context>
</TS>