const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'It is the base of the multiplication table'
    })
    .option('h', {
        alias: 'until',
        type: 'number',
        default: 10,
        describe: 'This is the number up to where you want the table'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Show table in console'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'The base has to be a number'
        }
        return true;
    })
    .argv;


module.exports = argv;