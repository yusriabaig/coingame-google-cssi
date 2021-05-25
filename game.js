/* ____    ___       _      _       ____
  / ___|  / _ \     / \    | |     / ___|
 | |  _  | | | |   / _ \   | |     \___ \
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/

-- Let's come up with goals together! --

  ____    _____   ____    _____   _____    ____   _   _
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

1)  Multiple coins on the screen at a time :)
2)  Coins of varying values :)
3)  Colors and decorations for coins :)
4)  Time-extending power-ups :)
5)  Coins that expire / move after a certain length of time. :)
6)  A player token that grows or shrinks as coins are collected.
7)  Coins that bounce around screen like the DVD logo did. :)
8)  Coins that simulate the rotating motion of Mario coins. :)
9)  A “restart” button or click function. :)
10) A larger, more pronounced “game over” proclamation. :)
11) A score rater (i.e. okay, good, great, outstanding!)
12) A high score over multiple plays. :)

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas,
 *    colorMode,
 *    HSB,
 *    random,
 *    width,
 *    height,
 *    background,
 *    ellipse,
 *    mouseX,
 *    mouseY, textSize,
 *    createCanvas,
 *    text, noFill,
 *    collideCircleCircle,
 *    p5, fill, color, abs,
 *    _collideDebug, createButton, mousePressed
 */

console.log("### p5.collide ###"),p5.prototype._collideDebug=!1,p5.prototype.collideDebug=function(i){_collideDebug=i},p5.prototype.collideRectRect=function(i,t,e,o,r,l,n,c){return i+e>=r&&i<=r+n&&t+o>=l&&t<=l+c},p5.prototype.collideRectCircle=function(i,t,e,o,r,l,n){var c=r,p=l;return r<i?c=i:r>i+e&&(c=i+e),l<t?p=t:l>t+o&&(p=t+o),this.dist(r,l,c,p)<=n/2},p5.prototype.collideCircleCircle=function(i,t,e,o,r,l){return this.dist(i,t,o,r)<=e/2+l/2},p5.prototype.collidePointCircle=function(i,t,e,o,r){return this.dist(i,t,e,o)<=r/2},p5.prototype.collidePointEllipse=function(i,t,e,o,r,l){var n=r/2,c=l/2;if(i>e+n||i<e-n||t>o+c||t<o-c)return!1;var p=i-e,s=t-o,d=c*this.sqrt(this.abs(n*n-p*p))/n;return s<=d&&s>=-d},p5.prototype.collidePointRect=function(i,t,e,o,r,l){return i>=e&&i<=e+r&&t>=o&&t<=o+l},p5.prototype.collidePointLine=function(i,t,e,o,r,l,n){var c=this.dist(i,t,e,o),p=this.dist(i,t,r,l),s=this.dist(e,o,r,l);return void 0===n&&(n=.1),c+p>=s-n&&c+p<=s+n},p5.prototype.collideLineCircle=function(i,t,e,o,r,l,n){var c=this.collidePointCircle(i,t,r,l,n),p=this.collidePointCircle(e,o,r,l,n);if(c||p)return!0;var s=i-e,d=t-o,u=this.sqrt(s*s+d*d),h=((r-i)*(e-i)+(l-t)*(o-t))/this.pow(u,2),y=i+h*(e-i),f=t+h*(o-t);return!!this.collidePointLine(y,f,i,t,e,o)&&(this._collideDebug&&this.ellipse(y,f,10,10),s=y-r,d=f-l,this.sqrt(s*s+d*d)<=n/2)},p5.prototype.collideLineLine=function(i,t,e,o,r,l,n,c,p){var s=((n-r)*(t-l)-(c-l)*(i-r))/((c-l)*(e-i)-(n-r)*(o-t)),d=((e-i)*(t-l)-(o-t)*(i-r))/((c-l)*(e-i)-(n-r)*(o-t));if(s>=0&&s<=1&&d>=0&&d<=1){if(this._collideDebug||p)var u=i+s*(e-i),h=t+s*(o-t);return this._collideDebug&&this.ellipse(u,h,10,10),!p||{x:u,y:h}}return!!p&&{x:!1,y:!1}},p5.prototype.collideLineRect=function(i,t,e,o,r,l,n,c,p){var s,d,u,h,y;return p?(s=this.collideLineLine(i,t,e,o,r,l,r,l+c,!0),d=this.collideLineLine(i,t,e,o,r+n,l,r+n,l+c,!0),u=this.collideLineLine(i,t,e,o,r,l,r+n,l,!0),h=this.collideLineLine(i,t,e,o,r,l+c,r+n,l+c,!0),y={left:s,right:d,top:u,bottom:h}):(s=this.collideLineLine(i,t,e,o,r,l,r,l+c),d=this.collideLineLine(i,t,e,o,r+n,l,r+n,l+c),u=this.collideLineLine(i,t,e,o,r,l,r+n,l),h=this.collideLineLine(i,t,e,o,r,l+c,r+n,l+c)),!!(s||d||u||h)&&(!p||y)},p5.prototype.collidePointPoly=function(i,t,e){for(var o=!1,r=0,l=0;l<e.length;l++){r=l+1,r==e.length&&(r=0);var n=e[l],c=e[r];(n.y>t&&c.y<t||n.y<t&&c.y>t)&&i<(c.x-n.x)*(t-n.y)/(c.y-n.y)+n.x&&(o=!o)}return o},p5.prototype.collideCirclePoly=function(i,t,e,o,r){void 0==r&&(r=!1);for(var l=0,n=0;n<o.length;n++){l=n+1,l==o.length&&(l=0);var c=o[n],p=o[l];if(this.collideLineCircle(c.x,c.y,p.x,p.y,i,t,e))return!0}if(1==r){if(this.collidePointPoly(i,t,o))return!0}return!1},p5.prototype.collideRectPoly=function(i,t,e,o,r,l){void 0==l&&(l=!1);for(var n=0,c=0;c<r.length;c++){n=c+1,n==r.length&&(n=0);var p=r[c],s=r[n];if(this.collideLineRect(p.x,p.y,s.x,s.y,i,t,e,o))return!0;if(1==l){if(this.collidePointPoly(i,t,r))return!0}}return!1},p5.prototype.collideLinePoly=function(i,t,e,o,r){for(var l=0,n=0;n<r.length;n++){l=n+1,l==r.length&&(l=0);var c=r[n].x,p=r[n].y,s=r[l].x,d=r[l].y;if(this.collideLineLine(i,t,e,o,c,p,s,d))return!0}return!1},p5.prototype.collidePolyPoly=function(i,t,e){void 0==e&&(e=!1);for(var o=0,r=0;r<i.length;r++){o=r+1,o==i.length&&(o=0);var l=i[r],n=i[o],c=this.collideLinePoly(l.x,l.y,n.x,n.y,t);if(c)return!0;if(1==e&&(c=this.collidePointPoly(t[0].x,t[0].y,i)))return!0}return!1},p5.prototype.collidePointTriangle=function(i,t,e,o,r,l,n,c){var p=this.abs((r-e)*(c-o)-(n-e)*(l-o));return this.abs((e-i)*(l-t)-(r-i)*(o-t))+this.abs((r-i)*(c-t)-(n-i)*(l-t))+this.abs((n-i)*(o-t)-(e-i)*(c-t))==p},p5.prototype.collidePointPoint=function(i,t,e,o,r){return void 0==r&&(r=0),this.dist(i,t,e,o)<=r},p5.prototype.collidePointArc=function(i,t,e,o,r,l,n,c){void 0==c&&(c=0);var p=this.createVector(i,t),s=this.createVector(e,o),d=this.createVector(r,0).rotate(l),u=p.copy().sub(s);if(p.dist(s)<=r+c){var h=d.dot(u),y=d.angleBetween(u);if(h>0&&y<=n/2&&y>=-n/2)return!0}return!1};

let brushHue, backgroundColor, coinX, coinY, score, time;
let coinX1, coinY1, coinX2, coinY2, hit1, hit2;
let coinA, coinB, hit3, coinC, coinD, hit4, button;
let xVelocity, yVelocity, highScore, gameIsOver, hit;
let xVelocity1, yVelocity1, rad, w, change, i;
let button1, button2;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  coinX = random(width);
  coinY = random(height);
  coinX1 = random(width);
  coinY1 = random(height);
  coinX2 = random(width);
  coinY2 = random(height);
  coinA = random(width);
  coinB = random(height);
  coinC = random(width);
  coinD = random(height);
  xVelocity = 1;
  yVelocity = 1;
  xVelocity1 = 1;
  yVelocity1 = 1;
  change = -1;
  w = 20;
  rad = 20;
  i = 1;
  score = 0;
  highScore = 0;
  time = 1000;
  gameIsOver = false;
  button = createButton('RESET');
  button.mousePressed(reset);
  button = createButton('LEVEL 1');
  button.mousePressed(level1);
  button = createButton('LEVEL 2');
  button.mousePressed(level2);
  button = createButton('LEVEL 3');
  button.mousePressed(level3);
}

function draw() {
  textSize(12);
  background(backgroundColor);

  i++;
  if (i == 5) {
    rotateCoin();
    i = 1;
  }

  fill(color(55, 100, 100));
  ellipse(coinX, coinY, w, 20);
  ellipse(coinX1, coinY1, w, 20);

  if (time >= 450 && time <= 550) {
    fill(270, 100, 100);
    ellipse(coinA, coinB, w, 20);
  }

  if (score % 10 == 0) {
    fill(color(320, 100, 100));
    ellipse(coinX2, coinY2, w, 20);
  }

  fill(color(0, 100, 100));
  ellipse(coinC, coinD, w, 20);
  if(time % 100 == 0) {
    moveRed();
  }

  coinX += xVelocity;
  if(coinX + 10 >= 400) {
    xVelocity = -xVelocity;
  } else if(coinX - 10 <= 0) {
    xVelocity = abs(xVelocity);
  }

  coinY += yVelocity;
  if(coinY + 10 >= 400) {
    yVelocity = -yVelocity;
  } else if(coinY - 10 <= 0) {
    yVelocity = abs(yVelocity);
  }

  coinX1 += xVelocity1;
  if(coinX1 + 10 >= 400) {
    xVelocity1 = -xVelocity1;
  } else if(coinX1 - 10 <= 0) {
    xVelocity1 = abs(xVelocity1);
  }

  coinY1 += yVelocity1;
  if(coinY1 + 10 >= 400) {
    yVelocity1 = -yVelocity1;
  } else if(coinY1 - 10 <= 0) {
    yVelocity1 = abs(yVelocity1);
  }

  noFill();
  ellipse(mouseX, mouseY, rad);
  if(score % 10 == 0 && score > 0) {
    rad = 25;
  }

  fill(color(0));
  text(`High Score: ${highScore}`, 20, 15);
  text(`Score: ${score}`, 20, 30);
  text(`Time Remaining: ${time}`, 20, 45);

  handleTime();
  handleCollision();
}

function handleCollision() {
  hit = collideCircleCircle(coinX, coinY, 20, mouseX, mouseY, 20);
  hit1 = collideCircleCircle(coinX1, coinY1, 20, mouseX, mouseY, 20);
  hit2 = collideCircleCircle(coinX2, coinY2, 20, mouseX, mouseY, 20);
  hit3 = collideCircleCircle(coinA, coinB, 20, mouseX, mouseY, 20);
  hit4 = collideCircleCircle(coinC, coinD, 20, mouseX, mouseY, 20)

  if (hit && !gameIsOver) {
    coinX = random(width);
    coinY = random(height);
    score++;
  } else if (hit1 && !gameIsOver) {
    coinX1 = random(width);
    coinY1 = random(height);
    score++;
  } else if (hit2 && !gameIsOver) {
    coinX2 = random(width);
    coinY2 = random(height);
    score += 2;
  } else if (hit3 && !gameIsOver) {
    coinA = random(width);
    coinB = random(height);
    time += 100;
  } else if (hit4 && !gameIsOver) {
    coinC = random(width);
    coinD = random(height);
    score += 3;
  } else if (gameIsOver) {
    if(highScore < score) {
      highScore = score;
    }
  }
}

function rotateCoin() {
  if (w == 20) {
    change = -1;
  } else if (w == 0) {
    change = 1;
  }
  w += change;
}

// function handleTime() {
//   if (time > 0) {
//     time--;
//   } else if (time == 0) {
//     gameIsOver = true;
//     background(backgroundColor);
//     textSize(30);
//     text(`GAME OVER`, 100, height / 2);
//   }
// }
function handleTime() {
  if (time > 0) {
    time -= 1;
  } else {
    gameIsOver = true;
    background(backgroundColor);
    textSize(50);
    text(`Game over`, 100, height/2);
  }
}


function moveRed() {
  coinC = random(width);
  coinD = random(height);
}

function reset() {
  time = 1000;
  score = 0;
  gameIsOver = false;
}

function level1() {
  xVelocity = 2;
  yVelocity = 3;
  xVelocity1 = 3;
  yVelocity1 = 2;
}

function level2() {
  xVelocity = 3;
  yVelocity = 4;
  xVelocity1 = 4;
  yVelocity1 = 3;
}

function level3() {
  xVelocity = 5;
  yVelocity = 6;
  xVelocity1 = 6;
  yVelocity1 = 5;
}
