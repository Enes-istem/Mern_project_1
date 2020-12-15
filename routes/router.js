const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");

// base url: /api/profile

/**
 * @route   GET /api/profile
 * @desc    Profile endpoint
 * @access  Private
 */
router.get("/", auth, ProfileController.getProfileInfo);

/**
 * @route   PUT /api/profile/update
 * @desc    Update Profile endpoint
 * @access  Private
 */
router.get("/update", auth, ProfileController.updateProfileInfo);

module.exports = router;

















// const express = require("express");

// const router = express.Router()
// const AuthRouter = require("./AuthRouter")
// const ProfileRouter = require("./ProfileRouter")
// const BookRouter = require("./BookRouter")



// router.use("/auth", AuthRouter)

// router.use("/profile", ProfileRouter)


// router.use("/book", BookRouter)





// module.exports = router