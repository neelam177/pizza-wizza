import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    enum: ["Veg", "Non-Veg"],
  },
  description: String,
  img: String,
  price: {
    type: Map,
    of: String,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Food || mongoose.model("Food", foodSchema);
