const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({
  dest: "uploads/"
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // =========================> this will handle application/json body

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    return res.end();
  }
  next();
});
var router = express.Router();
router.post("/createComplaint", (req, res) => {
  debugger;
  console.log(JSON.stringify(req.body));   // =========================> without line#11, this will be empty;
  res.json({
    code: 0
  });
});
router.post("/upload", upload.single("bochenFile"), function(req, res) {  // multer is used to handle formdata
  debugger;
  console.log(req.body.referenceNumber);
  console.log(req.file); /* req.file is the bochenFile in request */
});
app.use("/", router);

app.use((err, req, res, next) => {
  console.error("this is the invalid field   -> ", err.field);
  res.status(500).json({
    error: `invalid field -> ${err.field}`
  });
});

const port = process.env.PORT || 3001;
app.listen(port);
console.log("sever is listening on http://localhost:" + port);
