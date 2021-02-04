var UTILS = {
    SPEAR: 'spear',
    SWORD: "sword",
    AXE: "axe",
    SPY: "spy",
    LIGHT: "light",
    HEAVY: "heavy",
    RAM: "ram",
    CATAPULT: "catapult",
    SNOB: "snob"
};

var config = {
    "units":[
        { "name": "spear",   "speed": 9,  "unit_wood": 50, "unit_stone": 30, "unit_iron": 10, "unit_pop": 1 ,"att": 0, "def": 0, "def_cav": 0 },
        { "name": "sword",   "speed": 11, "unit_wood": 30, "unit_stone": 30, "unit_iron": 70, "unit_pop": 1 ,"att": 0, "def": 0, "def_cav": 0 },
        { "name": "axe",     "speed": 9,  "unit_wood": 60, "unit_stone": 30, "unit_iron": 40, "unit_pop": 1 ,"att": 0, "def": 0, "def_cav": 0 },

        { "name": "spy",     "speed": 4,  "unit_wood": 50, "unit_stone": 50, "unit_iron": 20, "unit_pop": 2 ,"att": 0, "def": 0, "def_cav": 0 },
        { "name": "light",   "speed": 5,  "unit_wood":125, "unit_stone":100, "unit_iron":250, "unit_pop": 4 ,"att": 0, "def": 0, "def_cav": 0 },
        { "name": "heavy",   "speed": 6,  "unit_wood":200, "unit_stone":150, "unit_iron":600, "unit_pop": 6 ,"att": 0, "def": 0, "def_cav": 0 },

        { "name": "ram",     "speed": 15, "unit_wood":300, "unit_stone":200, "unit_iron":200, "unit_pop": 5 ,"att": 0, "def": 0, "def_cav": 0 },
        { "name": "catapult","speed": 15, "unit_wood":320, "unit_stone":400, "unit_iron":100, "unit_pop": 8 ,"att": 0, "def": 0, "def_cav": 0 },

        { "name": "snob",    "speed": 17, "unit_wood": 0, "unit_stone": 0, "unit_iron": 0, "unit_pop": 100 ,"att": 0, "def": 0, "def_cav": 0 },
    ],
    "supportNewVilagge": 25,
    "supportVillageToHours": 2,
    "get":(name)=>{
        return config.units.filter((utils)=>{return (utils.name == name) })[0];

    }

};