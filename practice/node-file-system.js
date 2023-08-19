const fs = require("fs");

const content = "Hello, this is some content for the file.";

async function workingWithFileSystem() {
  fs.writeFile("example.txt", content, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return;
    }
    console.log("File created successfully.");
  });

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File content:", data);
  });

  fs.appendFile("example.txt", "test data to append", (err, data) => {

      if (err) {
        console.error("Error updating file:", err);
        return;
      }
    //   fs.unlink("example.txt", (err) => {
    //     if (err) {
    //       console.error("Error deleting file:", err);
    //       return;
    //     }
    //     console.log("File deleted successfully.");
    //   });
      console.log("File updated successfully.");
  });
}

workingWithFileSystem();
