function entrarConta(verificarConta) {

 console.log("Criando a Funçao ao Clicar no botao")
 var elementLogin = document.getElementById("login")
 
 console.log(elementLogin)
 if (elementLogin.value) {
  console.log('tem valor')
  console.log(elementLogin.value)
  console.log('mostrando o valor do Login')
  /*se tiver valor verificar e o valor se encontra-se no bando e dados de Login*/
  
  /* se tiver valor direcionar o cliente à pagina Home*/
  window.location.replace("/home.html");
 } else {
  alert ('Preencha os campos')
  
 }

}


