class SwitchScreenButton {
    constructor (in_direction, in_position) {
        this.direction = in_direction; // int: -1 for left, 1 for right
        this.position = in_position; // v2

        this.sprite = (this.direction == -1 ? "ui_button_screenlf" : "ui_button_screenrt") ;
        this.size = 16;
    } 

    draw () {
        if (!isScreenShifting) {
            image(IMG[this.sprite + (this.isMouseHovering() ? "1" : "0")], this.position.x -shift.x, this.position.y -shift.y, this.size, this.size);
        }

        if (this.isMouseHovering() && isMouseClicked && !isScreenShifting) {
            isScreenShifting = this.direction;
        }

    }

    isMouseHovering() {
        let TESTPOS = new v2(this.position.x * SCALE, this.position.y * SCALE);
        let TESTSIZE = this.size * SCALE;
        let TESTCURSOR = new v2(cursor_pos.x + (shift.x * SCALE), cursor_pos.y + (shift.y * SCALE));
        return ((mid(TESTPOS.x, TESTPOS.x + TESTSIZE, TESTCURSOR.x) == TESTCURSOR.x) && (mid(TESTPOS.y, TESTPOS.y + TESTSIZE, TESTCURSOR.y) == TESTCURSOR.y));
    }  
} 

class CabinetDrawer {
    constructor (in_label, in_position) {
        this.position = in_position; // v2
        this.label = in_label;
        this.sprite = ("ui_drawer" + this.label);
        this.size = 16;
    }

    draw () {
        image(IMG[this.sprite], this.position.x , this.position.y - (this.isMouseHovering()? -1: 0), this.size, this.size);

        if (this.isMouseHovering() && isMouseClicked && MOUSE_SLOT.item.name == "") {
            
            let rand = pseudo(CABINET_ITEMS["*"][CABINET_DRAWERS[this.label]].length);
            dlog("Took " + CABINET_ITEMS["*"][CABINET_DRAWERS[this.label]][rand]);
            MOUSE_SLOT.item = ITEMS[CABINET_ITEMS["*"][CABINET_DRAWERS[this.label]][rand]];
        }
    }

    isMouseHovering() {
        let TESTPOS = new v2(this.position.x * SCALE, this.position.y * SCALE)
        let TESTSIZE = this.size * SCALE
        return ((mid(TESTPOS.x, TESTPOS.x + TESTSIZE, cursor_pos.x) == cursor_pos.x) && (mid(TESTPOS.y, TESTPOS.y + TESTSIZE, cursor_pos.y) == cursor_pos.y));
    }  
}

class ShuffleButton {
    constructor (in_position) {
        this.position = in_position; // v2
        this.sprite = "ui_button_shuffle" ;
        this.size = 12;
    } 

    draw () {
        if (TAROT_DECK_PAGE > 0) {
            image(IMG[this.sprite + (this.isMouseHovering() ? "1" : "0")], this.position.x , this.position.y - (this.isMouseHovering()? -1: 0), this.size, this.size);
            if (this.isMouseHovering() && isMouseClicked && !isScreenShifting) {
                shuffleTarotDeck(true);
                dlog("Shuffled Tarot Deck");
            }
        }  
    }

    isMouseHovering() {
        let TESTPOS = new v2(this.position.x * SCALE, this.position.y * SCALE)
        let TESTSIZE = this.size * SCALE
        return ((mid(TESTPOS.x, TESTPOS.x + TESTSIZE, cursor_pos.x) == cursor_pos.x) && (mid(TESTPOS.y, TESTPOS.y + TESTSIZE, cursor_pos.y) == cursor_pos.y));
    }  
}


// FX -------------

function fxShake(in_reel, frame = 0) {
    FX['SHAKE'].x = in_reel.frames[frame].x;
    FX['SHAKE'].y = in_reel.frames[frame].y;
    if (frame < in_reel.length -1) { setTimeout(function() {fxShake(in_reel, frame +1)}, in_reel.framegap) }
}

class Reel {
    constructor(in_frames, in_framegap) {
        this.frames = in_frames
        this.framegap = in_framegap
    }
    get length() {
        return this.frames.length;
    }
}

const COUGH_FX_REEL = new Reel([new v2(5, 5), new v2(-3, 2), new v2(-6,-6), new v2(3,0), new v2(-3,3), new v2(-2,-5), new v2(2,2), new v2(-1,1), new v2(1,-1), new v2(0,0), new v2(0,0), new v2(0,0),], 50) 
function fxCough() {
    if (SYMPTOMS.cough) {
        const coughSFX = ["coughA", "coughB"];
        const rand = pseudo(2);
        sfx(coughSFX[rand]);
        fxShake(COUGH_FX_REEL);
        
        // recursive call to cough again
        const rand_milsecs = pseudo(10) + 5 * 1000;
        setTimeout(fxCough, rand_milsecs)
    } else {
        dlog("Symptom cough has subsided.")
    }
}

let fx_hallucination_d = new v2(2, 0);
let fx_hallucination_s = new v2(0, -1)
let fx_hallucination_sleeping = true;
let fx_hallucination_size = new v2(50, 100);
let screenBoundsLf = new v2(-512, 0);
let screenBoundsRt = new v2(512, 144)
function fxHallucinationDraw() {
    if (fx_hallucination_sleeping) return;
    if (!SYMPTOMS.hallucinations) return;

    // check if offscreen
    let hallucination_bounding_point = new v2(fx_hallucination_s.x + fx_hallucination_size.x,fx_hallucination_s.y + fx_hallucination_size.y);
    if (!fx_hallucination_s.isWithin(screenBoundsLf, screenBoundsRt) && !hallucination_bounding_point.isWithin(screenBoundsLf, screenBoundsRt)) {
        fx_hallucination_sleeping = true;
        fxHallucinationRestart();
    } else {
        image(IMG["ui_hallucination"], fx_hallucination_s.x, fx_hallucination_s.y )
        fx_hallucination_s.shift(fx_hallucination_d);
    }
}
function fxHallucinationRestart() {
    if (!SYMPTOMS.hallucinations) return;

    const rand_milsecs = (pseudo(10) + 10 ) *750;

    setTimeout(function() {
        rand_y = pseudo(101) + 22;
        rand_dir = pseudo(2);
        rand_x = this.shift.x + ((rand_dir * 2) -1) * 100 + (-rand_dir) * -256;
        let dy_options = [0, 0.1, 0.1, 0.15, 0.15, 0.2, 0.2];
        rand_d = new v2(-((rand_dir * 2) -1) * 3, (((rand_y > 72) *2) -1) * dy_options[pseudo(dy_options.length)])
        
        fx_hallucination_s = new v2(rand_x, rand_y);
        fx_hallucination_d = rand_d;
        fx_hallucination_sleeping = false;
        sfx('hallucination');
    }, rand_milsecs)
}



  

function sfx(in_string) {
    try {
        SFX[in_string].play()
        return true;
    } catch {
        dlog("Could not find audio <" + in_string + ">")
        return false;
    }
}