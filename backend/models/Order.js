const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    products: [
      {
        value: {
          type: String,
        },
        label: {
          type: String,
        },
        price: {
          type: Number,
        },
      },
    ],
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    zipCode: { type: Number, require: true },
    apartment: { type: String },
    telephones: { type: Number },
    email: { type: String, require: true },
    address: { type: Object, require: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Order', OrderSchema);
