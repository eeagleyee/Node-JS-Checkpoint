const fs = require("fs");

// Writing to a file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log('File created with content: "Hello Node"');
});

// Reading from a file
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
