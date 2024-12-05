// (() => {
//   class Avenger {
//     // private name: string;
//     // private team: string;
//     // public realName?: string;
//     // static avgAge: number = 35;
//     // static getAvgAge() {
//     //   return this.name;
//     // }

//     /// Constructor de forma extraña
//     // constructor(name: string, team: string, realName?: string) {
//     //   this.name = name;
//     //   this.team = team;
//     //   this.realName = realName;
//     // }

//     /// Constructor de forma corta
//     constructor(
//       private name: string,
//       private team: string,
//       public realName?: string,
//       avgAge: number = 55
//     ) {}

//     bio() {
//       return `${this.name} (${this.team}) !!!`;
//     }
//   }

/// Las propiedades privadas no se pueden acceder desde fuera de la clase
//   const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
//   console.log(antman);

//   console.log(antman.bio());
//   // console.log(Avenger.getAvgAge());
// })();
