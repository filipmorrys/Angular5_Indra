let oPrueba = {
    precio : 12,
    iva : 1.16
};

oPrueba.calcularIvaAsync = function() {
    setTimeout(() => {
        let precioFinal = this.precio * this.iva;
        console.log(`
            Usando una funcion clasica:
            El precio final es ${precioFinal}
        `);
    })
}

oPrueba.calcularIvaAsync();