"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 20,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'London'
        },
        getFullAddress(id) {
            return 'Hola';
        }
    };
    const client2 = {
        name: 'Sebastian',
        age: 30,
        address: {
            city: 'Ottawa',
            id: 121,
            zip: 'CND 123'
        },
        getFullAddress(id) {
            return 'Hola';
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map