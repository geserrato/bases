(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatisSignal = () => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatisSignal);


    const heroName = returnName();

})()