var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/mathis_kde/Pictures/Wallpapers/CyberWallLaptop3.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "showTitle": "false",
                            "title": "Daemon"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "91,238,220",
                            "gpu/all/usage": "48,251,240",
                            "memory/physical/usedPercent": "91,238,220"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"gpu/all/usage\",\"memory/physical/usedPercent\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "Daemon"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-60:1264,768.001,352,240,0;",
                    "ItemGeometries-3840x2160": "Applet-60:3008,1760,448,256,0;",
                    "ItemGeometriesHorizontal": "Applet-60:1264,768.001,352,240,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1020",
                    "DialogWidth": "1454"
                },
                "/General": {
                    "ToolBoxButtonState": "top",
                    "ToolBoxButtonX": "814",
                    "ToolBoxButtonY": "36",
                    "locked": "true"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/mathis_kde/Pictures/Wallpapers/CyberWallLaptop3.png",
                    "SlidePaths": "/usr/share/wallpapers"
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
                    "DialogHeight": "2160",
                    "DialogWidth": "185"
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
                            "PreloadWeight": "55"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.battery"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65"
                        }
                    },
                    "plugin": "org.kde.plasma.bluetooth"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.volume"
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
                    "DialogHeight": "68",
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
