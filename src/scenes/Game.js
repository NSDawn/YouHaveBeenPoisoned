const INVENTORY_SLOTS = [];
const VIAL_SLOTS = [];
const VIAL_ENTRY_SLOTS = [];
const STORE_RACK_SLOTS = [];
const MOUSE_SLOT = new Slot(ITEMS[""], new v2(0, 0));
const MOUTH_SLOT = new Slot(ITEMS[""], new v2(197, 91)); 
const TRASH_SLOT = new Slot(ITEMS[""], new v2(222, 91));
const MORTAR_SLOT = new Slot(ITEMS[""], new v2(80, 60));

var CABINET_DRAWERS = {
    "f" : "", "hc":  "", "hl": "", "kc": "", "oc": "",
    "" : "", "ci":  "", "cs": "", "hg": "", "ii": "", "kl": "", "s": "",
    "w" : "", "h": "", "ot" : "",
}
var _CABINET_DRAWERS_LIST = []; //ordered form, used for shuffling in init.
var CABINET_DRAWERS_LIST = []; //ordered form, REFERENCE THIS ONE!

const JUG_SLOT = new Slot(ITEMS[""], new v2(14 + 256, 91));

var TAROT_DECK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
var TAROT_DECK_PAGE = 0;
const TAROT_SLOT =  new Slot(ITEMS["tarot"], new v2(218 -256, 64));
const TAROT_DECK_SHUFFLE_BUTTON = new ShuffleButton(new v2(238 -256,64));

const STATUE_ENTRY_SLOT = new Slot(ITEMS[""], new v2(174 -256, 60))
var STATUE_SYMBOL_PAGE = 0;
var STATUE_SYMBOL_SEQ = [];
var STATUE_SYMBOL_SEQ_PAGE = 0;
const STATUE_SYMBOL_SEQ_LEN = 6;

var isTossedVial = false;

var shift = new v2(0, 0);
var cursor_pos = new v2(0, 0);
var currScreen = 0;
const SCREENS = [-2, -1, 0, 1];
var isScreenShifting = 0; // 1  shifting right, -1, shifting left
const screenShiftSpeed = 8; // must be %256 =0 
const SWITCHSCREEN_BUTTON_LEFT = new SwitchScreenButton(-1, new v2(94, 98));
const SWITCHSCREEN_BUTTON_RIGHT = new SwitchScreenButton(1, new v2(146, 98));

var time = 0;
var formatted_time = "00:00";

var SEED = "09593551"; // "01373733";
var PHASE = "0";

var _SYMPTOMS = {
    'fever': false,
    'chills': false,
    'cough': false,
    'dizziness': false,
}
var SYMPTOMS = {
    'fever': false,
    'chills': false,
    'cough': false,
    'dizziness': false,
};
var TEMPERATURE = 1;

const CAULDRON_ENTRY_SLOT = new Slot(ITEMS[""], new v2(32, 30));
const CAULDRON_EXIT_SLOT = new Slot(ITEMS[""], new v2(42, 91))
var CAULDRON = [];
var CAULDRON_COLOR = "";
var POTION_RECIPE = [];
var POTION_TYPE = "tonic" // "tonic", "elixir", "draught"

var FX = {
    'SHAKE' : new v2(0, 0),
}
var fx_shift = new v2(0, 0);

class sceneGame {
    
    init() {
        setTimer(20*60);


        for (let i = 0; i < 8; i++) {
            let k = new Slot(ITEMS[""], new v2(i * 32 + 8, 121));
            k.fixed = true;
            INVENTORY_SLOTS.push(k);
        }
        //INVENTORY_SLOTS[5].item = ITEMS["copper"];
        //INVENTORY_SLOTS[6].item = ITEMS["vialtonic"];
        //INVENTORY_SLOTS[7].item = ITEMS["sage"];

        MOUSE_SLOT.mouse = true;
        MOUSE_SLOT.fixed = true;
        cursor_pos = new v2(mouseX, mouseY);

        // trash slot
        TRASH_SLOT.process = true; 
        TRASH_SLOT.loadspeed = 2;
        TRASH_SLOT.blacklist = TRASH_SLOT_BLACKLIST;
        
        // mouth slot
        MOUTH_SLOT.process = true; 
        MOUTH_SLOT.loadspeed = 16;
        MOUTH_SLOT.whitelist = ["thermometer", "lemon_balm", "sage", "peppermint", "vialtonic", "vialaurous"];

        // vial slots 
        for (let i = 0; i < 3; i++) {
            VIAL_SLOTS.push(new Slot(ITEMS[""], new v2(i * 25 + 174, 59)));
            VIAL_ENTRY_SLOTS.push(new Slot(ITEMS[""], new v2(i * 25 + 174, 38)));
            VIAL_ENTRY_SLOTS[i].entry = true;
            VIAL_ENTRY_SLOTS[i].process = true;
            VIAL_ENTRY_SLOTS[i].loadspeed = 8;
            VIAL_SLOTS[i].whitelist = VIAL_SLOT_WHITELIST;
            VIAL_ENTRY_SLOTS[i].whitelist = VIAL_ENTRY_SLOT_WHITELIST;
            VIAL_ENTRY_SLOTS[i].blacklist = ENTRY_SLOT_BLACKLIST;
        }
        VIAL_SLOTS[0].item = ITEMS["vial"];
        VIAL_SLOTS[1].item = ITEMS["vial"];
        VIAL_SLOTS[2].item = ITEMS["vial"];
        
        // adding all vials to whitelists
        for (let key in ITEMS) {
            if (ITEMS[key].name.includes("vial")) {
                VIAL_SLOT_WHITELIST.push(ITEMS[key].name);
                VIAL_ENTRY_SLOT_WHITELIST.push(ITEMS[key].name);
            }
        }

        // cauldron slots
        CAULDRON_ENTRY_SLOT.entry = true;
        CAULDRON_ENTRY_SLOT.blacklist = ENTRY_SLOT_BLACKLIST;
        CAULDRON_ENTRY_SLOT.process = true;
        CAULDRON_ENTRY_SLOT.loadspeed = 16;
        CAULDRON_EXIT_SLOT.whitelist = ["vial"];
        CAULDRON_EXIT_SLOT.process = true;
        CAULDRON_EXIT_SLOT.loadspeed = 32;
        
        // mortar slot
        MORTAR_SLOT.mortar = true;
        MORTAR_SLOT.process = true; MORTAR_SLOT.automatic = false;
        for (let item in _REF_ITEM_LISTS["herbs"]) {
            MORTAR_SLOT.whitelist.push(_REF_ITEM_LISTS["herbs"][item]);
        }
        for (let item in _REF_ITEM_LISTS["bugs"]) {
            MORTAR_SLOT.whitelist.push(_REF_ITEM_LISTS["bugs"][item]);
        }

        // cabinet drawers
        setCabinetStones();
        setCabinetDrawers();

        for (let i = 0; i < 15; i++) {
            let k = new CabinetDrawer(CABINET_DRAWERS[i], new v2(256 + 158 + (17*(i%5)), 21 + (21*(Math.floor(i/5)))));

            CABINET_DRAWERS_LIST.push(k);
        }

        // store rack slots
        for (let i = 0; i < 6; i++) {
            STORE_RACK_SLOTS.push(new Slot(ITEMS[""], new v2(256 + 109 + (22 * (i %2)), 9 + (Math.floor(i/2) * 25))));
            
        }
        STORE_RACK_SLOTS[1].item = ITEMS["thermometer"]

        // jug slot
        JUG_SLOT.process = true;
        JUG_SLOT.whitelist = VIAL_SLOT_WHITELIST;

        // tarot slot
        TAROT_SLOT.whitelist = ["tarot"];
        shuffleTarotDeck()

        // statue slot
        STATUE_ENTRY_SLOT.entry = true;
        STATUE_ENTRY_SLOT.process = true;
        STATUE_ENTRY_SLOT.loadspeed = 8;
        STATUE_ENTRY_SLOT.blacklist = ENTRY_SLOT_BLACKLIST;
        setStatueSymbols()

        // symptoms
        setSymptoms();
        fxHallucinationRestart();
        fxCough();
        setRecipe();
    }

    

    draw() {

        // set fx shift
        fx_shift.x = 0; fx_shift.y = 0;
        for (let effect in FX) { 
            fx_shift.x += FX[effect].x ;
            fx_shift.y += FX[effect].y;
        }
        
        // init frame
        translate(shift.x + fx_shift.x, shift.y + fx_shift.y);
        if (SYMPTOMS.dizziness) {
            
            cursor_pos = new v2(-((mouseX) - CANVAS_SIZE.x/2)  + CANVAS_SIZE.x/2 - (shift.x * SCALE), mouseY -  (shift.y * SCALE)); 
            
        } else {
            cursor_pos = new v2(mouseX - (shift.x * SCALE), mouseY -  (shift.y * SCALE)); // change later haha if unless
            //cursor_pos = new v2(mouseX + (256 * currScreen * SCALE), mouseY); // change later haha if unless
        }

        if (isScreenShifting) {
            // lab
            image(IMG["ui_lab"], 0 , 0);
            // store
            image(IMG["ui_store"], 256, 0);
            // altar
            image(IMG["ui_altar"], -256, 0);

        } else {  
            switch (currScreen) {
                case 0: 
                    image(IMG["ui_lab"], 0 , 0);
                    break;
                case 1:
                    image(IMG["ui_store"], 256 + 0, 0);
                    break;
                case -1:
                    image(IMG["ui_altar"], -256, 0);
                    TAROT_DECK_SHUFFLE_BUTTON.draw();
                    break;
            }
        }
        

        // bottom inventory bit
        image(IMG["ui_inventory"], -shift.x , -shift.y);

        // clock
        textAlign(LEFT, CENTER); textSize(8); textFont(FONT["MPLUS_bold"]); fill(time < 60 ? COLORS["red-outline"] : COLORS["brown-outline"]);
        
        text(formatted_time, 116 -shift.x, 102 -shift.y );

        // SLOTS ----------------------------------------

        for (let slot of INVENTORY_SLOTS) {
            slot.draw();
        }


        //trash slot
        TRASH_SLOT.draw();
        if (TRASH_SLOT.load == 14) {
            if (TRASH_SLOT.item.name.includes("vial")) {isTossedVial = true;};
            TRASH_SLOT.item = ITEMS[""];    
        }
        
        //mouth slot 
        MOUTH_SLOT.draw();
        if (MOUTH_SLOT.load == 14) {
            MOUTH_SLOT.item = craft(MOUTH_SLOT.item, ITEMS[""], "MOUTH");
            MOUTH_SLOT.load = -1;
        }
        if (!MOUTH_SLOT.isValidItem(MOUTH_SLOT.item)) {
            MOUTH_SLOT.load = -1;
        } else if (MOUSE_SLOT.item.name.includes("thermometer")) {
            MOUSE_SLOT.item = ITEMS["thermometer"];
        }
        switch (MOUTH_SLOT.item.name) {
            case null: 
                break;
            
            case "_thermometer" : 
                if (SYMPTOMS.fever) {
                    TEMPERATURE = 2;
                } else if (SYMPTOMS.chills) {
                    TEMPERATURE = 0;
                } else {TEMPERATURE = 1}
                MOUTH_SLOT.item = ITEMS["thermometer" + String(TEMPERATURE)]
                break;
            
            case "peppermint":
            case "lemonbalm":
                SYMPTOMS.cough = false;
                break;
            
            case "sage": 
                SYMPTOMS.hallucinations = false;
                break;
            
            case "aurous": 
                SYMPTOMS.dizziness = false;
            
        }

        // vial slots
        for (let i = 0; i < VIAL_SLOTS.length; i++) {
            VIAL_SLOTS[i].draw()
            if (isTossedVial) {
                if (VIAL_SLOTS[i].item.name == "") {
                    VIAL_SLOTS[i].item = ITEMS["vial"];
                    isTossedVial = false;
                }
            }
        }
        for (let i = 0; i < VIAL_ENTRY_SLOTS.length; i++) {

            VIAL_ENTRY_SLOTS[i].draw();
            

            // craft
            if (VIAL_ENTRY_SLOTS[i].load == 14 && VIAL_ENTRY_SLOTS[i].item.name != "") {
                VIAL_SLOTS[i].item = craft(VIAL_SLOTS[i].item, VIAL_ENTRY_SLOTS[i].item, "VIAL");
                if (VIAL_ENTRY_SLOTS[i].item.name.includes("vial")) {isTossedVial = true;};
                VIAL_ENTRY_SLOTS[i].item = ITEMS[""];
            }

            //reset process if there is no vial
            if (VIAL_SLOTS[i].item.name == "") {
                if (VIAL_ENTRY_SLOTS[i].item.name != "") {
                    VIAL_ENTRY_SLOTS[i].load = 0;
                }
            }
            
        }

        // cauldron slots
        CAULDRON_ENTRY_SLOT.draw();
        CAULDRON_EXIT_SLOT.draw();
        if (CAULDRON_ENTRY_SLOT.load === 14) {
            let formatted_name = CAULDRON_ENTRY_SLOT.item.name
                .replaceAll("vial", "");
            CAULDRON.push(formatted_name);
            dlog("Entered " + formatted_name + " into cauldron" )
            if (CAULDRON_ENTRY_SLOT.item.name.includes("vial")) {isTossedVial = true;};
            CAULDRON_ENTRY_SLOT.item = ITEMS[""];

            // cauldron color
            let ingredients_valid = true;
            for (let i = 0; i < CAULDRON.length; i++) {
                let ingredient = CAULDRON[i];
                if (!POTION_RECIPE.includes(ingredient)) {
                    ingredients_valid = false;
                    break; 
                }
            }
            if (!ingredients_valid)  {
                CAULDRON_COLOR = "black";
            } else if (!(CAULDRON.length === POTION_RECIPE.length)) {
                CAULDRON_COLOR = "gray"
            } else {
                switch (POTION_TYPE) {
                    case "tonic":
                        CAULDRON_COLOR = "blue";
                        break;
                    case "elixir": 
                        CAULDRON_COLOR = "pink";
                        break;
                    case "draught": 
                        CAULDRON_COLOR = "purple";
                        break;
                }
            }
        }

        if (CAULDRON_COLOR !== "") {
            image(IMG["ui_cauldron_" + CAULDRON_COLOR], 0, 0);
        }


        // mortar slot
        MORTAR_SLOT.draw();
        if (isMouseClicked && MOUSE_SLOT.item.name == "") {
            MORTAR_SLOT.load = min(MORTAR_SLOT.load + 1, 14);
        }
        if (MORTAR_SLOT.load == 14) {
            MORTAR_SLOT.item = craft(MORTAR_SLOT.item, ITEMS[""], "MORTAR");
            MORTAR_SLOT.load = -1;
        }
        if (!MORTAR_SLOT.isValidItem(MORTAR_SLOT.item)) {
            MORTAR_SLOT.load = -1;
        }

        // cabinet stones
        if (CABINET_STONES[0] != "x") {
            image(IMG["ui_cabinet_" + CABINET_STONES[0] + "l"], 256, 0);
        };
        if (CABINET_STONES[1] != "x") {
            image(IMG["ui_cabinet_" + CABINET_STONES[1] + "r"], 256, 0);
        };
        // cabinet drawers
        for (let i = 0; i < CABINET_DRAWERS_LIST.length; i ++ ) {
            CABINET_DRAWERS_LIST[i].draw();
        }

        // store rack
        for (let i = 0; i < STORE_RACK_SLOTS.length; i++) {
            STORE_RACK_SLOTS[i].draw()
        }
        
        // jug slot
        JUG_SLOT.draw()

        // craft
        if (JUG_SLOT.load == 14) {
            JUG_SLOT.item = craft(JUG_SLOT.item, ITEMS["water"], "VIAL");
            JUG_SLOT.load = -1;
        }
        if (JUG_SLOT.item.name.includes("water")) {
            JUG_SLOT.load = -1;
        }

        // tarot slot
        TAROT_SLOT.draw()
        TAROT_SLOT.item = ITEMS["tarot"];
        // tarot card pulling
        if (MOUSE_SLOT.item.name == "tarot") {
            MOUSE_SLOT.item = ITEMS["tarot" + String(TAROT_DECK[TAROT_DECK_PAGE])]
            sfx('card_flip')
            TAROT_DECK_PAGE += 1;
        }

        // statue
        STATUE_ENTRY_SLOT.draw()
        textAlign(CENTER, CENTER); textSize(8); textFont(FONT[STATUE_SYMBOLS[STATUE_SYMBOL_PAGE][1]]); fill(COLORS["statue-gray"]);
        text(STATUE_SYMBOLS[STATUE_SYMBOL_PAGE][0], 158 -256, 79.5);
        STATUE_SYMBOL_PAGE = STATUE_SYMBOL_SEQ[STATUE_SYMBOL_SEQ_PAGE] ?? 2;

        if (STATUE_SYMBOL_PAGE === 2) {
            STATUE_ENTRY_SLOT.whitelist = [""];
            image(IMG['ui_altar_head'], 174 -256, 37);
            fill(COLORS["golden"]);
            text(STATUE_SYMBOLS[STATUE_SYMBOL_SEQ[STATUE_SYMBOL_SEQ_PAGE -1]][0], 182 -256, 43.5);
        } else if (STATUE_ENTRY_SLOT.load == 14) {
            if (STATUE_SYMBOL_PAGE === 0) { // repeat symbol
                if (STATUE_ENTRY_SLOT.item.name === STATUE_SYMBOLS[STATUE_SYMBOL_SEQ[STATUE_SYMBOL_SEQ_PAGE -1]][2]) {
                    STATUE_SYMBOL_SEQ_PAGE ++;
                }
            } else if (STATUE_ENTRY_SLOT.item.name === STATUE_SYMBOLS[STATUE_SYMBOL_PAGE][2]) {
                STATUE_SYMBOL_SEQ_PAGE ++;
                sfx('statue_success');
            } else {
                STATUE_SYMBOL_SEQ_PAGE = 0; 
                sfx('statue_failure');
            }
            if (STATUE_ENTRY_SLOT.item.name.includes("vial")) {isTossedVial = true;};
            STATUE_ENTRY_SLOT.item = ITEMS[""];
            STATUE_ENTRY_SLOT.load = -1;
        } else {
            STATUE_ENTRY_SLOT.whitelist = []; 
        }

        


        // UI TOP BIT ----------------------------------------

        // move screen buttons
        if (SCREENS[0] != currScreen) {SWITCHSCREEN_BUTTON_LEFT.draw();}
        if (SCREENS[SCREENS.length - 1] != currScreen) {SWITCHSCREEN_BUTTON_RIGHT.draw();}
        
        // SYMPTOMS ---------------------------------
        fxHallucinationDraw()
        frameRate(50);
        // mouse slot
        //MOUSE_SLOT.position = new v2(mouseX / SCALE - MOUSE_SLOT.size/2, mouseY / SCALE- MOUSE_SLOT.size/2);
        MOUSE_SLOT.position = new v2((cursor_pos.x)/SCALE -8 + shift.x, cursor_pos.y/SCALE -8 + shift.y)

        MOUSE_SLOT.draw();

        // draw the mouse
        noCursor();
        image(IMG["ui_mouse_pointer"], (cursor_pos.x )/SCALE-8, cursor_pos.y / SCALE-8)

        // MOVING SCREENS
        if (isScreenShifting) {
            shift.x -= isScreenShifting * screenShiftSpeed;
            if (shift.x % 256 == 0) {
                isScreenShifting = 0;
                currScreen = -shift.x / 256;
            }      
        }
    }
}


function setTimer(duration) {
    time = duration;
    var minutes, seconds;
  
    var intervalId = setInterval(function() {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);
    
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        formatted_time = minutes + ":" + seconds;
   
        if (--time < 0) {
            clearInterval(intervalId);
            // Timer has ended, you can perform any desired action here
            // alert("Timer has ended!");
        }
    }, 1000);
}
