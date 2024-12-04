(() => {
    const hero: [string, number, boolean] = ['Dr Strange', 100, false];
    hero[1] = 50;
    hero[0] = 'Ironman';
    hero[2] = true;

    console.log(hero);
})()