require('dotenv').config()


const { readInput, inquirerMenu, pause, listPlaces } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();
        
        switch( opt ) {

            case 1:
                // Mostrar mensaje
                const term = await readInput('City: ');
                
                // Buscar los lugares
                const places = await busquedas.city( term );
                
                // Seleccionar el lugar
                const id = await listPlaces(places);
                if ( id === '0' ) continue;

                const placeSel = places.find( l => l.id === id );

                // Guardar en DB
                busquedas.addHistory( placeSel.name );

                // Clima
                const weather = await busquedas.weatherPlace(placeSel.lat, lugarSel.lng );

                // Mostrar resultados
                console.clear();
                console.log('\nCity information:\n'.green);
                console.log('city:', placedSel.name.green );
                console.log('Lat:', placesSel.lat );
                console.log('Lng:', placesSel.lng );
                console.log('Temperature:', weather.temp );
                console.log('Mínimum:', weather.min );
                console.log('Maximum:', weatjer.max );
                console.log('How is the weather?:', weather.desc.green );

            break;


            case 2:
                 busquedas.historyCapitalized.forEach( (place, i) =>  {
                     const idx = `${ i + 1 }.`.green;
                     console.log( `${ idx } ${ place } ` );
                 })

            break;

        }



        if ( opt !== 0 ) await pause();

    } while ( opt !== 0 )



}



main();