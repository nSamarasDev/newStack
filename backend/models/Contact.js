const mongoose = require("mongoose");
const slugify = require("slugify");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: [500, "Description cannot be longer than 500 characters"],
  },
  slug: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create slug from email
ContactSchema.pre("save", function (next) {
  this.slug = slugify(this.email, { lowerr: true });
  next();
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
