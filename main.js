"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        saveTheWorld() {
            console.log("Saved world!");
        }
    }
    class Villian extends Mutante {
        conquerTheWorld() {
            console.log("Conquered world!");
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
        console.log(character.name);
    };
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameFromXmen() {
        }
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe tener al menos 3 caracteres");
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Ciclope";
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis1);
    console.log(apocalipsis2);
})();
//# sourceMappingURL=main.js.map