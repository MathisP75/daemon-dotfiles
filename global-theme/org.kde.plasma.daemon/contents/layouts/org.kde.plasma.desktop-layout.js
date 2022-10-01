var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "showTitle": "false"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "91,238,220",
                            "gpu/gpu0/usage": "91,238,220",
                            "memory/physical/used": "91,238,220"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"gpu/gpu0/usage\",\"memory/physical/used\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "System Monitor Sensor"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-26:1264.29,800.347,352,160,0;",
                    "ItemGeometries-3840x2160": "Applet-26:2992,1664,464,416,0;",
                    "ItemGeometriesHorizontal": "Applet-26:1264.29,800.347,352,160,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "480",
                    "DialogWidth": "640"
                },
                "/General": {
                    "ToolBoxButtonState": "top",
                    "ToolBoxButtonX": "814",
                    "ToolBoxButtonY": "36",
                    "locked": "true"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Daemon/CyberWallLaptop3.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "30"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "660",
                            "DialogWidth": "880"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "/home/mathis_kde/Pictures/Daemon Logo.png",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "50"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "660",
                            "DialogWidth": "880"
                        },
                        "/General": {
                            "iconSpacing": "0",
                            "launchers": "applications:systemsettings.desktop,preferred://filemanager,applications:firefox.desktop,applications:org.kde.konsole.desktop",
                            "maxStripes": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1080",
                    "DialogWidth": "155"
                }
            },
            "height": 6.875,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 67.5,
            "minimumLength": 67.5,
            "offset": 0
        },
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "10"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "30"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "10"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "72",
                    "DialogWidth": "1920"
                }
            },
            "height": 2.25,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 110.3125,
            "minimumLength": 110.1875,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
