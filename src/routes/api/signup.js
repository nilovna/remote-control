const router = require("express").Router();
const user = require("../../models/user");

router.post("/", async (req, res) => {
  // post request

  const createUser = await user.createUser(req.body);
  createUser !== null ? res.send(createUser) : res.send("ok");
});

module.exports = router;
