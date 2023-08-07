//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (limiteBorda()){
      yAtor += 3;
    }
  }
}
function verificaColisao(){
  collideRectCircle()
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],wCarros,hCarros,xAtor,yAtor,15);
    if (colisao){
      inicioAtor();
      somColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function inicioAtor(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto (){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    inicioAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function limiteBorda(){
  return yAtor < 366
}