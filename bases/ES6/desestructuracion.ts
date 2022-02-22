(()=> {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.2121212
    };

    // const { poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( { ironman, ...rest }: Avengers ) => {
        console.log( ironman, rest );
    }

    // printAvenger(avengers);

    const avengersArr: string[] = ['Superman', 'Batman','Flash','Wonder Woman'];

    const [ sup, batman ] = avengersArr;
    //console.log({batman});





})()