(() => {
    const numbers = [1, 2, '3', 4, 5];
    numbers.push(11);
    console.log(numbers);

    const villians = ['OmegaRed', 'Dormammu', 'Duende verde'];

    villians.forEach(v => console.log(v.toUpperCase()));

    numbers.forEach(v => console.log(v));
})()