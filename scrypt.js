function dolar(){
    var valorI = parseFloat(document.getElementById("valorinicial").value);
    var result = valorI/4.77
    document.getElementById("valor_final").innerHTML = result.toFixed(2)
}

function euro(){
    var valorI = parseFloat(document.getElementById("valorinicial").value);
    var result = valorI/5.24
    document.getElementById("valor_final").innerHTML = result.toFixed(2)
}

function libra(){
    var valorI = parseFloat(document.getElementById("valorinicial").value);
    result = valorI/6.25
    document.getElementById("valor_final").innerHTML = result.toFixed(2)
}

function bitcoin(){
    valorI = parseFloat(document.getElementById("valorinicial").value);
    result = valorI/226127.72
    document.getElementById("valor_final").innerHTML = result.toFixed(2);
}