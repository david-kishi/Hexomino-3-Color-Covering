// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = {
    cell_size: 20,
    wid: 15,
    hgt: 15
}; // JS Global var, w canvas size info.

var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 20; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.
var generation = 1;



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
    console.log(m_mat)
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