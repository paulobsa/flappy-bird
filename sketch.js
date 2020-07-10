let imagemBackground;
let imagemBase;
let imagensCenario;
let imagemPersonagemNormal;
let imagemPersonagemAsaCima;
let imagemPersonagemAsaBaixo;
let imagensPersonagem;
let alturaInicialPersonagem;
let jogoIniciado;

function preload() {
  jogoIniciado = false;
  imagemBackground = loadImage('imagens/sprites/background-day.png');
  imagemBase = loadImage('imagens/sprites/base.png');
  
  imagensCenario = {
    imagemBase,
    imagemBackground
  }

  imagemPersonagemNormal = loadImage('imagens/sprites/yellowbird-midflap.png');
  imagemPersonagemAsaCima = loadImage('imagens/sprites/yellowbird-upflap.png');
  imagemPersonagemAsaBaixo = loadImage('imagens/sprites/yellowbird-downflap.png');
  
  imagensPersonagem = {
    imagemPersonagemNormal,
    imagemPersonagemAsaCima,
    imagemPersonagemAsaBaixo
  }
}

function setup() {
  createCanvas(288, 512);
  frameRate(60);

  xInicialPersonagem = imagemBackground.width / 2;
  yInicialPersonagem = (imagemBackground.height - imagemBase.height) / 2;

  cenario = new Cenario(imagensCenario, 3);
  personagem = new Personagem(imagensPersonagem, xInicialPersonagem, yInicialPersonagem);

}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();

  if (!jogoIniciado) {
    personagem.animacaoInicial();
  }

}