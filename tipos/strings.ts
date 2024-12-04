(() => {
    const batman: string = 'batman';
    const linternaVerde: string = 'Linterna verde';
    const volcanNegro: string = `Héro: Volcan negro`;

    const abc = 123;

    console.log(`I'm ${batman} ${abc.toString()}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No esta presente');
})()