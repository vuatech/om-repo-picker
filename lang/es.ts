<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="es">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="19"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>Selector de Repositorios de Software de OpenMandriva</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="29"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>A continuación, podrás elegir de cuales repositorios quieres instalar y actualizar paquetes (aplicaciones extra, juegos, etc.).  </translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="47"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="49"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>Update channel changed</source>
        <translation>Canal de actualización cambiado</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>El canal de actualización ha cambiado. Probablemente quieras actualizar todos los paquetes en el gestor de paquetes gráfico o ejecutando dnf --refresh distro-sync en una línea de comandos.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation>Repositorios de OpenMandriva</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation>Repositorios de terceros</translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation>Repositorios de terceros contienen software (usualmente no-libres) donde ningún software o sus paquetes son mantenidos por el equipo de OpenMandriva. Estos paquetes no están bajo nuestro control y recibirás actualizaciones antes de que hayan sido probados en OpenMandriva. Úsalo bajo tu propio riesgo. </translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>Canal de actualizaciones</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>Canal de actualizaciones:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>Habilitar los repositorios de prueba (actualizaciones anticipadas a QA)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>¿Realmente intenta bajar de version?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Estás intentando cambiar a un canal de actualización anterior al que usas actualmente. Esto provocará la degradación de paquetes, lo cual podría no funcionar. Volver a versiones anteriores no es soportado (las versiones anteriores de las aplicaciones no pueden detectar posibles cambios en las versiones más recientes) y podría dañar tu sistema. ¿Estás seguro de que quieres hacerlo?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>¿Realmente quieres actualizar?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Estás a punto de cambiar a un canal de actualización más rápido. Ten en cuenta que este cambio es permanente; no se permite degradar el sistema volviendo a un canal de actualización más lento y podría dañarlo. ¿Estás seguro de que quieres hacerlo?</translation>
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
        <translation>El repositorio principal contiene los paquetes principales que componen OpenMandriva Lx. Debe estar siempre habilitado.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Extra</source>
        <translation>Extra</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Extra contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Extra if you need them and don&apos;t mind an occasional crash.</source>
        <translation>Extra contiene paquetes gratuitos, pero no soportados oficialmente por OpenMandriva. Si bien intentaremos solucionarlos si algo falla, esto no es una prioridad. Habilite Extra si lo necesita y no le importa un fallo ocasional.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation>Restricted</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation>Restringido contiene paquetes gratuitos, pero sujetos a patentes que podrían ilegalizar su uso o distribución en algunos países. Usted es responsable de cumplir con las leyes locales.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation>Non-Free</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation>Los paquetes &quot;no-libres&quot; contienen paquetes que no son libres (como en código abierto). Aunque quisiéramos, no podemos solucionar sus problemas. No podemos leer el código ni verificar su función real. Aunque no se conocen efectos secundarios, pueden contener spyware o malware. Pueden borrar tus datos. Estás solo.</translation>
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
        <translation>El navegador web Brave</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation>Navegador Google Chrome</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>El navegador web Google Chrome. Recomendamos fuertemente usar un navegador libre como Falkon, Chromium, Firefox ó Otter en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation>Navegador Microsoft Edge</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>El navegador web Microsoft Edge. Recomendamos fuertemente usar un navegador libre como Falkon, Chromium, Firefox ó Otter en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Opera Browser</source>
        <translation>Navegador Opera</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Opera browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>Navegador Opera. Recomendamos fuertemente usar un navegador libre como Falkon, Chromium, Firefox ó Otter en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Yandex Browser</source>
        <translation>Navegador Yandex</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>The Yandex browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>El navegador Yandex. Recomendamos fuertemente usar un navegador libre como Falkon, Chromium, Firefox ó Otter en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Vivaldi Browser</source>
        <translation>Navegador Vivaldi</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Vivaldi browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation>El navegador Vivaldi. Recomendamos fuertemente usar un navegador libre como Falkon, Chromium, Firefox ó Otter en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>Skype</source>
        <translation>Skype</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>El mensajero instantáneo de Skype. Recomendamos encarecidamente usar un servicio de mensajería gratuito, como Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Skype Unstable</source>
        <translation>Skype esta obsoleto</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation>Versiones beta de la mensajería instantánea de Skype. Recomendamos encarecidamente usar una aplicación de mensajería gratuita, como Telegram.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Microsoft Teams</source>
        <translation>Microsoft Teams</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation>La plataforma de comunicación empresarial Microsoft Teams. Recomendamos encarecidamente usar una plataforma gratuita, como Mattermost.</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>Visual Studio Code</source>
        <translation>Visual Studio Code</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation>El IDE de Visual Studio Code. Recomendamos encarecidamente usar Qt Creator, KDevelop u otros IDE alternativos.</translation>
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
        <translation>Siempre mantenerse en está versión</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation>Rock</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation>Siempre mantenerse en versiones estables</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation>Rolling</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation>Rolling release o Versión continua: versiones actuales y funcionales</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation>Cooker</translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation>Rama de desarrollo: la más actual, puede romperse en cualquier momento.</translation>
    </message>
</context>
</TS>