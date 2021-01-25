const figlet = require("figlet");
const inquirer = require("inquirer");
const chalk = require("chalk")
const { addNote, removeNote, listNotes } = require("../utils/notes")

const topLevelQuestion = [
    {type: "list",
    name: "options",
    message: "What wou;d you like to do?",
    choices: ["add", "list", "remove", "exit"]}
]

const addQuestion = [
    {type: 'input', name: 'add', message: "What would you lke to add"}
]

const removeQuestion = [
    {type: 'number', name: 'remove', message: "What would you lke to remove"}
]

const main = () => {
    console.log(chalk.bgRedBright.green(figlet.textSync("Notes App")))
    app() 
};

const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion)
    if (answers.options == "add"){
        const answer = await inquirer.prompt(addQuestion)
        addNote(answer.add)
        console.log(` Added a note ${answer.add}`)
        app()
    }else if (answers.options == "list"){
        listNotes()
        app()
    }else if (answers.options == "remove"){
        listNotes()
        const answer = await inquirer.prompt(removeQuestion)
        removeNote(answer)
        app()
    }else if (answers.options == "exit"){
        console.log("Bye for now")
        
    }else{
        console.log("error")
    }
}

main();