const router = require("express").Router();
const searchController = require("../../controllers/searchController");

//Matches with /api/search/title
router.route("/:title").get(searchController.searchByTitle);

router.route("/byAuthor/:author").get(searchController.searchByAuthor);

router.route("/byTitleAndAuthor/:query").get(searchController.searchByTitleAndAuthor);

module.exports = router;
