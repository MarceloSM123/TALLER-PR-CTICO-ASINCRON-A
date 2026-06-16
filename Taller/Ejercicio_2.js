
// EJERCICIO 2: Verificación de Edad para Suscripción

const verificarEdad = (edad) => {
    return new Promise((resolve, reject) => {
        console.log(`Verificando edad: ${edad} años...`);
        
        setTimeout(() => {
            if (edad >= 18) {
                resolve(`Acceso concedido. Bienvenido a la plataforma`);
            } else {
                reject(`Acceso denegado. Registro permitido solo para mayores de edad`);
            }
        }, 1000); 
    });
};



// CASO EXITOSO 
console.log("\n Caso 1: Usuario de 25 años");
verificarEdad(25)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

// CASO FALLIDO 
console.log("\nCaso 2: Usuario de 16 años");
verificarEdad(16)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

