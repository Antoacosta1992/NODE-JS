const fs = require('fs');
const colors = require('colors');

const createdFile = async( base = 5, listar = false, until = 10 ) => {

    try {

        let exit  = '';
        let console = '';
        
        for( let i = 1; i <= until; i++ ) {
            exit  += `${ base } x ${ i } = ${ base * i }\n`;
            console += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('===================='.green);
            console.log('   Table of:'.green, colors.blue( base ) );
            console.log('===================='.green);

            console.log(console);
        }
        

        fs.writeFileSync( `./exit/table-${ base }.txt`, exit );


        return `table-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }



}

module.exports = {
    createdFile
}