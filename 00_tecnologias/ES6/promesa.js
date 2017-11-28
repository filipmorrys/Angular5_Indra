function msgAfterTimeout(msg, nombre, tiempo) {

    // La funcion devuelve una promesa
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`${msg} Hola ${nombre}`),
            tiempo
        );
    });

}

/* TODO Completar
msgAfterTimeout("", "Pepe, 100")
then(msg) =>
    msgAfterTimeout(msg, "Juan, 200")
    .then(msg) =>


    */