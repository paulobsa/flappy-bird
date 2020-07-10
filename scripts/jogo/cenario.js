class Cenario {
  constructor(imagens, velocidade) {
    this.background = imagens.imagemBackground;
    this.base = imagens.imagemBase;
    this.velocidade = velocidade;
    this.firstImg = 0;
    this.secondImg = width;
  }
  
  exibe() {
    image(this.background, 0, 0, width, height);
    image(this.base, this.firstImg, height-this.base.height, this.base.width, this.base.height);
    image(this.base, this.secondImg, height-this.base.height, this.base.width, this.base.height);
  }
  
  move() {
    this.firstImg = this.firstImg - this.velocidade;
    this.secondImg = this.secondImg - this.velocidade;

    if (this.firstImg < -width) {
      this.firstImg = width;
    }

    if (this.secondImg < -width) {
      this.secondImg = width;
    }
  }

}