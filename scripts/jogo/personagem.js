class Personagem {
  constructor(imagens, xInicial, yInicial) { 
    this.personagemNormal = imagens.imagemPersonagemNormal;
    this.posXInicial = xInicial;
    this.posYInicial = yInicial;
  } 

  exibe() {
    image(this.personagemNormal, 
      this.posYInicial-this.personagemNormal.width, 
      this.posXInicial, 
      this.personagemNormal.width, 
      this.personagemNormal.height, 
      0, 
      0, 
      0);
  }

}