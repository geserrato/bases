"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["speed", "time travel"],
    };
    let superman = {
        name: "Clark Kent",
        age: 500,
        powers: ["super strength"],
        getName() {
            return this.name;
        },
    };
})();
(function () {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            throw new Error("Method not implemented.");
        }
    }
})();
(() => {
    const client = {
        name: "Gerardo",
        age: 33,
        address: {
            id: 125,
            zip: "kerr",
            city: "Ottawa",
        },
        getFullAdress(id) { },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map