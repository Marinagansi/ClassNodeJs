//anaoymous function
//importing packages
const {format} = require('date-fns')
const {v4: uuid} = require('uuid')
const fs = require('fs')
const path = require('path')

//create log item
const createlogItem = (msg) => {
    const dateTime = `${format(new Date(), 'yyyy/mm/dd\tHH:mm:ss')}` 
    return `${uuid()}\t${dateTime}\t${msg}\n`

}

//pure function are easier to test than impure one 

const saveLogItem = (logItem)=> {
    if(!fs.existsSync(path.join(__dirname, 'logs'))){
        fs.mkdir(path.join(__dirname,'logs'), (err) => {
            if (err) console.log(err)
    })

}
    
    fs.appendFile(path.join(__dirname, 'logs', 'event-logs.txt')
    ,logItem, (err) => {
        if (err) console.log(err)
})
}

 saveLogItem(createlogItem('test event'))
//module.exports = {createlogItem, saveLogItem}

const log = (msg) => saveLogItem(createlogItem(msg))
module.exports = {log}
