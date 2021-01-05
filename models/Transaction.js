const {Schema, model, Types} = require("mongoose");

const transactionSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    amount: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: "User"
    }
});

module.exports = model("Transaction", transactionSchema);