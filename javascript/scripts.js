function welcome() {
  alert("Bem vindo(a)! Faça seu cadastro")
}

let nome = document.getElementById("nome")

function enviar() {
  alert(`Olá ${nome.value}! Cadastro realizado com sucesso!`)
}
