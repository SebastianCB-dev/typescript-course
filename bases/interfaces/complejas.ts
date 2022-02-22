(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id  : number,
        zip : string,
        city: string
    }
    const client: Client = {
        name: 'Fernando',
        age: 20,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'London'        
        },
        getFullAddress(id: string) {
            return 'Hola';
        }
    };

    const client2: Client = {
        name: 'Sebastian',
        age: 30,
        address: {
            city: 'Ottawa',
            id: 121,
            zip: 'CND 123'
        },
        getFullAddress(id: string) {
            return 'Hola';
        }
    }



})()