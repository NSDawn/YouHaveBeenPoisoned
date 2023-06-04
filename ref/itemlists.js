const ITEMS = {
    "" : new Item("", "", ""),
    "water": new Item("water", "Water", null),
    
    // bezoar 
    "bezoar": new Item("bezoar", "Bezoar", "item_bezoar"),

    // eyes
    "eyeofadder": new Item("eyeofadder", "Eye of Adder", "item_eyeofadder"),
    "eyeofrabbit" : new Item("eyeofrabbit", "Eye of Rabbit", "item_eyeofrabbit"),
    "eyeofrat" : new Item("eyeofrat", "Eye of Rat", "item_eyeofrat"),
    "eyeofsheep" : new Item("eyeofsheep", "Eye of Sheep", "item_eyeofsheep"),

    // eggs 
    "eggofadder" : new Item("eggofadder", "Egg of Adder", "item_eggofadder"),
    "eggofchicken" : new Item("eggofchicken", "Egg of Chicken", "item_eggofchicken"),
    "eggofsparrow" : new Item("eggofsparrow", "Egg of Sparrow", "item_eggofsparrow"),
    
    // bugs
    "cicada" : new Item("cicada", "Cicada", "item_cicada"),
    "spider" : new Item("spider", "Spider", "item_spider"),
    "scorpion" : new Item("scorpion", "Scorpion", "item_scorpion"),
    "butterfly" : new Item("butterfly", "Butterfly", "item_butterfly"),
    "moth" : new Item("moth", "Moth", "item_moth"),

    // skulls 
    "skullofadder": new Item("skullofadder", "Skull of Adder", "item_skullofadder"),
    "skullofanglerfish" : new Item("skullofanglerfish", "Skull of Anglerfish", "item_skullofanglerfish"),
    "skullofrat" : new Item("skullofrat", "Skull of Rat", "item_skullofrat"),
    "skullofsheep" : new Item("skullofsheep", "Skull of Sheep", "item_skullofsheep"),

    // feathers
    "featherofchicken" : new Item("featherofchicken", "Feather of Chicken", "item_featherofchicken"),
    "featherofsparrow" : new Item("featherofsparrow", "Feather of Sparrow", "item_featherofsparrow"),

    // misc
    "tailofrat" : new Item("tailofrat", "Tail of Rat", "item_tailofrat"),
    "footofrabbit" : new Item("footofrabbit", "Foot of Rabbit", "item_footofrabbit"),
    "shedskinofadder" : new Item("shedskinofadder", "Shed Skin of Adder", "item_shedskinofadder"),

    // sweet
    "catnip" : new Item("catnip", "Catnip", "item_catnip"),
    "lemonbalm" : new Item("lemonbalm", "Lemon Balm", "item_lemonbalm"),
    "peppermint" : new Item("peppermint", "Peppermint", "item_peppermint"),

    // floral
    "sage" : new Item("sage", "Sage", "item_sage"),
    "lavender" : new Item("lavender", "Lavender", "item_lavender"),

    // bitter mints
    "coriander" : new Item("coriander", "Coriander", "item_coriander"),
    "rosemary" : new Item("rosemary", "Rosemary", "item_rosemary"),
    "thyme" : new Item("thyme", "Thyme", "item_thyme"),
    "wormwood" : new Item("wormwood", "Wormwood", "item_wormwood"),

    //spices
    "poppyseeds": new Item("poppyseeds", "Poppy Seeds", "item_poppyseeds"),
    "mustardseeds" : new Item("mustardseeds", "Mustard Seeds", "item_mustardseeds"),
    "peppercorns" : new Item("peppercorns", "Peppercorns", "item_peppercorns"),
    "chiliflakes" : new Item("chiliflakes", "Chili Flakes", "item_chiliflakes"),
    "cinnamon" : new Item("cinnamon", "Cinnamon", "item_cinnamon"),

    // allium
    "chive" : new Item("chive", "Chive", "item_chive"),
    "fieldgarlic" : new Item("fieldgarlic", "Field Garlic", "item_fieldgarlic"),
    "fieldleek" : new Item("fieldleek", "Field Leek", "item_fieldleek"),
    "ramp" : new Item("ramp", "Ramp", "item_ramp"),
    
    // metals A 
    "iron": new Item("iron", "Iron", "item_iron"),
    "copper": new Item("copper", "Copper", "item_copper"),
    "tin" : new Item("tin", "Tin", "item_tin"),

    // metals B
    "silver": new Item("silver", "Silver", "item_silver"),
    "gold": new Item("gold", "Gold", "item_gold"),
    "lead": new Item("lead", "Lead", "item_lead"), 

    // minerals
    "sulfur": new Item("sulfur", "Sulfur", "item_sulfur"),
    "vitriol": new Item("vitriol", "Vitriol", "item_vitriol"),
    "sodaash" : new Item("sodaash", "Soda Ash", "item_sodaash"),
    "saltpeter" : new Item("saltpeter", "Saltpeter", "item_saltpeter"),
    "salt" : new Item("salt", "Salt", "item_salt"),

    // MORTAR
    // herbs 
    "pulverizedcatnip" : new Item("pulverizedcatnip", "Pulverized Catnip", "item_pulverizedleaf"),
    "pulverizedlemonbalm" : new Item("pulverizedlemonbalm", "Pulverized Lemon Balm", "item_pulverizedleaf"),
    "pulverizedpeppermint" : new Item("pulverizedpeppermint", "Pulverized Peppermint", "item_pulverizedleaf"),
    "pulverizedsage" : new Item("pulverizedsage", "Pulverized Sage", "item_pulverizedleaf"),
    "pulverizedlavender" : new Item("pulverizedlavender", "Pulverized Lavender", "item_pulverizedleaf"),
    "pulverizedcoriander" : new Item("pulverizedcoriander", "Pulverized Coriander", "item_pulverizedleaf"),
    "pulverizedrosemary" : new Item("pulverizedrosemary", "Pulverized Rosemary", "item_pulverizedleaf"),
    "pulverizedthyme" : new Item("pulverizedthyme", "Pulverized Thyme", "item_pulverizedleaf"),
    "pulverizedwormwood" : new Item("pulverizedwormwood", "Pulverized Wormwood", "item_pulverizedleaf"),
    // bugs 
    "pulverizedcicada" : new Item("pulverizedcicada", "Pulverized Cicada", "item_pulverizedbug"),
    "pulverizedspider" : new Item("pulverizedspider", "Pulverized Spider", "item_pulverizedbug"),
    "pulverizedscorpion" : new Item("pulverizedscorpion", "Pulverized Scorpion", "item_pulverizedbug"),
    "pulverizedbutterfly" : new Item("pulverizedbutterfly", "Pulverized Butterfly", "item_pulverizedbug"),
    "pulverizedmoth" : new Item("pulverizedmoth", "Pulverized Moth", "item_pulverizedbug"),

    // vials
    "vial": new Item("vial", "Vial", "item_vial"),
    "vialwater": new Item ("vialwater", "Vial of Water", "item_vialwater"),
        // vials of metals
    "vialiron": new Item("vialiron", "Vial of Iron", "item_vialmetal"),
    "vialcopper": new Item("vialcopper", "Vial of Copper", "item_vialmetalb"),
    "vialtin" : new Item("vialtin", "Vial of Tin", "item_vialmetal"),
    "vialsilver": new Item("vialsilver", "Vial of Silver", "item_vialmetal"),
    "vialgold": new Item("vialgold", "Vial of Gold", "item_vialmetalb"),
    "viallead": new Item("viallead", "Vial of Lead", "item_vialmetal"), 
    "vialiron": new Item("vialiron", "Vial of Iron", "item_vialmetal"),
            // w/water
    "vialwatercopper": new Item("vialwatercopper", "Vial of Water and Copper", "item_vialwatermetalb"),
    "vialwatertin" : new Item("vialwatertin", "Vial of Water and Tin", "item_vialwatermetal"),
    "vialwatersilver": new Item("vialwatersilver", "Vial of Water and Silver", "item_vialwatermetal"),
    "vialwatergold": new Item("vialwatergold", "Vial of Water and Gold", "item_vialwatermetalb"),
    "vialwaterlead": new Item("vialwaterlead", "Vial of Water and Lead", "item_vialwatermetal"),
    "vialwateriron": new Item("vialwateriron", "Vial of Water and Iron", "item_vialwatermetal"), 
        // vials of minerals
    "vialsulfur": new Item("vialsulfur", "Vial of Sulfur", "item_vialsulfur"),
    "vialsalt": new Item("vialsalt", "Vial of Salt", "item_vialmineral"),
    "vialsaltpeter": new Item("vialsaltpeter", "Vial of Saltpeter", "item_vialmineral"),
    "vialvitriol": new Item("vialvitriol", "Vial of Vitriol", "item_vialmineral"),
    "vialsodaash": new Item("vialsodaash", "Vial of Soda", "item_vialmineral"),
        // w/water
    "vialwatersulfur": new Item("vialwatersulfur", "Vial of Water and Sulfur", "item_watersulfur"),
    "vialwatersalt": new Item("vialwatersalt", "Vial of Aqueous Salt", "item_vialwater"),
    "vialwatersaltpeter": new Item("vialwatersaltpeter", "Vial of Aqueous Saltpeter", "item_vialwater"),
    "vialwatervitriol": new Item("vialwatervitriol", "Vial of Aqueous Vitriol", "item_vialwater"),
    "vialwatersodaash": new Item("vialwatersodaash", "Vial of Aqueous Soda", "item_vialwater"),
   
    "vialhydrochloric": new Item("vialhydrochloric", "Vial of Hydrochloric", "item_vialwater"),
    "vialnitric": new Item("vialnitric", "Vial of Nitric", "item_vialwater"),
    "vialaquaregia": new Item("vialaquaregia", "Vial of Aqua Regia", "item_vialwater"),
    "vialcaustic": new Item("vialcaustic", "Vial of Caustic", "item_vialwater"),
    
    "vialcupric": new Item("vialcupric", "Vial of Cupric", "item_vialcupric"),
    "vialcuprous": new Item("vialcuprous", "Vial of Cuprous", "item_vialcuprous"),
    "vialferric": new Item("vialferric", "Vial of Ferric", "item_vialferric"),
    "vialferrous": new Item("vialferrous", "Vial of Ferrous", "item_vialferrous"),
    "vialstannic": new Item("vialstannic", "Vial of Stannic", "item_vialstannic"),
    "vialstannous": new Item("vialstannous", "Vial of Stannous", "item_vialstannous"),
    "vialplumbic": new Item("vialplumbic", "Vial of Plumbic", "item_vialplumbic"),
    "vialplumbous": new Item("vialplumbic", "Vial of Plumbic", "item_vialplumbous"),
    "vialargentous": new Item("vialargentous", "Vial of Argentous", "item_vialargentous"),
    "vialaurous": new Item("vialaurous", "Vial of Aurous", "item_vialaurous"),

    "vialtonic": new Item("vialtonic", "Tonic", "item_vialtonic"),
    "vialelixir": new Item("vialelixir", "Elixir", "item_vialelixir"),
    "vialdraught": new Item("vialdraught", "Draught", "item_vialdraught"),


    "vialbad": new Item("vialbad", "Dubious Solution", "item_vialbad"),
    "bad": new Item("bad", "Dubious Mixture", "item_bad"),


    // tarot cards
    /* METADATA 3 digit code
    🐟: 0, 🐍: 1, 🐂: 2, 🐓: 3, 🌻: 4
    ☀: 0, 🌙: 1, 🌍: 2, ★: 3, ☁: 4
    💕: 0, ⛰: 1, 🔮: 2, ☆: 3, 💀: 4

    */
    "tarot": new Item("tarot", "Tarot Card", "item_tarotback"),
    "tarot0": new Item("tarot0", "The Fool", "item_tarot0", "011"),
    "tarot1": new Item("tarot1", "The Magician", "item_tarot1", "132"),
    "tarot2": new Item("tarot2", "The High Priestess", "item_tarot2", "430"),
    "tarot3": new Item("tarot3", "The Empress", "item_tarot3", "400"),
    "tarot4": new Item("tarot4", "The Emperor", "item_tarot4", "431"),
    "tarot5": new Item("tarot5", "The Hierophant", "item_tarot5", "433"),
    "tarot6": new Item("tarot6", "The Lovers", "item_tarot6", "120"),
    "tarot7": new Item("tarot7", "The Chariot", "item_tarot7", "221"),
    "tarot8": new Item("tarot8", "Strength", "item_tarot8", "233"),
    "tarot9": new Item("tarot9", "The Hermit", "item_tarot9", "144"),
    "tarot10": new Item("tarot10", "Wheel of Fortune", "item_tarot10", "322"),
    "tarot11": new Item("tarot11", "Justice", "item_tarot11", "224"),
    "tarot12": new Item("tarot12", "The Hanged Man", "item_tarot12", "214"),
    "tarot13": new Item("tarot13", "Death", "item_tarot13", "114"),
    "tarot14": new Item("tarot14", "Temperance", "item_tarot14", "303"),
    "tarot15": new Item("tarot15", "The Devil", "item_tarot15", "111"),
    "tarot16": new Item("tarot16", "The Tower", "item_tarot16", "024"),
    "tarot17": new Item("tarot17", "The Star", "item_tarot17", "333"),
    "tarot18": new Item("tarot18", "The Moon", "item_tarot18", "012"),
    "tarot19": new Item("tarot19", "The Sun", "item_tarot19", "402"),
    "tarot20": new Item("tarot20", "Judgment", "item_tarot20", "222"),
    "tarot21": new Item("tarot21", "The World", "item_tarot21", "420"),

    "thermometer": new Item("thermometer", "Thermometer", "item_thermometer",),
    "_thermometer": new Item("_thermometer", "_Thermometer", "item_thermometer"),
    "thermometer0": new Item("thermometer0", "Thermometer with Low Temperature", "item_thermometer0"),
    "thermometer1": new Item("thermometer1", "Thermometer with Normal Temperature", "item_thermometer1"),
    "thermometer2": new Item("thermometer2", "Thermometer with High Temperature", "item_thermometer2"),

};

const RECIPES = {
    "VIAL" : {
        "vialwater/copper": "vialwatercopper",
        "vialwater/tin": "vialwatertin",
        "vialwater/silver": "vialwatersilver",
        "vialwater/gold": "vialwatergold",
        "vialwater/lead": "vialwaterlead",
        "vialwater/iron": "vialwateriron",
        
        "vialwater/sulfur": "vialwatersulfur",
        "vialwater/salt": "vialwatersalt",
        "vialwater/vitriol": "vialwatervitriol",
        "vialwater/saltpeter": "vialwatersaltpeter",
        "vialwater/sodaash": "vialwatersodaash",

        "vialwatervitriol/salt": "vialhydrochloric",
        "vialwatersalt/vitriol": "vialhydrochloric",
        "vialwatervitriol/saltpeter": "vialnitric",
        "vialwatersaltpeter/vitriol": "vialnitric",
        "vialnitric/salt": "vialaquaregia",
        "vialhydrochloric/saltpeter": "vialaquaregia",
        "vialwatersodaash/salt": "vialcaustic",
        "vialwatersalt/sodaash": "vialcaustic",
        
        "vialwatercopper/vitriol": "vialcupric",
        "vialwatervitriol/copper": "vialcupric",
        "vialhydrochloric/copper": "vialcuprous",
        "vialnitric/iron": "vialferric",
        "vialwatervitriol/iron": "vialferrous",
        "vialwateriron/vitriol": "vialferrous",
        "vialhydrochloric/tin": "vialstannic",
        "vialwatervitriol/tin": "vialstannous",
        "vialwatertin/vitriol": "vialstannous",
        "vialwaterlead/sodaash": "vialplumbic",
        "vialwatersodaash/lead": "vialplumbic",
        "vialnitric/lead": "vialplumbous",
        "vialnitric/silver": "vialargentous",
        "vialaquaregia/gold": "vialaurous",

        

    },
    "MORTAR" : {
        
        "catnip/": "pulverizedcatnip",
        "lemonbalm/": "pulverizedlemonbalm",
        "peppermint/": "pulverizedpeppermint",
        "coriander/": "pulverizedcoriander",
        "rosemary/": "pulverizedrosemary",
        "thyme/": "pulverizedthyme",
        "wormwood/": "pulverizedwormwood",
        "sage/": "pulverizedsage",
        "lavender/": "pulverizedlavender",
        "cicada/": "pulverizedcicada",
        "spider/": "pulverizedspider",
        "scorpion/": "pulverizedscorpion",
        "butterfly/": "pulverizedbutterfly",
        "moth/": "pulverizedmoth",

    },
    "MOUTH" : {
        "thermometer/": "_thermometer",
    }
};

var CABINET_STONES = ""; // a , e , s, r, x

const CABINET_ITEMS = {
    "botanical": {
        "sweet": [
            "catnip",
            "lemonbalm",
            "peppermint",
        ],
        "bitter": [
            "coriander",
            "rosemary",
            "thyme",
            "wormwood",
        ],
        "floral": [
            "sage",
            "lavender",
        ],
        "allium": [
            "chive",
            "fieldgarlic",
            "fieldleek",
            "ramp",
        ],
        "spices": [
            "poppyseeds",
            "mustardseeds",
            "peppercorns",
            "chiliflakes",
            "cinnamon",
        ],
    },
    "zoological": {
        "bezoar": [
            "bezoar"
        ], 
        "eyes": [
            "eyeofadder",
            "eyeofrabbit",
            "eyeofrat",
            "eyeofsheep",
        ],
        "eggs":[
            "eggofadder",
            "eggofchicken",
            "eggofsparrow",
        ],
        "bugs" : [
            "cicada",
            "spider",
            "scorpion",
            "butterfly",
            "moth",
        ],
        "skulls": [
            "skullofadder",
            "skullofanglerfish",
            "skullofrat",
            "skullofsheep",
        ],
        "feathers": [
            "featherofchicken",
            "featherofsparrow",
        ],
        "misc": [
            "tailofrat",
            "footofrabbit",
            "shedskinofadder",
        ],
    },
    "alchemical" : {
        "commonmetals" :[
            "iron",
            "copper",
            "tin",
        ],
        "heavymetals" : [
            "silver",
            "gold",
            "lead",
        ],
        "minerals" : [
            "sulfur",
            "vitriol",
            "sodaash",
            "saltpeter",
            "salt",
        ],
    },
    "*" : {
        "sweet": [
            "catnip",
            "lemonbalm",
            "peppermint",
        ],
        "bitter": [
            "coriander",
            "rosemary",
            "thyme",
            "wormwood",
        ],
        "floral": [
            "sage",
            "lavender",
        ],
        "allium": [
            "chive",
            "fieldgarlic",
            "fieldleek",
            "ramp",
        ],
        "spices": [
            "poppyseeds",
            "mustardseeds",
            "peppercorns",
            "chiliflakes",
            "cinnamon",
        ],
        "bezoar": [
            "bezoar",
        ], 
        "eyes": [
            "eyeofadder",
            "eyeofrabbit",
            "eyeofrat",
            "eyeofsheep",
        ],
        "eggs":[
            "eggofadder",
            "eggofchicken",
            "eggofsparrow",
        ],
        "bugs" : [
            "cicada",
            "spider",
            "scorpion",
            "butterfly",
            "moth",
        ],
        "skulls": [
            "skullofadder",
            "skullofanglerfish",
            "skullofrat",
            "skullofsheep",
        ],
        "feathers": [
            "featherofchicken",
            "featherofsparrow",
        ],
        "misc": [
            "tailofrat",
            "footofrabbit",
            "shedskinofadder",
        ],
        "commonmetals" :[
            "iron",
            "copper",
            "tin",
        ],
        "heavymetals" : [
            "silver",
            "gold",
            "lead",
        ],
        "minerals" : [
            "sulfur",
            "vitriol",
            "sodaash",
            "saltpeter",
            "salt",
        ],
    }
}

const CABINET_DRAWERS_REF = {
    "botanical" : {
        0 : { // default
            "f" : "sweet", "hc":  "bitter", "hl": "floral", "kc": "allium", "oc": "spices",
        },
        1 : { // red
            "f" : "sweet", "hc":  "bitter", "hl": "floral", "kc": "spices", "oc": "allium",
        },
        2 : { // blue
            "f" : "bitter", "hc":  "sweet", "hl": "allium", "kc": "spices", "oc": "floral",
        },
        3 : { // yellow
            "f" : "floral", "hc":  "sweet", "hl": "allium", "kc": "bitter", "oc": "spices",
        },
    },
    "zoological" : {
        0 : { 
            "" : "bezoar", "ci":  "eyes", "cs": "eggs", "hg": "bugs", "ii": "skulls", "kl": "feathers", "s": "misc",
        },
        1 : { 
            "" : "bezoar", "ci":  "eyes", "cs": "feathers", "hg": "misc", "ii": "eggs", "kl": "bugs", "s": "skulls",
        },
        2 : { 
            "" : "misc", "ci":  "bezoar", "cs": "feathers", "hg": "eyes", "ii": "bugs", "kl": "eggs", "s": "skulls",
        },
    },
    "alchemical" : {
        0 : {
            "w" : "commonmetals", "h": "heavymetals", "ot" : "minerals",
            
        },
    },
}

const _REF_ITEM_LISTS = {
    "herbs": [
        "catnip",
        "lemonbalm",
        "peppermint",
        "coriander",
        "rosemary",
        "thyme",
        "wormwood",
        "sage",
        "lavender",
        "chive",
        "fieldgarlic",
        "fieldleek",
        "ramp",
    ], 
    "bugs" : [
        "cicada",
        "spider",
        "scorpion",
        "butterfly",
        "moth",
    ],

}


const VIAL_SLOT_WHITELIST = [];
const VIAL_ENTRY_SLOT_WHITELIST = ["copper", "iron",  "tin", "silver", "gold", "lead","sulfur","vitriol","sodaash","saltpeter","salt",]
const ENTRY_SLOT_BLACKLIST = ["vial", "thermometer"];
const TRASH_SLOT_BLACKLIST = ["vial", "thermometer"];

const STATUE_SYMBOLS = [
    ["א", "MPLUS_bold", ""], //0
    ["ʓ", "NotoSans", "bezoar"], //1
    ["ω", "NotoSans", ""], //2
    // -----
    ["ぬ", "MPLUS_bold",    "gold"], //3
    ["ゑ", "MPLUS_bold",    "moth"], //4
    ["三", "MPLUS_bold",    "rosemary"], //5
    ["ऽ", "NotoSans",       "wormwood"], //6
    ["Ґ", "NotoSans",       "eggofsparrow"], //7
    ["ß", "NotoSans",       "lavender"], //8
    ["ன", "NotoSansTamil",  "salt"], //9
    ["ɕ", "NotoSans",       "scorpion"], //10
    ["ʡ", "NotoSans",       "spider"], //11
    ["ɮ", "NotoSans",       "footofrabbit"], //12
    ["λ", "NotoSans",       "coriander"], //13
    ["儿", "MPLUS_bold",    "eggofadder"],  //14
    ["艸", "MPLUS_bold",    "eyeofrat"], //15
    ["न", "NotoSans",       "tailofrat"], //16
    ["疒", "MPLUS_bold",    "sulfur"], //17
    ["ஐ", "NotoSansTamil",  "cicada"], //18
    ["ॠ", "NotoSans",       "shedskinofadder"], //19
    ["இ", "NotoSansTamil",  "eyeofaddere"], //20
];