const AWS = require("aws-sdk");
const db = require("../models");

const s3 = new AWS.S3({
  accessKeyId: process.env.s3key,
  secretAccessKey: process.env.s3secret
});

module.exports = (app) => {

  app.get("/", (req, res) => {
    db.Item.findAll({}).then((dbItems) => {
      console.log("user",req.user);
      res.render("index", { items: dbItems });
      
    });
  });

  app.get("/sell", (req, res) => {
    res.render("sell", res);
  });


  app.get("/signup", (req, res) => {
    res.render("signup", res);
  });

  //Search items by item name
  app.get("/search", (req, res) => {
    console.log(req.query.itemname);

    const itemName = req.query.itemname;

    db.Item.findAll({
      where: { itemName: itemName}
    })
      .then((dbItems) => {
        res.render("searchrender",{items: dbItems});
      })
      .catch(err => console.log(err));

    
  });
  app.get("/cat", (req, res) => {
    console.log(req.query.category);

    const category = req.query.category;

    db.Item.findAll({
      where: { category: category}
    })
      .then((dbItems) => {
        res.render("catSearch",{items: dbItems});
      })
      .catch(err => console.log(err));

    
  });

  // sell items/ adds items to database and displays errors to page
  app.post("/sell", (req, res) => {
    const { category, itemName, replica, descript, highestBid } = req.body;
    const errors = [];

    if(!category){
      errors.push({ text: "Please add a category"});
    }
    if(!itemName){
      errors.push({ text: "Please add a Item Name"});
    }
    if(!replica){
      errors.push({ text: "Please add Replica or Authentic"});
    }
    if(!descript){
      errors.push({ text: "Please add a Description"});
    }
    if(!highestBid){
      errors.push({ text: "Please add a Starting Price"});
    }

    if(errors.length > 0) {
      res.render("sell",{ 
        errors,
        category, 
        itemName,  
        descript, 
        highestBid 

      });
    } else{
      db.Item.create({
        category,
        itemName,
        replica,
        descript,
        highestBid
      })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err));
    }

    
  });    
  
  //};

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
