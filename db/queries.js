const db = require("./db");

exports.getPlayerSettings = id => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT nickname,bio,college_email,discord,picture,collegiate_hub_invite from users_profile where nickname = ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
