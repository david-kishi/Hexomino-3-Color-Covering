// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = {
    cell_size: 20,
    wid: 15,
    hgt: 15
}; // JS Global var, w canvas size info.

// p5 Frame stuff
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 1; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.
var generation = 1;

// Metadata of Master Matrix with update functions
class _masterMeta {
    constructor() {
        this.cur_row = 0;
        this.cur_col = 0;
    }

    // Update to next coordinate
    nextCoord() {
        if (this.cur_col == (g_canvas.wid - 1)) { // if at edge, update to next row
            this.cur_row += 1;
            this.cur_col = 0;
        } else if (this.cur_col == 5 && (this.cur_row == 6 || this.cur_row == 7 || this.cur_row == 8)) { // if edge of center cutout
            this.cur_col += 4;
        } else {
            this.cur_col += 1;
        }
    }
}

// Class to hold a pool of Hexomino IDs
class _hexPool {
    constructor() {
        this.pool = _hexPool._initPool();
    }

    static _initPool() {
        let arr = [];
        while (arr.length != 35) {
            let rand = Math.floor(Math.random() * 36);
            if (arr.indexOf(rand) == -1) {
                arr.push(rand);
            }
        }
        return arr;
    }

    // Removes Hexomino ID from pool
    remove(index = 1) {
        this.pool.splice(index, 1);
    }
}

// Declare variables for classes
var hexPool = new _hexPool();
var masterMeta = new _masterMeta();

// TODO Overlap Check
// function overlapCheck() {

// }


function setup() // P5 Setup Fcn
{
    // Create grid
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height).parent("demoCanvas"); // Make a P5 canvas.
    background(0);
    draw_grid(20, 50, 'white');

    // 3x3 Center Cutout
    fill("white");
    noStroke();
    rect(120, 120, 60, 60);
}

function draw_update() // Update our display.
{
    fill("red");
    rect(masterMeta.cur_col * g_canvas.cell_size, masterMeta.cur_row * g_canvas.cell_size, g_canvas.cell_size, g_canvas.cell_size);
    masterMeta.nextCoord();
}

function draw() // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod) {
        if (!g_stop) draw_update();
    }
}

function keyPressed() {
    g_stop = !g_stop;
}