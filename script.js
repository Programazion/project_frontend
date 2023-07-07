console.log("Loading Javascript");

function saveContacto(){


let nombreContacto = document.getElementById("nombre");
let apellidosContacto = document.getElementById("apellidos");
let telefonoContacto = document.getElementById("telefono");
let emailContacto = document.getElementById("email");
let requerimientoContacto = document.getElementById("requerimiento");



let contacto ={
    nombre: nombreContacto.value,
    apellidos: apellidosContacto.value,
    telefono: telefonoContacto.value,
    email: emailContacto.value,
    requerimiento: requerimientoContacto.value
}

console.log(contacto);

let url= "http://localhost:8000/api/respuesta";
let params ={
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(contacto),
}
fetch(url,params).then(response =>{

    console.log(response);

    if (response.status==201){

        alert("Envío exitoso <<Pronto uno de nuestros agentes te contactará>>");
    }else{
    alert("Error en el envío intenta de nuevo");
    }

});  
    return true
}

/* function getContacto(){

let url= 
} */