const ReviewController = require("../controllers/review.controller");


module.exports = app => {

    //Review route
    app.get("/api/reviews",ReviewController.findAllReviews);
    app.get("/api/reviews/:id",ReviewController.findReview);
    app.post("/api/reviews/new",ReviewController.createReview);
    app.put("/api/reviews/update/:id",ReviewController.updateReview);
    app.delete("/api/reviews/delete/:id",ReviewController.deleteReview);


    //User Routes

};