(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvanger extends Avenger {
    flying;

    constructor(name = "No name", power = 0) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9000);
  const falcon = new FlyingAvanger("Falcon", 50);

  console.log(falcon);
  console.log(hulk);
})();
