// File Manager using Node.js fs module
// Usage:
// node fileManager.js create
// node fileManager.js read
// node fileManager.js update
// node fileManager.js delete

const fs = require("fs");

const fileName = "test.txt";
const operation = process.argv[2];
const content = process.argv.slice(3).join(" ");

console.log("File Manager Started");
console.log("Operation:", operation);

function createFile() {
    const data = content || "This is the initial content of test.txt.";

    fs.writeFile(fileName, data, "utf8", (err) => {
        if (err) {
            console.log("Error creating file:", err.message);
            return;
        }

        console.log("File created successfully.");
    });
}

function readFile() {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.log("Error: File does not exist.");
            } else {
                console.log("Error reading file:", err.message);
            }
            return;
        }

        console.log("File Content:");
        console.log(data);
    });
}

function updateFile() {
    const data = content || "Updated content of test.txt.";

    fs.appendFile(fileName, "\n" + data, "utf8", (err) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.log("Error: File does not exist. Create it first.");
            } else {
                console.log("Error updating file:", err.message);
            }
            return;
        }

        console.log("File updated successfully.");
    });
}

function deleteFile() {
    fs.unlink(fileName, (err) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.log("Error: File does not exist.");
            } else {
                console.log("Error deleting file:", err.message);
            }
            return;
        }

        console.log("File deleted successfully.");
    });
}

switch (operation) {
    case "create":
        createFile();
        break;

    case "read":
        readFile();
        break;

    case "update":
        updateFile();
        break;

    case "delete":
        deleteFile();
        break;

    default:
        console.log("Usage:");
        console.log("node fileManager.js create [content]");
        console.log("node fileManager.js read");
        console.log("node fileManager.js update [content]");
        console.log("node fileManager.js delete");
}
