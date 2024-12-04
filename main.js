"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armor suit",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const hulk = {
        name: "Hulk",
        weapon: "Strength",
    };
    const avengers = [ironman, thor, hulk];
    for (const avenger of avengers) {
        const { name, weapon } = avenger;
        console.log(name, weapon);
        console.log(avenger);
    }
})();
(function () {
    const avenger = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const { nick, ironman, vision, activo, poder } = avenger;
    console.log(nick, ironman, vision.toUpperCase(), activo, poder);
    const avengers = ["Samuel L. Jackson", "Robert Downey Jr.", "Paul Bettany"];
    const [actor1, actor2, actor3] = avengers;
    console.log(actor1, actor2, actor3);
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger(avenger);
})();
(() => {
    const hero = {
        a: 1,
        b: 2,
    };
    hero.b = 100;
})();
//# sourceMappingURL=main.js.map