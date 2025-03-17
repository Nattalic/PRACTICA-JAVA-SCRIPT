let pais= prompt ('Ingresa el País');
let idioma = "";


if (pais === "Colombia") {
    idioma = "Español";
}else if (pais === "Estados Unidos"){
    idioma = "Inglés";
}else if (pais === "Canada") {
    idioma = "Inglés y Francés";
}else {
    console.log ("No existe el país !!!")
}

console.log("En " + pais + " se habla: " + idioma);