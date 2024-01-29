var jogar = prompt('Bem vindo ao jogo de adivinhação. Quer jogar? s/n');
if(jogar == 's'){
  
  var numeroSecreto = parseInt(Math.random() * 1001);
  var tentativa = 0
  var tentativasMaximas = 11

  //comentários com duas barras
  while((tentativa < tentativasMaximas) && (chute != numeroSecreto)){
    alert('Você possui ' + (tentativasMaximas - tentativa) + ' tentativas, use-as com lógica!')
    var chute = prompt('Digite um número entre 0 e 1000')
  
    if (chute == numeroSecreto){
      alert('Muito bem, você acertou!')
    } else if (chute > numeroSecreto) {
      alert('Errou... o número secreto é menor que ' + chute)
    } else if (chute < numeroSecreto) {
      alert('Errou... o número secreto é maior que ' + chute)
  
    }
    tentativa = tentativa + 1
  }
  if ((tentativasMaximas == 11) && (chute!= numeroSecreto)){
    alert('Não foi dessa vez, jogue novamente ou tente a mega sena!')
  }
}