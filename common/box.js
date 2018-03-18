/**
  * 盒子类
  * @class Representing a box.
  */
/* global utils */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Box" }] */
class Box {
  /**
    * Create a box.
    * @param {Number} [width=50] - 宽
    * @param {Number} [height=50] - 高
    * @param {String} [color='#ff0000'] - 颜色
    */
  constructor(width = 50, height = 50, color = '#ff0000') {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
  }
  /**
   * Draw the box.
   * @param {Object} _context - The canvas context.
   */
  draw(_context) {
    const context = _context;
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    context.rect(0, 0, this.width, this.height);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
      context.stroke();
    }
    context.restore();
  }
}
