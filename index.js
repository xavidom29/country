
//  FUNCIONES
function getCountryInfo(nombre) {
  const requester = new XMLHttpRequest();
  requester.onreadystatechange = function() {
    if (this.readyState != 4) {
      return
    }
    if (this.status == 200) {
      var data = JSON.parse(this.responseText)[0];

      mostrarInfo(data)
    }
  };
  requester.open('GET', "https://restcountries.eu/rest/v2/name/" + nombre);
  requester.send();
}

function mostrarInfo (country){
  console.log(country);
  document.querySelectorAll('#contenedor')[0].innerHTML = "<div>Name: " + country.nativeName + "</div>" +"<div>Flag: " + "<img height=40 width=60 src=" +country.flag + ">"  + "</div>" + "<div>Calling Code: +" + country.callingCodes + "</div>" + "<div>Capital: " + country.capital + "</div>"+  "<div>Population: " + country.population + "</div>"+ "<div>Gini: " + country.gini + "</div>"+ "<div>Languages: " + country.languages[0].nativeName + "</div>"+ "<div>Symbol Currencies: " +             country.currencies[0].symbol + "</div>" + "<div>Top level domain: " + country.topLevelDomain[0]

}

// VARIABLES
const botonAñadir = document.querySelectorAll('#boton')[0];


// BINDS Y EVENTOS
botonAñadir.addEventListener('click', function() {
  let nombrePais = document.querySelectorAll('#input')[0].value;
  getCountryInfo(nombrePais);

})
