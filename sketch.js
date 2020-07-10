let imagemBackground;
let imagemBase;
let imagensCenario;

function preload() {
  imagemBackground = loadImage('imagens/sprites/background-day.png');
  imagemBase = loadImage('imagens/sprites/base.png');
  imagensCenario = {
    imagemBase,
    imagemBackground
  }
}


function setup() {
  createCanvas(288, 512);
  frameRate(60);
  cenario = new Cenario(imagensCenario, 3);
}


function draw() {
  // background(220);
  
  cenario.exibe();
  cenario.move();
}