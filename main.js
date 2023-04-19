function convertir() {
    const inputValorAConvertir = document.getElementById('valorAConvertir')
    const inputRadioGrados = document.getElementsByTagName('input')
    const barraProgress = document.getElementById('barraProgress')
    const divValorConvertido = document.getElementById('valorConvertido')
    const barraTextoGrados = document.getElementById('barraTextoGrados')
    let resultado;

    if (inputValorAConvertir.value == "") {
        alert("Debes digitar una cantidad a convertir")
    } else {
        if (inputRadioGrados[1].checked == true) {
            resultado = (inputValorAConvertir.value - 32) * 5 / 9;
        } else if (inputRadioGrados[2].checked == true) {
            resultado = ((inputValorAConvertir.value * 9 / 5) + 32);
        } else {
            alert('No haz seleccionado una opcion')
        }
        if (resultado >= 100) {
            barraProgress.style.height = `100%`
        } else if (resultado <= 0) {
            barraProgress.style.height = `0%`
        } else {
            barraProgress.style.height = `${resultado.toFixed(2)}%`
        }
        barraTextoGrados.textContent = `${resultado.toFixed(2)}°`
        divValorConvertido.textContent = `${resultado.toFixed(2)}°`
        console.log(inputValorAConvertir.value)
    }
}