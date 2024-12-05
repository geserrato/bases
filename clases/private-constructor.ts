(() => {
  /**
   * Un constructor privado en TypeScript se utiliza para restringir la creación de instancias de una clase desde fuera de la misma.
   * Esto es útil en varios patrones de diseño, como el patrón Singleton, donde se desea asegurar que solo exista una única instancia de la clase.
   */
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
      }
      return Apocalipsis.instance;
    }
  }
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();

  console.log(apocalipsis1);
  console.log(apocalipsis2);
})();
