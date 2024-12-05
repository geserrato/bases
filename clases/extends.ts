(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      //   console.log("Constructor Avenger llamado");
    }

    // Si se quiere sobreescribir un método de la clase padre, se debe usar la palabra reservada 'protected'
    // Si se quiere que el método sea privado, se debe usar la palabra reservada 'private'
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      // El super debe ser llamado lo antes posible
      super(name, realName);
      //   console.log(`${name} es mutante: ${isMutant}`);
    }

    getFullNameFromXmen() {
      //   console.log(super.getFullName());
    }

    // Que es un get y un ser ?
    // Un get es un método que se comporta como una propiedad por defecto debe retornar algo
    // Un set es un método que se comporta como un setter

    get fullName() {
      return `${this.name} ${this.realName}`;
    }

    // un setter no retorna nada
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe tener al menos 3 caracteres");
      }

      this.name = name;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  //   console.log(wolverine.fullName);
  wolverine.fullName = "Ciclope";

  //   console.log(wolverine.fullName);
  //   wolverine.getFullNameFromXmen();
})();
