let sabor = prompt("Ingrese el sabor de la pizza:");
let tamaño = prompt("Ingrese el tamaño de la pizza (Pequeña, Mediana, Grande):");
let bebida = prompt("¿Desea agregar una bebida? (Sí / No)").toLowerCase(); /*para que funcione si se escribe la repsuesta de diferentes maneras*/
let bebidaSeleccionada = "";

if (bebida === "sí" || /* significa "o"*/ bebida === "si") {
    bebidaSeleccionada = prompt("Ingrese la bebida que desea:");
}


let mensaje = "Confirmación de pedido: ";
mensaje += "Pizza: " + sabor;  /*se utiliza el += para agregar texto sin sobrescribir lo anterior.*/
mensaje += "Tamaño: " + tamaño;  


if (bebida === "sí" || bebida === "si") {
    mensaje += "Bebida: " + bebidaSeleccionada;  
} else {
    mensaje += "Sin bebida";
}


let confirmar = confirm(mensaje + "¿Desea confirmar su pedido?");
    
if (confirmar) {
    console.log("Pedido realizado con éxito.");
} else {
    console.log("Pedido Cancelado!");
}
