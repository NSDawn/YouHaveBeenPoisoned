class Item {
    constructor(in_name, in_fullname, in_sprite, in_metadata ="") {
        this.name = in_name; // string
        this.fullname = in_fullname // string
        this.sprite = in_sprite; // string, in IMG
        this.metadata = in_metadata;
    }
}

class Slot {
    constructor(in_item, in_position) {
        this.item = in_item; // Item()
        this.position = in_position; // v2()
        this.mouse = false;
        this.size = 16;

        this.process = false;
        this.automatic = true;
        this.load = -1;
        this._loadtick = 0;
        this.loadspeed = 5;

        this.entry = false;
        this.mortar = false;
    
        this.fixed = false;

        this.whitelist = [];
        this.blacklist = [];

        this._isInvalidItem = false
    }

    draw() {
        
        if (this.fixed) {translate(-shift.x, -shift.y);}

        // mouse held item is valid item?
        this._isInvalidItem = !this.isValidItem(MOUSE_SLOT.item);

        // ENTRY SLOTS, draw if applicable 
        if (this.entry || this.mortar) {
            let f = false;
            if (this.item.name) {
                f = true
            } else if ((MOUSE_SLOT.item.name != "") && !this._isInvalidItem) {
                let k = new v2(cursor_pos.x/SCALE, cursor_pos.y/SCALE);
                if (k.isWithin(new v2(this.position.x - this.size*2, this.position.y - this.size*2), new v2(this.position.x + this.size*3, this.position.y + this.size*3))) {
                    f = true
                }
            }
            if (f && this.entry) {image(IMG["ui_entryslot"], this.position.x -2, this.position.y-2, this.size *20/16, this.size *20/16 );}
            if (f && this.mortar) {image(IMG["ui_mortarslot"], this.position.x -2, this.position.y-2, this.size *20/16, this.size *20/16 );}
        }

        
        // MOUSE INTERACTION
        if (!this.mouse && this.isMouseHovering()) {

            if (!this._isInvalidItem) {
                if (MOUSE_SLOT.item.name != "" || this.item.name != "") {
                    noStroke();
                    fill(255,255,255, 120);
                    rect(this.position.x, this.position.y, this.size, this.size);
                }
                // flipping when clicked
                if (isMouseClicked) {
                    let DUMMY_ITEM = MOUSE_SLOT.item;
                    MOUSE_SLOT.item = this.item;
                    this.item = DUMMY_ITEM;
                }
            } 
        }  
        
        
        // DRAW SPRITE
        if (this.item.sprite) {
            image(IMG[this.item.sprite], this.position.x, this.position.y, this.size, this.size);
        } 
        if (this._isInvalidItem && !this.entry && !this.mortar && this.isMouseHovering()) {
            image(IMG["item_x"], this.position.x, this.position.y, this.size, this.size);
        }

        // PROCESS BAR, IF APPLICABLE
        if (this.process) {
            if (this.item.name != "") {
                if (this.load != -1) {
                    image(IMG["item_load_" + String(min(this.load, 14))], this.position.x, this.position.y, this.size, this.size);
                }
                if (this.automatic) {
                    if (this._loadtick == this.loadspeed) {
                        this._loadtick = 0;
                        this.load = min(this.load + 1, 14)
                    } else {
                        this._loadtick ++;
                    }
                }

            } else {
                this.load = -1;
                this._loadtick = this.loadspeed;
            }
        } 

        if (this.fixed) {translate(shift.x, shift.y);}
        
        
    }

    isMouseHovering() {
        let test_cursor = cursor_pos;
        if (this.fixed) {test_cursor = new v2(cursor_pos.x + (shift.x * SCALE), cursor_pos.y + (shift.y * SCALE))};
        
        let TESTPOS = new v2(this.position.x * SCALE, this.position.y * SCALE)
        let TESTSIZE = this.size * SCALE
        return ((mid(TESTPOS.x, TESTPOS.x + TESTSIZE, test_cursor.x) == test_cursor.x) && (mid(TESTPOS.y, TESTPOS.y + TESTSIZE, test_cursor.y) == test_cursor.y));  
    }

    isValidItem(item) {
        if (item.name == "") {return true;}
        if (this.blacklist.length > 0) {
            if (this.blacklist.includes(item.name)) {
                return false
            }
        }
        if (this.whitelist.length > 0) {
            if (!this.whitelist.includes(item.name)) {
                return false
            }
        }
        return true
    }

    
}

function craft(item1, item2, mode) { // item, item, name
    
    dlog("Crafted " + item1.name + " with " + item2.name + " using mode " + mode)

    // if exact recipe exists, return the result
    if (RECIPES[mode][item1.name + "/" + item2.name]) {return ITEMS[RECIPES[mode][item1.name + "/" + item2.name]]};
    
    if (mode == "VIAL") {
        // create reference _item1 and _item2, which removes vial if present
        const _item1 = ITEMS[item1.name.replace("vial", "")] ? ITEMS[item1.name.replace("vial", "")] : item1;
        const _item2 = ITEMS[item2.name.replace("vial", "")] ? ITEMS[item2.name.replace("vial", "")] : item2;

        // transferring to empty vial
        if (item1 == ITEMS["vial"] && "vial" + _item2.name in ITEMS) {
            return ITEMS["vial" + _item2.name]
        }
        // craft if exists
        if ((RECIPES[mode][item1.name + "/" + _item2.name])) {
            return ITEMS[RECIPES[mode][item1.name + "/" + _item2.name]]
        }
        // craft if exists the opposite way 
        if ((RECIPES[mode]["vial" + _item2.name + "/" + _item1.name])) {
            return ITEMS[RECIPES[mode]["vial" + _item2.name + "/" + _item1.name]]
        }
        // special junk item
        return ITEMS["vialbad"];
    }

    return ITEMS["bad"]; 
}

