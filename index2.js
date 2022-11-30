//importing packages

const date_fns = require('date-fns')

const uuid = require('uuid')

const fs = require('fs')




let uid = uuid.v4()

let datee = date_fns.format(new Date(), 'yyyy/mm/dd\tHH:mm:ss')



const readline = require('readline').createInterface({

    input: process.stdin,

    output: process.stdout

});

readline.question('Enter your message: ', msg => {

    readline.close();

    writelogtoFile(uid, datee, msg)

});



const writelogtoFile = (uid, datee, msg) => {

    fs.appendFile('log.txt', ('uid:' + uid + '\tdate:' + datee + '\tmessage:' + msg), (err) => {

        if (err) {

            console.log('ERROR')

        }

    });

}