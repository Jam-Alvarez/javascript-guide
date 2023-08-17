
// this time let's create a practice program here in javascript to convert some temperatures using html elements

document.getElementById('js-submit-btn')
    .onclick = function() {
        let temperature;

        if (document.getElementById('js-celcius-btn').checked) {
            temperature = document.getElementById('js-temp-input').value;
            temperature = toCelcius(temperature);
            
            document.getElementById('js-display').innerHTML = `The temperature in celcius is: ${temperature}°C`;
        }
        else if (document.getElementById('js-fahrenheit-btn').checked) {
            temperature = document.getElementById('js-temp-input').value;
            temperature = toFahrenheit(temperature);

            document.getElementById('js-display').innerHTML = `The temperature in fahrenheit is: ${temperature}°F`;
        }
        else document.getElementById('js-display').innerHTML = `Please select a unit to convert first.`;

    }



function toCelcius(temperature) {
    return (temperature - 32) * (5 / 9);
}

function toFahrenheit(temperature) {
    return temperature * 9 / 5 + 32; 
}