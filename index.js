#!/usr/bin/env node     //Makes node file global
const fs = require("fs");
const table = require("table");
const chalk = require("chalk");
const colors = require("colors");

//Chalk configurations
const error = chalk.bold.red

//Create file system with fs 
//install table and chalk modules for styling (later)

//Create a route-switch case statement for CRUD operations
// Create a file
// Read a file
// Updated a file
// Delete a file
// Show list of Sheets


//User input 
//Variables to gather user input
let argv = process.argv;
let command = argv[3];
let paramC = argv[4];
const log = console.log


log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
//Test to make sure the inputs work

//Switch statement to route CRUD

//HERE IS HOW TO WRITE IN THE COMMAND
// node index.js command -'c,r,a,d' file name

//IF YOU ARE ADDING NOTES INTO A SHEET, TYPE IN THE FOLLOWING COMMAND: node index.js command -'c,r,a,d' file name "Type in Notes here"

switch (command) {
    case 'create':
    case '-c':
        log(chalk.key`Executing ${command}`)
        createSheet(paramC)
        break;
    case 'read':
    case '-r':
        log(`Executing ${command}`)
        readSheet(paramC)
        break;
    case 'add':
    case '-a':
        log(`Executing ${command}`)
        addToSheet(paramC, argv[5])
        break;
    case 'delete':
    case '-d':
        log(`Executing ${command}`)
        deleteSheet(argv[5])
        showSheets()
        break;
    case 'show':
    case '-s':
        log(`Executing ${command}`)
        showSheets()
        break;
    default:
        log(error('Unrecognized Command, ')
            + 'please input the command: node'
            + chalk.yellowBright(' index.js ')
            + 'command' + chalk.green(' -c,-r,-a,-d ')
            + 'fileName');


}






//CRUD functions 

function createSheet(param) {
    fs.writeFile(`./cheatsheets/${param}.txt`, `## ${param} ##`, (err, data) => {
        if (err) {
            log(err)
        } else {
            log(`New file for ${param} created successfully!`)
        }
    });
};

function readSheet(param) {
    fs.readFile(`./cheatSheets/${param}.txt`, 'utf-8', (err, data) => {
        if (err) {
            log(err)
        } else {
            log(data)
        }
    });
};

function addToSheet(fileName, payload) {
    fs.appendFile(`./cheatSheets/${fileName}.txt`, `\n ${payload} \n`, (err, data) => {
        if (err) {
            log(err)
        } else {
            log(`Added ${payload} to cheatsheet`)
        }
    });
};

function showSheets() {
    fs.readdir('./cheatSheets', function (err, items) {

        for (var i = 0; i < items.length; i++) {
            log(`\n ${items[i].split('.')[0]}`);
            log('----------------------------------------')
        }
    });
};

function deleteSheet(fileName) {
    fs.unlink(`./cheatSheets/${fileName}.txt`, (err) => {
        if (err) {
            log(err)
        }
        log(`${fileName}.txt has just been deleted`)
    });
};





