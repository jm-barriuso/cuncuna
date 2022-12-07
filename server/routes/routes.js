const ReviewController = require("../controllers/review.controller");
const UserController = require("../controllers/user.controller");
const authenticate = require("../config/authenticate")


module.exports = app => {

    //Review route
    app.get("/api/reviews",ReviewController.findAllReviews);
    app.get("/api/reviews/:id",ReviewController.findReview);
    app.post("/api/reviews/new",ReviewController.createReview);
    app.put("/api/reviews/update/:id",ReviewController.updateReview);
    app.delete("/api/reviews/delete/:id",ReviewController.deleteReview);


    //User Routes
    app.post("/api/register",UserController.Register);
    app.post("/api/login",UserController.Login);
    app.post("/api/logout",UserController.Logout);

    //ENDPOINTS QUE NECESITAN AUTENTICACION
    app.get("/api/users",authenticate, UserController.getAll);
    app.get("/api/user/:id",authenticate,UserController.getUser)

};