(() => {
    const addNumbers = (a: number, b: number): number => {
        return a + b;
    }
    const greet = (name: string): string => {
        return `Hello ${name}`;
    }
    const saveTheWorld = () => 'El mundo está salvado';

    // let myFunction: Function;
    let myFunction: (y: number, z: number) => number;
    myFunction = addNumbers;
    console.log(myFunction);
})()