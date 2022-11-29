/*
Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior
*/
const valorTicket = 200;

let cantidadTickets = document.getElementById("cantidad");
let categoriasDesc = document.getElementById("categorias");
let totalPago = document.getElementById("totalAPagar");

function resumen() {
    let valorFinal = (cantidadTickets.value) * valorTicket;
        
    if(categoriasDesc.value === "EstudianteDesc"){
        valorFinal = valorFinal - (80/100 * valorFinal);
    }else if(categoriasDesc.value == "TraineeDesc"){
        valorFinal = valorFinal - (50/100 * valorFinal);
    }else if(categoriasDesc.value == "JuniorDesc"){
        valorFinal = valorFinal - (15/100 * valorFinal);
    }

    
    totalPago.innerHTML =  `Total a Pagar: $ ${valorFinal}`;
}

function borrar(){
    totalPago.innerHTML = "Total a Pagar: $";
    cantidadTickets.value = "";
}