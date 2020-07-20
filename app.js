
const yargs =require('yargs')
const noted = require('./noted.js')
const { removeNotes } = require('./noted.js')

yargs.command ({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: String
        },
        body: {
            describe:'body',
            demandOption: true,
            type: String
        }

    },
    handler(argv){
        noted.addnotes(argv.title,argv.body)
        // console.log('Printing error')
        // console.log(argv.title)
        // console.log(argv.body)
    }

})
yargs.command({
    command: 'remove',
    describe: 'Removing the notes',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        noted.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler(){
        noted.ListNotes()        
    }
})
yargs.command({
    command: 'read',
    describe: 'showing the notes',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        noted.readnotes(argv.title)
    }
})
// try {
    yargs.parse()
// } catch (error) {
//     console.log("Try again...")
// }


// console.log(yargs.argv)