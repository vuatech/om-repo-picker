<?xml version="1.0" ?><!DOCTYPE TS><TS language="it" version="2.1">
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
        <translation>Qui di seguito, puoi selezionare da quale repository vuoi installare ed aggiornare i pacchetti (altre applicazioni, giochi, ecc.)</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="22"/>
        <source>32-bit repositories contain the same packages built for 32 bit processors. Those repositories are usually useful only for compatibility with prebuilt packages for older systems - such as binary-only games and applications built for 32-bit processors and running 32-bit Windows applications in Wine.</source>
        <translation>I repository 32-bit contengono gli stessi pacchetti, ma compilati per i processori a 32 bit. Questi repository solitamente sono utili soltanto per retro-compatibilità con i pacchetti precompilati per systemi più vecchi, come giochi ed applicazioni distribuiti solo-binari per processori 32-bit e  per avviare applicazioni 32-bit in wine.</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="36"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="38"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancella</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>Update channel changed</source>
        <translation>Cambiato il canale per l&apos;aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="170"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Il canale per l&apos;aggiornamento è cambiato. Adesso è consigliabile ricaricare tutti i pacchetti tramite il gestore di pacchetti grafico o meglio ancora con &quot;dnf --refresh distro-sync&quot; da riga di comando.</translation>
    </message>
</context>
<context>
    <name>RepoWidget</name>
    <message>
        <location filename="../src/RepoWidget.cpp" line="10"/>
        <source>&amp;Enable</source>
        <translation>&amp;Abilita</translation>
    </message>
    <message>
        <location filename="../src/RepoWidget.cpp" line="19"/>
        <source>Ena&amp;ble 32-bit</source>
        <translation>A&amp;bilita 32-bit</translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="7"/>
        <source>U&amp;pdate channel</source>
        <translation>A&amp;ggiorna il canale</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="9"/>
        <source>&amp;Update channel:</source>
        <translation>Aggio&amp;rna il canale:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="19"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Abilita i repository &amp;testing (aggiornamenti precoci finalizzati al processo di QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>Really try to downgrade?</source>
        <translation>Sei sicuro di voler provare a retrocedere?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="30"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Stai per retrocedere ad un canale più vecchio di quello che stai usando attualmente. Alcuni pacchetti saranno riportati ad una versione precedente, che potrebbe funzionare oppure no. Tornare a versioni più vecchie non è supportato (le vecchie versioni potrebbero non essere compatibili con potenziali cambiamenti nelle nuove, o altro di imprevedibile) e l&apos;operazione potrebbe guastare il tuo sistema. Sei proprio sicuro di volerlo fare?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>Really upgrade?</source>
        <translation>Sei sicuro di voler avanzare?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="35"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Stai per avanzare ad un canale più veloce nell&apos;aggiornamento dei pacchetti. Tieni presente che è un cambiamento definitivo: se volessi retrocedere il tuo sistema tornando ad un canale più lento, ciò non sarà supportato poichè l&apos;operazione potrebbe guastare il tuo sistema.</translation>
    </message>
</context>
</TS>