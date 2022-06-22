let xBolinha=100;
let yBolinha=200;
let diametro=15;

let velocidadeXbolinha=6;
let velocidadeYbolinha=6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
circle(xBolinha,yBolinha,diametro);
 xBolinha+=velocidadeXbolinha;
 xBolinha+=velocidadeXbolinha;
//ybolinha+=velocidadeyBolinha;

if(yBolinha > width){

}
}



