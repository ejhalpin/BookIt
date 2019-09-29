const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//define routes
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//set up socket.io
const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("connection lost");
  });
  socket.on("visitor", msg => {
    io.emit("visitor", msg);
  });
  socket.on("delete", msg => {
    io.emit("delete", msg);
  });
  socket.on("saved", msg => {
    io.emit("saved", msg);
  });
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
