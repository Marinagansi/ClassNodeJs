const dateFns=require('date-fns')
const uuid=require('uuid').v4


console.log(new Date())
console.log(dateFns.format(new Date(), 'yyyy/MM/dd\tHH:mm:ss'))


console.log(uuid.v4) 
console.log('hh')

//import from logger.js
const logger = require('./logger')
logger.log('Test test')
