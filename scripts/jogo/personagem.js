class Personagem {
  constructor(imagens, xInicial, yInicial) { 
    this.personagemNormal = imagens.imagemPersonagemNormal;
    this.posX = xInicial  - this.personagemNormal.width ;
    this.posY = yInicial;
    this.minimo = yInicial - 5;
    this.maximo = yInicial + 5;
    
    this.soma = true;
    this.frameAtual = 0;
  } 

  exibe() {
    image(this.personagemNormal, 
      this.posX,
      this.posY, 
      this.personagemNormal.width, 
      this.personagemNormal.height, 
      0, 
      0, 
      0);
  }

  animacaoInicial() {
    this.frameAtual++;
    if (this.frameAtual % 2 === 0){
      return;
    }

    console.log("this.posY" + this.posY);
    if (this.posY == this.maximo) {
      this.soma = false;
    } else if (this.posY == this.minimo) {
      this.soma = true;
    }

    if (this.soma) {
      this.posY++;
    } else {
      this.posY--;
    }
  }

}