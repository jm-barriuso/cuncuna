const { Review } = require("../models/review.model")

module.exports.findAllReviews = (req,res) => {
    Review.find()
        .then((reviews)=> res.json({ reviews: reviews}))
        .catch((err) => res.json({ message: "Something went wrong", error:err}));
}

module.exports.findReview = (req,res) =>{
    Review.findOne({_id:req.params.id})
        .then(review => res.json({ review: review}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.createReview = (req,res) =>{
    Review.create(req.body)
        .then(newReview => res.json({ review: newReview}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.updateReview = (req,res) =>{
    Review.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
        .then(review => res.json({ review: review}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.deleteReview = (req,res) =>{
    Review.deleteOne({_id:req.params.id})
        .then(review => res.json({ review: review}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};
