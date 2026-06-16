
// EJERCICIO 3: Consulta de Clima Local (Async/Await)


const consultarClima = (ciudad) => {
    return new Promise((resolve) => {
        console.log(`Consultando el clima en ${ciudad}`);
        
        const climas = {
            "Quito": { temperatura: "18°C", condicion: "Nublado", humedad: "65%" },
            "Guayaquil": { temperatura: "32°C", condicion: "Soleado", humedad: "70%" },
            "Cuenca": { temperatura: "15°C", condicion: "Lluvioso", humedad: "80%" },
            "Manta": { temperatura: "28°C", condicion: "Parcialmente nublado", humedad: "75%" }
        };
        
        setTimeout(() => {
            
            if (climas[ciudad]) {
                resolve(climas[ciudad]);
            } else {
                
                resolve({ 
                    temperatura: "22°C", 
                    condicion: "Desconocido", 
                    humedad: "N/A",
                    mensaje: ` No hay datos exactos para ${ciudad}, mostrando información general`
                });
            }
        }, 1500); 
    });
};


const mostrarClima = async (ciudad) => {
    try {

        
        const clima = await consultarClima(ciudad);
        
        console.log(`Ciudad: ${ciudad}`);
        console.log(`Temperatura: ${clima.temperatura}`);
        console.log(`Condición: ${clima.condicion}`);
        console.log(`Humedad: ${clima.humedad || "N/A"}`);
        
        if (clima.mensaje) {
            console.log(` ${clima.mensaje}`);
        }
        
    } catch (error) {
        console.log(`Error al consultar el clima: ${error}`);
    }
};


mostrarClima("Quito");
mostrarClima("Guayaquil");
mostrarClima("Londres"); 

