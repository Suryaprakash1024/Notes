const yargs = require('yargs')
const chalk = require('chalk')
const fs = require('fs')
const mynotes = () => {
    return 'My notes'
}

const getnotes = () => {
        return 'Getting notes'
}

const readnotes = (title) => {
    const notes = loadnotes()
    const duplicate1 = notes.find((note)=>note.title === title )
    if (duplicate1===0)
    {
        console.log('Cant find the title')
    }
    else{
        console.log(duplicate1.body)
    }
}
const addnotes = (title, body)=> {
        const notes = loadnotes()
        // console.log('noted title: ',title)
        const duplicate = notes.filter((note)=>note.title === title
        // {
        //     return note.title === title
        )
        
        if (duplicate.length===0)
        {
            notes.push({
            title: title,
            body: body
            })
            saveNotes(notes)
            console.log(chalk.green.inverse('New note added ..!'))
        }
        else 
        {
            console.log(chalk.red.inverse(duplicate,'::..Title is present already'))
        }
        
}

const removeNotes = (title) =>{
        const notes = loadnotes()
        
        const notestokeep = notes.filter((note)=>note.title!==title)

        if (notes.length>notestokeep.length)
        {
            console.log(chalk.green.inverse('Note removed ..!'))
        }
        else 
        {
            console.log(chalk.red.inverse('No such note found../'))
        }
        saveNotes(notestokeep)
    }

const ListNotes = ()=> {
        const notes = loadnotes()
        notes.forEach((note) => 
        {
            console.log(note.title)
        }
        )
}

const saveNotes = (notes)=> {
        const datajson = JSON.stringify(notes)
        // console.log(datajson)
        fs.writeFileSync('notes.json',datajson)
}



const loadnotes = ()=>{
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const data = dataBuffer.toString()
    return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }
}

module.exports = {
    getnotes,
    addnotes,
    removeNotes,
    ListNotes,
    readnotes
}