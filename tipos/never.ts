(() => {

    // never -> meaning function shouldn't finish good
    const error = (message: string): never => {
        throw new Error(message);
    }

    error('Help');
    console.log('Hola mundo!');
})()