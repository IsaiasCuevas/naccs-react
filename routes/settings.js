const router = require("express").Router();

const { getData, updateSettings } = require("../controllers/settings");

router.route("/:player").get(getData);

module.exports = router;
