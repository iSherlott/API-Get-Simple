const db = require("../db/db.json");
const { Brazil } = db;

exports.find = (req, res) => {
  try {
    var obj = {};
    for (let value of Brazil) {
      if (value.localidade == req.query.locality) {
        obj = value;
      }
    }

    if (Object.keys(obj).length != 0) return res.status(200).json(obj);
    else return res.status(204).send();
  } catch (error) {
    res.status(500).json(`Server Error: ${error}`);
  }
};
