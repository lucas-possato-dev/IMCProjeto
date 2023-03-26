
const but = document.querySelector(".but");
const ativo = document.querySelector(".ativo");

but.addEventListener('click', calc);

function calc(event) {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const result = document.querySelector(".result");
  const imc = peso / (altura **2);
  result.classList.add("ativo");
  result.innerHTML = `Seu IMC é ${imc}`;
  event.preventDefault()
}


