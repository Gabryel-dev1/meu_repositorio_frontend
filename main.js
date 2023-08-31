const form = document.getElementById('valida-numeros');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagPositiva = `O número ${campoB.value} é maior que o número ${campoA.value}`;
    const mensagNegativa = `Erro, infelizmente o número ${campoB.value} é menor que o número ${campoA.value}`;
    const mensagIguais = `Erro, infelizmente o número ${campoB.value} é igual ao número ${campoA.value}`;

    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);

    if (valorA < valorB) {
        alert(mensagPositiva);

    } else if (valorA === valorB){
        alert(mensagIguais);

    } else {
            alert(mensagNegativa);
    }
    campoA.value = '';
    campoB.value = '';
})

console.log(form);