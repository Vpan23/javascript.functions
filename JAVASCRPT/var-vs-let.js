var numero = 4;

function ejemplo(){
    var numero = 10;
    // console.log(numero)
    let numero2 = 2;

    {
        var numero = 100;
        let numero2 = 200;
    }
    console.log(numero)
    console.log(numero2)
}
ejemplo();