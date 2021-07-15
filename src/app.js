require("./db/connection");
const { add, list, update , remove } = require("./utils");
const yargs = require("yargs");
const { end } = require("./db/connection");
const command = process.argv[2];
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;

const app = () => {
    if (command === "add") {        
        if(actor) {
            add({ title: title, actor: actor });
        } else {
            add({ title: title })
        }

    } 

    else if (command === "update") {
        if(watched) {
            update({ title: title }, { watched: true });
        } else if (actor) {
          update({ title: title }, { actor: actor });
        }
         console.log("Updated Successfully");
        
             } 
    else if (command === "remove") {
        if (actor) {
            remove({ title: title, actor: actor })
        } else {
            remove({ title: title })
                   }
    }
    else if (command === "list") {
        if (actor) {
            list({ title: title, actor: actor })
        } else {
            list({ title: title })
        }
    };}

app();