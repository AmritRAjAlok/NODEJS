const fs = require("fs");
// fs.writeFile("amrit.txt", "Hello from nodejs!", (err) => {
//   if (err) throw err;
//   else {
//     console.log("file has been Saved");
//   }
// });

fs.readFile("amrit.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
