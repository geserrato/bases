(function () {
  const avenger = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  // Desestructuración de objetos
  const { nick, ironman, vision, activo, poder } = avenger;
  console.log(nick, ironman, vision.toUpperCase(), activo, poder);

  // Desestructuración de arreglos
  const avengers = ["Samuel L. Jackson", "Robert Downey Jr.", "Paul Bettany"];
  const [actor1, actor2, actor3] = avengers;
  console.log(actor1, actor2, actor3);

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };

  printAvenger(avenger);
})();
