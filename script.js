const calculato = document.getElementById('calculato');

function imc()
{
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('result');

    var resultImc = peso / (altura * altura);
    var showResult = '';

    if(Number(peso) < 0 || Number(altura) < 0)
    {
       return result.innerText = `insira um valor positivo!`;

    }

    if(resultImc < 18)
    {
        showResult = 'Magreza';
    }
    if(resultImc > 18.5 && resultImc < 24.9)
    {
        showResult = 'Normal';
    }
    if(resultImc > 25 && resultImc < 29.9)
    {
        showResult = 'Sobrepeso, grau de obesidade I';
    }
    if(resultImc > 30 && resultImc < 39.9)
    {
        showResult = 'Obesidade, grau II';
    }
    if(resultImc > 40)
    {
        showResult = 'Obesidade grave, grau III';
    }
    result.innerText = `Você está na classificação: ${showResult}`;
    
}
calculato.addEventListener('click', imc);