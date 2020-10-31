const db = require("../models")

module.exports = function(app) {
    const query = {};
    if (req.query.Item.id) {
        query.items = req.query.sell;
    }
    db.Sell.findAll({
        where: query
    }).then(function(dbSell) {
     res.json(dbSell);
    });
}