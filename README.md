# daemon-dotfiles

Cyberpunk style KDE rice

![daemon1](https://github.com/MathisP75/daemon-dotfiles/blob/main/screenshots/daemon1.png)
![daemon2](https://github.com/MathisP75/daemon-dotfiles/blob/main/screenshots/daemon2.png)
![daemon3](https://github.com/MathisP75/daemon-dotfiles/blob/main/screenshots/daemon3.png)

All the theme files for this theme are based on existing ones, but have been heavily modified. Credit will still be given to the original themes.

I think everything needed should be in there, let me know if there are missing elements.

Please also note that the configuration seen in the screenshots has been perfectly adapted to my screen resolution and DPI (1920 x 1080 at 100% scale), so you might need to modify the size and placement of widgets and panels, as well as some wallpaper elements and the FlexGrid (extention for window snapping) script. I included the .xcf of the wallpaper as well as a version for 3840 x 2160 at 125% scale.



Here is how to setup everything up:

Install the Kwin script "Flex Grid" (optional, but recommended)

Clone this repo

    git clone https://github.com/MathisP75/daemon-dotfiles.git

cd into it

    cd daemon-dotfiles/

Copy the files in their respective directories

    mkdir -p ~/.local/share/plasma/desktoptheme && cp -r plasma-styles/. ~/.local/share/plasma/desktoptheme/
    cp -r colors/. ~/.local/share/color-schemes/
    mkdir -p ~/.local/share/aurorae/themes && cp -r window-borders/. ~/.local/share/aurorae/themes/
    cp -r icons/Daemon ~/.local/share/icons/
    cp -r kvantum-themes/. ~/.config/Kvantum/
    mkdir -p ~/.local/share/plasma/look-and-feel && cp -r global-theme/. ~/.local/share/plasma/look-and-feel/
    cp -r kwin-scripts/flex-grid/. ~/.local/share/kwin/scripts/flexGrid/contents/code/
    cp -r splash-screen/. ~/.local/share/plasma/look-and-feel/



Now, you can apply everything in the following applications:

System Settings (apply the same in QT5 settings):

- Global theme: Daemon 1

and/or:

- Application style: Kvantum-dark (Important, some UI elements will not look right if kvantum dark is not selected in both qt5 settings and system settings)

- Plasma style: Daemon (modified from Nova Color)

- Colors: Daemon

- Splash Screen: Daemon (modified from Blue Debian)

- Window decorations: Daemon (modified from Fireflies Dark Round) with button size set at "Huge"

- Font: Prototype (install it first through the Font Management section)

- Icons: Daemon (modified from Simply Cyan Circles)

- Cursor: Bibata-Original-Classic

- Kwin scripts: Flex grid (I provided a version with modified settings to accomodate my setup)

- Desktop effects/Window open/close animation: TV Effect [Burn-My-Windows]


Kvantum Settings:

- Kvantum theme: Daemon (modified from KvCurves)


Others:

- If you want the same logo as me for the application launcher, I included it in the icons directory

- Discord theme for BetterDiscord:

        cp -r discord/. ~/.config/BetterDiscord/themes/

- Firefox theme: https://color.firefox.com/?theme=XQAAAAI2AQAAAAAAAABBKYhm849SCia3ftKEGccwS-xMDPrxiv6HGJPbXvFJjzza9aH0u2bKZrTXsKIKzakRjROnrUY-NkJX-YB7CghWuI1DF6B_g23WF3XEe9AfXuAcOldc2vl4ldKwbqDjvu_aovYKd3iF0CX03uPPM8nwNFM4575bBSZtcmybYKWrBrM2fuDQtO8tryjxuJdJGEElnbLz_KxsO3rQTKv13RIJkpjmeNMayn5ie30BLo4f_6LQ4AA

- Kate color scheme: You can import it in the application

- Konsole color scheme:

        sudo cp /konsole-colors/  /usr/share/konsole/.

- LibreOffice icons:

        sudo cp /libreoffice-icons/.  /usr/lib/libreoffice/share/config/.



Widgets  and panels:

The left panel contains: Application Launcher, Icons Only Task Manager and Pager

The top panel contains: Global Menu, Networks, Display and Brightness, Bluetooth, Volume and Clock

The widget in the bottom right corner is System Monitor Sensor


If you want to change the colors:

You will have to modify files and settings in multiple places. This includes the window decorations, the kvantum theme, the plasma style, the icons, the wallpaper and the color scheme.

The colors should the the exact same through all the files (the red, the blue and the two background grays), so you should be able to search and replace them in files and SVGs.

I left batch color changing scripts in the Daemon icon theme, so you can easily change the colors to your liking.



Additional notes:

Make sure KDE applications are not flatpaks, as this will make them use the Breeze theme engine instead of the Kvantum theme engine.

There is no GTK theme to go with it, for now.

There are still some small issue and inconsistencies with some theme elements (buttons and other widgets), but I plan on fixing them.

This theme has been heavily inspired by the CyberRe GRUB theme : https://www.gnome-look.org/p/1420727

