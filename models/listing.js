const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,

    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url: {
            type: String,
            // default:
            //     "https://unsplash.com/photos/silhouette-of-palm-tree-near-body-of-water-during-sunset-CXyz3qljaH8",
            default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
    },

    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;