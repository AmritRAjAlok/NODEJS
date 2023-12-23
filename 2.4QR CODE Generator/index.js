import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "type your URL",
            name: "URL",
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr.png'));
        fs.writeFile("qr.txt", url, err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("File written successfully.");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });