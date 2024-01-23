function nameInputTest(text) {
  const regex = /^[A-Za-z\s'-]+$/;
  if (text.length === 0) {
    return "Debe llenar este campo";
  }
  if (!regex.test(text)) {
    return "No debe ingresar caracteres especiales";
  }
  return "";
}

function emailInputTest(text) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (text.length === 0) {
    return "Debe llenar este campo";
  }
  if (!regex.test(text)) {
    return "Ingrese un correo valido. Formato: nombre123@correo.com";
  }
  return "";
}

function cellphoneTest(text) {
  const regex = /^(\+\d{2}-)?(\d{4}-\d{4}|\d{8})$/;
  if (text.lenght === 0) {
    return "Debe llenar este campo";
  }
  if (!regex.test(text)) {
    return "Debe ingresar un numbero en el formato 1234-5678, puede agregar el codigo de pais";
  }
}

export { nameInputTest, emailInputTest, cellphoneTest };
