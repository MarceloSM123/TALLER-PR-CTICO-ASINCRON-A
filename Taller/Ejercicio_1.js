
// EJERCICIO 1: Simulador de Retiro de Cajero Automático (ATM)


const retirarDinero = (monto) => {
    return new Promise((resolve, reject) => {
        const saldoDisponible = 500;
        
        setTimeout(() => {
            if (monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
            } else {
                reject(`Fondos insuficientes. Límite de retiro: $${saldoDisponible}`);
            }
        }, 1500); 
    });
};


// CASO EXITOSO (monto menor o igual a $500)
console.log("\n Caso 1: Retiro de $200");
retirarDinero(200)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

// CASO FALLIDO (monto mayor a $500)
console.log("\n Caso 2: Retiro de $600");
retirarDinero(600)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });
