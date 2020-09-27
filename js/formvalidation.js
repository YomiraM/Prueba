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