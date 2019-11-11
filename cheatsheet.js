const fs = require("fs");
const table = require("table");
const chalk = require("chalk");

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
var argv = process.argv;
let command = argv[3];
let paramC = argv[4];

// console.log(argv);
// console.log(command);
//Test to make sure the inputs work

//Switch statement to route CRUD

switch (command) {
    case 'create': 
    case '-c':
        console.log(`Executing ${command}`)
        createSheet(paramC)
    break;
    case 'read': 
    case '-r':
        console.log(`Executing ${command}`)
        readSheet(paramC)
    break;
    case 'add': 
    case '-a':
        console.log(`Executing ${command}`)
        addToSheet(paramC, argv[5])
    break;
    case 'delete': 
    case '-d':
        console.log(`Executing ${command}`)
        deleteSheet(argv[5])
        showSheets()    
    break;
    default:
    console.log('Unrecognized Command');
}






//Switch case CRUD Functions 

function createSheet(param) {
    fs.writeFile(`./cheatsheets/${param}.txt`, `## ${param} ##`, function (err, data)
}

function readSheet(param) {}

function addToSheet(fileName, payload) {}

function showSheets() {}

function deleteSheet(fileName) {}





