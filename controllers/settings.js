const asyncHanlder = require("../middleware/async");
const db = require("../db/db");
const { getPlayerSettings } = require("../db/queries");

let data = {};

exports.getData = async (req, res, next) => {
  try {
    let results = await getPlayerSettings(req.params.player);
    res.json(results);
  } catch (e) {
    console.log(e);
  }
};
