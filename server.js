const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionstring =
  "mongodb+srv://jurabek:Hostinguz4891@cluster0.3lqcuhg.mongodb.net/";

mongodb.connect(
  connectionstring,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDb conetion succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(3000, function () {
        console.log(`The server is running successfully on port: ${PORT}}`);
      });
    }
  }
);
