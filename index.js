function entrarConta() {

 console.log("Criando a Funçao ao Clicar no botao")
 var Login = document.getElementById("login")
 var Pass = document.getElementsByTagName("senha")
 
 console.log(Login)
 console.log(Pass)
 if (Login.value) {
  console.log('tem valor')
  console.log(Login.value)
  console.log('mostrando o valor do Login')
  
  
  /*se tiver valor direcionar o cliente à pagina Home*/
  window.location.replace("/home.html")
  
 } else {
  alert ('Preencha os campos')

 }

}


