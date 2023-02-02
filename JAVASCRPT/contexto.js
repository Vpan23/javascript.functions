let auto = {
    modelo: 'Modelo 3',
    year: 2021,
    marca: 'Tesla',
    info: function(){
        return 'Este es un auto ' + this.marca
        + ', ' + this.modelo + ' del year ' + this.year;
     }
}
console.log(auto.marca);
console.log(auto.info());