const objeto = {
    a: 10,
    get b() {
      return this.a;
    },
    set b(x) {
      this.a = x;
    }
  };
  console.log(objeto.b); // leo b como si fuera una propiedad y retorna 10
objeto.b = 20; // modifico b como si fuera una propiedad
console.log(objeto.a) // ahora a es 20