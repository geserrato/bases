(() => {
  // Para que sirve una clase abstracta ?
  // Sirven para crear otras clases o asegurarse que otras clases tengan ciertas características
  // Las clases abstractas no se pueden instanciar, solo se pueden heredar
  // Tambien nos puede servir para definir un contrato
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    saveTheWorld() {
      console.log("Saved world!");
    }
  }

  class Villian extends Mutante {
    conquerTheWorld() {
      console.log("Conquered world!");
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");

  //   console.log(wolverine);
  //   wolverine.saveTheWorld();
  //   console.log(magneto);
  //   magneto.conquerTheWorld();

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  //   printName(wolverine);
  //   printName(magneto);
})();
