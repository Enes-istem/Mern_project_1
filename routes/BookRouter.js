const express = require("express")
const router = express.Router();
const BookController = require("../controllers/BookController")






router.get("/", BookController.getBookList)


router.get("/details/:id", BookController.getBookDetails)

module.exports = router;