function validar (){
  var name, lastName, email, dpto, location, ci, condictions, expresion;

  name = document.getElementById('name').value;
  lastName = document.getElementById('lastName').value;
  email = document.getElementById('email').value;
  dpto = document.getElementById('dpto').value;
  location = document.getElementById('location').value;
  ci = document.getElementById('ci').value;
  conditions = document.getElementById('conditions').value;

  expresion = /\w+@\w+\.+[a-z]/;

  if (name === "" || name.length <= 2){
    alert("Escriba su nombre correctamente");
    return false;
  }
  
  else if (lastName === "" || lastName.length <= 2) {
    alert("Escriba su apellido correctamente");
    return false;
  }

  else if (email === "") {
    alert("Escriba su email correctamente");
    return false;
  }

  else if (!expresion.test(email)) {

  }

  else if (dpto === "") {
    alert("Seleccione su departamento correctamente");
    return false;
  }

  else if (location === "") {
    alert("Seleccione su locación correctamente");
    return false;
  }

  else if (conditions === "") {
    alert("Acepte las condiciones");
    return false;
  }

  return true();
}

function validarCedula(ci) {
  //Inicializo los coefcientes en el orden correcto
  var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  var suma = 0;
  //Para el caso en el que la CI tiene menos de 8 digitos
  //calculo cuantos coeficientes no voy a usar
  var difCoef = parseInt(arrCoefs.length - ci.length);
  //recorro cada digito empezando por el de más a la derecha
  //o sea, el digito verificador, el que tiene indice mayor en el array
  for (var i = ci.length - 1; i > -1; i--) {
      //Obtengo el digito correspondiente de la ci recibida
      var dig = ci.substring(i, i + 1);
      //Lo tenía como caracter, lo transformo a int para poder operar
      var digInt = parseInt(dig);
      //Obtengo el coeficiente correspondiente al ésta posición del digito
      var coef = arrCoefs[i + difCoef];
      //Multiplico dígito por coeficiente y lo acumulo a la suma total
      suma = suma + digInt * coef;
  }
  var result = false;
  // si la suma es múltiplo de 10 es una ci válida
  if ((suma % 10) === 0) {
      result = true;
  }
  return result;
}