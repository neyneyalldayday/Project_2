const db = require("../models");
//const Items = require("../models/Items");
module.exports = (app) => {

  app.get("/", (req, res) => {
    db.Item.findAll({}).then((dbItems) => {
      res.render("index", { items: dbItems });
    });
  });

  app.get("/sell", (req, res) => {
    res.render("sell", res);
  });


  app.get("/signup", (req, res) => {
    res.render("signup", res);
  });

  app.post("/sell", (req, res) => {
    const { category, itemName, replica, descript, highestBid } = req.body;

    db.Item.create({
      category,
      itemName,
      replica,
      descript,
      highestBid
    })
      .then(() => res.redirect("/"))
      .catch(err => console.log(err));
  });

  app.get("/search", (req, res) => {
    const { itemName, replica } = req.body;

    db.Item.findAll({
      itemName,
      replica,
    })
      .then(() => res.redirect("/"))
      .catch(err => console.log(err));
  });

  // Image uploader
  // post route to handle file upload
  app.post("/sell", async (req, res) => {
    // Sending error back if no file was uploaded
    if (!req.files) {
      return res.status(400).send("No file was uploaded.");
    }

    // references the file uploaded from the input field with the 'name' attribute specified following 'req.files.'
    const uploadFile = req.files.upload;

    // setting up S3 upload parameters
    const params = {
      Body: uploadFile.data, // data from uploaded file
      Bucket: process.env.s3bucket, // bucket name
      Key: `${Date.now()}-${uploadFile.name}` // file name to use for S3 bucket
    };

    // uploading file to the bucket
    s3.upload(params, (err, response) => {
      if (err) {
        throw err;
      }

      console.log(`File uploaded successfully at ${response.Location}`);
      // terminating the req/res cycle by sending a JSON object with the uploaded
      // file path AND any date sent along with the upload... this is where you 
      // could write to your db if needed, now that you have the url path for the
      // newly uploaded file!
      res.json({ url: response.Location, data: req.body });
    });
  });

}; 
