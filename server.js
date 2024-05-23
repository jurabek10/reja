const http = require("http");

const mongodb = require("mongodb");

let db;

const connectionstring =
  "mongodb+srv://jurabek10:Hostinguz4891@cluster0.mkzpkos.mongodb.net/Plan?retryWrites=true&w=majority&appName=Cluster0";

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
