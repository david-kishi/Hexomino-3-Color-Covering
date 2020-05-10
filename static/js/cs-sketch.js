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
    this.mat = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  // Update to next coordinate
  nextCoord() {
    if (this.cur_col == 14 && this.cur_row != 14) { // if at edge, update to next row
      this.cur_row += 1;
      this.cur_col = 0;
    } else if (this.cur_col == 5 && (this.cur_row == 6 || this.cur_row == 7 || this.cur_row == 8)) { // if edge of center cutout
      this.cur_col += 4;
    } else if (this.cur_col != 14) {
      this.cur_col += 1;
    } else {
      this.cur_col = 15;
      this.cur_row = 15;
    }
  }

  // Check if matrix is filled
  checkFin() {
    for (let i = 0; i < 15; i++) {
      let temp = this.mat[i].reduce(function (a, b) {
        return a + b;
      }, 0);
      if (temp != 15) {
        return false;
      }
    }
    return true;
  }

  // Resets the master matrix
  reset() {
    this.cur_row = 0;
    this.cur_col = 0;
    this.mat = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }
}

/**
 * Hexomino ID Pool
 *  Description:
 *    Class to hold functions to initiate pool and remove from pool of
 *    Hexomino IDs.
 * 
 */
class _hexPool {
  constructor() {
    this.pool = _hexPool._initPool();
  }

  // Initiates pool by randomly generating unique integers within [0,35]
  static _initPool() {
    let arr = [];
    while (arr.length != 36) {
      let rand = Math.floor(Math.random() * 36);
      if (arr.indexOf(rand) == -1) {
        arr.push(rand);
      }
    }
    return arr;
  }

  // Reset pool
  reset() {
    this.pool = _hexPool._initPool();
  }

  /**
   * Remove
   *  Removes ID from pool at index provided.
   * 
   * @param {number} index - index of pool
   */
  remove(index = 1) {
    this.pool.splice(index, 1);
  }
}

// Declare variables for classes
var hexPool = new _hexPool();
var masterMeta = new _masterMeta();

/** 
 * Overlap Check
 *  Description:
 *    Checks if currently selected Hexomino overlaps any already placed
 *    Hexominoes or is out-of-bounds.
 *
 *  @param {hexomino object} hMat - h_mat object from `matrices.js`
 */
function overlapCheck(hMat) {
  for (let i = 0; i < hMat.size_row; i++) {
    for (let j = 0; j < hMat.size_col; j++) {
      if (hMat.matrix[i][j] == 1) {
        // Compared Row Coord
        let cmpRow = masterMeta.cur_row - hMat.pivot_row + i;
        // Compared Column Coord
        let cmpCol = masterMeta.cur_col - hMat.pivot_col + j;

        // If within bounds, run comparison check
        if ((cmpRow >= 0 &&
            cmpRow <= 14) &&
          (cmpCol >= 0 &&
            cmpCol <= 14)) {
          if (hMat.matrix[i][j] * masterMeta.mat[masterMeta.cur_row - hMat.pivot_row + i][masterMeta.cur_col - hMat.pivot_col + j]) {
            return true;
          }
        } else {
          return true;
        }
      }
    }
  }
  return false;
}

// TODO Pothole Check
/**
 * Pothole Check
 *  Description:
 *    Checks if the found hexomino creates any impossible potholes.
 */
function potholeCheck() {
  console.log("pothole checker");
}

//TODO RGB Picker
function rgbPicker() {
  console.log("rgb picker");
}

/**
 * Render
 *  Description:
 *    Renders the found hexomino onto the graph and updates the master matrix.
 *  
 * @param {hexomino object} hMat - h_mat object from `matrices.js`
 */
function render(hMat) {
  // Choose random color for now
  // TODO Need to create RGB color picker function
  let c = color(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  fill(c);

  // Render hexomino
  for (let k = 0; k < hMat.size_row; k++) {
    for (let l = 0; l < hMat.size_col; l++) {
      if (hMat.matrix[k][l] == 1) {
        rect((masterMeta.cur_col - hMat.pivot_col + l) * g_canvas.cell_size, (masterMeta.cur_row - hMat.pivot_row + k) * g_canvas.cell_size, g_canvas.cell_size, g_canvas.cell_size);
        masterMeta.mat[masterMeta.cur_row - hMat.pivot_row + k][masterMeta.cur_col - hMat.pivot_col + l] = 1;
      }
    }
  }
}

/**
 * Find Hex
 *  Description:
 *    Loops through Hexomino ID Pool (hexPool) and each rotation variant of the
 *    hexomino to find a fit that does not overlap. If found, render.
 */
function findHex() {
  // Loop through the hexpool
  for (let i = 0; i < hexPool.pool.length; i++) {
    // Loop through each rotation of Hexomino
    for (let j = 0; j < h_mat[hexPool.pool[i]].matrices.length; j++) {
      if (!overlapCheck(h_mat[hexPool.pool[i]].matrices[j])) {
        render(h_mat[hexPool.pool[i]].matrices[j]);
        hexPool.remove(i);
        return;
      }
    }
  }
}

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

function reset_canvas() {
  // Create grid
  let sz = g_canvas.cell_size;
  let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
  let height = sz * g_canvas.hgt;
  background(0);
  draw_grid(20, 50, 'white');

  // 3x3 Center Cutout
  fill("white");
  noStroke();
  rect(120, 120, 60, 60);
}

function draw_update() // Update our display.
{
  if (hexPool.pool.length != 0 && masterMeta.cur_col + masterMeta.cur_row <= 28) {
    findHex(); // Look for a hexomino that fits
    masterMeta.nextCoord(); // Update to next coordinate on matrix
  } else {
    if (masterMeta.checkFin()) { // Check if the graph is filled completely
      g_stop = !g_stop;
    } else { // If not, reset graph and hexomino ID pool.
      reset_canvas();
      masterMeta.reset();
      hexPool.reset();
    }
  }
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