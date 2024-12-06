(() => {
  // diferencias entre type e interface
  // type cannot be extended or implemented
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["speed", "time travel"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 500,
    powers: ["super strength"],
    getName() {
      return this.name;
    },
  };
})();
