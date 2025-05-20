const mongoose = require("mongoose");

const categorySchema = new mongoose.categorySchema({
    name:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },

});
module.exports = mongoose.model("Category", categorySchema);