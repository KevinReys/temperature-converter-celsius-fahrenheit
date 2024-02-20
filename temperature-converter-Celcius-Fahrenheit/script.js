function convert() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheitResult').innerText = 'Temperatura em Fahrenheit: ' + fahrenheit.toFixed(2);
}