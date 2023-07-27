function listarTimezones(){
    try {
        fetch('https://timeapi.io/api/TimeZone/AvailableTimeZones')
        .then(response => response.json())
        .then(timezones => {
            timezones.forEach(timezone => {
                listaDeTimezones.innerHTML += `
                    <option>${timezone}</option>
                `;
            });
        })
    } catch(error){
        alert("Deu ruim");
    }
} listarTimezones();
