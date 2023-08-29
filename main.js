const form = document.getElementById('valida-numeros');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('numero1');
    const campoB = document.getElementById('numero2');
    const mensagPositiva = `O número ${campoB.value} é maior que o número ${campoA.value}`;
    const mensagNegativa = `Erro, infelizmente o número ${campoB.value} é menor que o número ${campoA.value}`;
    const mensagIguais = `Erro, infelizmente o número ${campoB.value} é igual ao número ${campoA.value}`;

    if (campoA.value < campoB.value) {
        alert(mensagPositiva)

    } else if (campoA.value == campoB.value){
        alert(mensagIguais)

    } else {
            alert(mensagNegativa)
    }
    campoA.value = '';
    campoB.value = '';
})

console.log(form);