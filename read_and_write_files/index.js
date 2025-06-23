const fsPromises = require('fs').promises
const path = require('path')

// fs.readFile('./read_and_write_files/files/starte.txt', 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you!')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseCompleted.txt'))
        
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseCompleted.txt'), 'utf8')
        console.log(newData)
    } catch (error) {
        console.log(error)
    }
}

fileOps()

/*
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err
    console.log("Write completed")

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nSame here!', (err) => {
        if (err) throw err
        console.log("Append completed")
    })
})*/

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error ${err}`)
    process.exit(1)
})