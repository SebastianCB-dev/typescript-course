(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }
    // Extends is to between classes
    // Implements is used within Interfaces
    class Mutant implements Xmen, Human {        
        public age: number;
        public name: string;
        public realName: string;

        public mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }


})()