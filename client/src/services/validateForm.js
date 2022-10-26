export default function validate(input, cattle, err = {}) {
  if (input._id) {
    if (!/^[a-zA-Z0-9]+$/i.test(input._id)) {
      err._id = "El ID de Senasa debe ser alfanumerico";
    } else if (input._id.length < 16) {
      err._id = "El ID de Senasa no debe contener menos de 16 caracteres";
    } else if (input._id.length > 16) {
      err._id = "El ID de Senasa debe contener más de 16 caracteres";
    } else if (
      cattle &&
      cattle.find((el) => el._id.toLowerCase() === input._id.toLowerCase())
    ) {
      err._id = `El ID "${input._id.toUpperCase()}" ya está registrado`;
    }
  }

  if (input.animal_weight) {
    if (!/^([0-9]{1,4}(\.[0-9]{1,2})?)$/.test(input.animal_weight)) {
      err.animal_weight =
        "El peso del animal es numérico de hasta dos decimales";
    }
  }

  if (input.device_number) {
    if (!/^[a-zA-Z0-9]+$/i.test(input.device_number)) {
      err.device_number = "El número de dispositivo debe ser alfanumerico";
    } else if (input.device_number.length < 8) {
      err.device_number =
        "El número de dispositivo debe contener menos de 8 caracteres";
    } else if (input.device_number.length > 8) {
      err.device_number =
        "El número de dispositivo no debe contener más de 8 caracteres";
    }
  }

  if (
    !input._id ||
    !input.animal_type ||
    !input.paddock_name ||
    !input.device_type ||
    !input.device_number
  ) {
    err.required = `Falta completar: 
    ${!input._id ? "ID Senasa *" : ""} 
    ${!input.animal_type ? "Tipo de animal *" : ""} 
    ${!input.paddock_name ? "Nombre del potrero *" : ""} 
    ${!input.device_type ? "Tipo de dispositivo *" : ""} 
    ${!input.device_number ? "Numero de dispositivo *" : ""}`;
  }

  return err;
}
