var seq = 0;

function pseudo(in_int) { //returns an int from 0 to in_int
    seq = (seq +1)% 999;

    let _seed = SEED + String(seq);
    let out = 1;

    for (let i = 0; i < _seed.length; i++) {
        let k = parseInt(_seed[i]);
        if (k == 0) {continue;}
        out += k * Math.imul(k * out);
        out = Math.abs(Math.imul(out, out) -k);
    }
    
    return (out % in_int)
}

function setCabinetStones() {
    let stones = ["x", "e", "r", "a", "s"];
    CABINET_STONES = stones[pseudo(5)] + stones[pseudo(5)];
    dlog("Current Cabinet Stones: " + String(CABINET_STONES));
}

function setCabinetDrawers() {

    CABINET_DRAWERS = {};
    
    let k;
    // make the cabinet drawers ref
    // zoological
    k = 0;
    if ((CABINET_STONES[0] == "a" || CABINET_STONES[1] == "a") && (CABINET_STONES[0] != "s" && CABINET_STONES[1] != "s")){k = 1;}
    else if (CABINET_STONES[0] == "x" || CABINET_STONES[1] == "x" || CABINET_STONES[1] == "e") {k = 2;}
    else if (CABINET_STONES[0] == "r") {k = 1;}
    else if (CABINET_STONES[1] == "r") {k = 0;}

    for (let drawer_name in CABINET_DRAWERS_REF["zoological"][k]) {
        CABINET_DRAWERS[drawer_name] = CABINET_DRAWERS_REF["zoological"][k][drawer_name];
    }
    // botanical
    k = 0;
    if ((CABINET_STONES[0] == "s" || CABINET_STONES[0] == "r") && (CABINET_STONES[1] != "x")) {k = 1;}
    else if (CABINET_STONES[0] == "e" || CABINET_STONES[1] == "a") {k = 2;}
    else if (CABINET_STONES[0] == "x" || CABINET_STONES[1] == "x") {k = 3;}
    for (let drawer_name in CABINET_DRAWERS_REF["botanical"][k]) {
        CABINET_DRAWERS[drawer_name] = CABINET_DRAWERS_REF["botanical"][k][drawer_name];
    }

    // alchemical
    k = 0;
    for (let drawer_name in CABINET_DRAWERS_REF["alchemical"][k]) {
        CABINET_DRAWERS[drawer_name] = CABINET_DRAWERS_REF["alchemical"][k][drawer_name];
    }

    // make an ordered list of the drawers.
    _CABINET_DRAWERS_LIST = Object.keys(CABINET_DRAWERS);
    // shuffle it.
    for (let i = 0; i < 21; i++) {
        let rand = pseudo(_CABINET_DRAWERS_LIST.length);
        let shuffled_item = _CABINET_DRAWERS_LIST[rand];
        _CABINET_DRAWERS_LIST.splice(rand, 1);
        _CABINET_DRAWERS_LIST.push(shuffled_item);
    };
    // add that info to the dict
    for (let i = 0; i < _CABINET_DRAWERS_LIST.length; i++) {
        CABINET_DRAWERS[i] = _CABINET_DRAWERS_LIST[i];
    }


}

function shuffleTarotDeck(reshuffle=false) {
    
    TAROT_DECK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    const _PHASE = PHASE % 3;
    let _key = [parseInt(SEED[_PHASE*2] + 7), 7, parseInt(SEED[_PHASE*2 + 1]), 3,  _PHASE]
    let _key_page = 0;

    TAROT_DECK_PAGE = 0;
    let _TAROT_DECK = TAROT_DECK;
    TAROT_DECK = [];
    
    let _TAROT_DECK_PAGE = 0;

    while (_TAROT_DECK.length > 10) {
        _TAROT_DECK_PAGE += _key[_key_page]; _TAROT_DECK_PAGE %= _TAROT_DECK.length;
        _key_page += 1; _key_page %= 5;

        TAROT_DECK.push(_TAROT_DECK[_TAROT_DECK_PAGE]);
        _TAROT_DECK.splice(_TAROT_DECK_PAGE, 1)
    }
    TAROT_DECK = _TAROT_DECK.concat(TAROT_DECK);

    if (reshuffle) {
        sfx("card_shuffle");

        for (let i = 0; i < INVENTORY_SLOTS.length; i++) {
            if (INVENTORY_SLOTS[i].item.name.includes("tarot")) {
                INVENTORY_SLOTS[i].item = ITEMS[""];
            }
            
        }
        for (let i = 0; i < STORE_RACK_SLOTS.length; i++) {
            if (STORE_RACK_SLOTS[i].item.name.includes("tarot")) {
                STORE_RACK_SLOTS[i].item = ITEMS[""];
            }
        }
        if (MOUSE_SLOT.item.name.includes("tarot")) {
            MOUSE_SLOT.item = ITEMS[""];
        }
    }
}

function setStatueSymbols() {
    STATUE_SYMBOL_SEQ = [1];
    STATUE_SYMBOL_SEQ_PAGE = 1;

    const length_of_seq = STATUE_SYMBOL_SEQ_LEN -2;
    let out = 0;

    for (let rep = 0; rep < length_of_seq; rep++) {
        let _seed = String(PHASE) + String(rep) + SEED;
        for (let i = 0; i < _seed.length; i++) {
            let k = parseInt(_seed[i]);
            if (k == 0) {continue;}
            out += k * Math.imul(k * out);
            out = Math.abs(Math.imul(out, out) -k);
        }
        STATUE_SYMBOL_SEQ.push(out %18 + 3)
    }

    // add in a repeat symbol 
    STATUE_SYMBOL_SEQ.splice(
        STATUE_SYMBOL_SEQ[length_of_seq -1] % 3 +2,
        0,
        0,
    )
    
    dlog("StatueSymbolSeq: " + STATUE_SYMBOL_SEQ);
    
}

function setSymptoms() {
    // some thing with seed
    _SYMPTOMS = {
        'fever': false,
        'chills': true,
        'cough': true,
        'hallucinations': false,
        'dizziness': false,
    }
    for (key in _SYMPTOMS) {
        SYMPTOMS[key] = _SYMPTOMS[key];
    }
}
function setRecipe() {
    const SPICE_REF = {
        "fever": [
            "mustardseeds",
            "peppercorns",
            "cinnamon",
            "cinnamon",
            "peppercorns",
        ], 
        "chills": [
            "poppyseeds",
            "cinnamon",
            "chiliflakes",
            "peppercorns",
            "chiliflakes",
        ],
        "neither" : [
            "cinnamon",
            "mustardseeds",
            "poppyseeds",
            "peppercorns",
            "chiliflakes",
        ]
    }
    const TEMP = _SYMPTOMS.fever ? "fever" : _SYMPTOMS.chills ? "chills" : "neither"
    POTION_RECIPE.push(SPICE_REF[TEMP][ITEMS["tarot" +[String(TAROT_DECK[0])]]["metadata"][0]])

    const READ_SYMBOL = STATUE_SYMBOLS[STATUE_SYMBOL_SEQ[STATUE_SYMBOL_SEQ_LEN -1]][0]
    const BUG_REF = { 
        "ぬ": "scorpion",
        "ɕ": "scorpion",
        "疒": "scorpion", 
        "ゑ": "spider",
        "ɮ": "spider",
        "न": "spider",
        "இ": "spider",
        "三": "cicada",
        "ʡ": "cicada",
        "λ": "cicada",
        "ஐ": "cicada",
        "ऽ": "butterfly",
        "ன": "butterfly",
        "艸": "butterfly",
        "א": "butterfly",
        "Ґ": "moth",
        "儿": "moth",
        "ß": "moth",
        "ॠ": "moth",
    }
    const BUG_IS_PULVERIZED = ["2", "1", "4"].includes(ITEMS["tarot" +[String(TAROT_DECK[2])]]["metadata"][1]) ? "pulverized" : "";
    
    POTION_RECIPE.push(BUG_IS_PULVERIZED + BUG_REF[READ_SYMBOL])

    const SOLUTION_REF = { 
        "000": "stannic",
        "100": "stannous",
        "010": "argentous",
        "001": "plumbous",
        "110": "ferric",
        "101": "cuprous",
        "011": "cupric",
        "111": "ferrous",
    }
    let SOL_CODE = "";
    
    SOL_CODE += ["2", "4"].includes(ITEMS["tarot" +[String(TAROT_DECK[0])]]["metadata"][2]) ? "1" : "0";
    SOL_CODE += _SYMPTOMS.hallucinations ? 1 : 0;
    SOL_CODE += _SYMPTOMS.cough ? 1 : 0;

    POTION_RECIPE.push(SOLUTION_REF[SOL_CODE])


}   