function info(){
    console.log(this)
}

let auto = {
    modelo: 'Q7',
    year: 2021,
    marca: 'Audi',
    info: info
};
//bind, call, apply

info.auto.bind(auto);