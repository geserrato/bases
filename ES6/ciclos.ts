(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armor suit",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const hulk: Avenger = {
    name: "Hulk",
    weapon: "Strength",
  };

  const avengers: Avenger[] = [ironman, thor, hulk];

  for (const avenger of avengers) {
    const { name, weapon } = avenger;
    console.log(name, weapon);
    console.log(avenger);
  }
})();
