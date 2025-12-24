const mongoose = require("mongoose");
const categoryModel = require("./models/categories");
const productModel = require("./models/products");
require("dotenv").config();

const connectionString = process.env.DATABASE;

if (!connectionString) {
  console.error("DATABASE connection string missing in .env");
  process.exit(1);
}

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(async () => {
    console.log("Database connected for seeding");

    try {
      // 1. Create Categories
      const categories = [
        { cName: "Kidney", cDescription: "Healthy kidneys for transplant", cStatus: "Active", cImage: "kidney.png" },
        { cName: "Liver", cDescription: "Liver tissues and whole organs", cStatus: "Active", cImage: "liver.png" },
        { cName: "Heart", cDescription: "Human hearts", cStatus: "Active", cImage: "heart.png" },
        { cName: "Lungs", cDescription: "Healthy lungs", cStatus: "Active", cImage: "lungs.png" },
        { cName: "Eyes", cDescription: "Corneas and eye tissues", cStatus: "Active", cImage: "eye.png" },
      ];

      let createdCategories = [];
      for (const cat of categories) {
        let existing = await categoryModel.findOne({ cName: cat.cName });
        if (!existing) {
          const newCat = await new categoryModel(cat).save();
          console.log(`Created Category: ${newCat.cName}`);
          createdCategories.push(newCat);
        } else {
          console.log(`Category exists: ${existing.cName}`);
          createdCategories.push(existing);
        }
      }

      // 2. Create Products (Organs)
      // Map categories for easier access
      const catMap = {};
      createdCategories.forEach(c => catMap[c.cName] = c._id);

      const products = [
        {
          pName: "Left Kidney (Type O+)",
          pDescription: "Healthy left kidney from 25yo donor. O+ blood type.",
          pPrice: 50000,
          pQuantity: 1,
          pCategory: catMap["Kidney"],
          pImages: ["kidney1.jpg"],
          pStatus: "Active"
        },
        {
          pName: "Right Kidney (Type A-)",
          pDescription: "Right kidney, fully tested. A- blood type.",
          pPrice: 45000,
          pQuantity: 1,
          pCategory: catMap["Kidney"],
          pImages: ["kidney2.jpg"],
          pStatus: "Active"
        },
        {
          pName: "Liver Lobe (Type AB+)",
          pDescription: "Partial liver transplant available. AB+.",
          pPrice: 80000,
          pQuantity: 2,
          pCategory: catMap["Liver"],
          pImages: ["liver1.jpg"],
          pStatus: "Active"
        },
        {
          pName: "Heart (Type B+)",
          pDescription: "Healthy heart, immediate availability. B+.",
          pPrice: 150000,
          pQuantity: 1,
          pCategory: catMap["Heart"],
          pImages: ["heart1.jpg"],
          pStatus: "Active"
        },
        {
          pName: "Cornea Pair",
          pDescription: "Set of corneas. 20/20 vision donor.",
          pPrice: 15000,
          pQuantity: 5,
          pCategory: catMap["Eyes"],
          pImages: ["eye1.jpg"],
          pStatus: "Active"
        },
        {
          pName: "Healthy Lungs (Pair)",
          pDescription: "Full set of healthy lungs. Non-smoker donor.",
          pPrice: 120000,
          pQuantity: 1,
          pCategory: catMap["Lungs"],
          pImages: ["lungs1.jpg"],
          pStatus: "Active"
        }
      ];

      for (const prod of products) {
        if (!prod.pCategory) continue; 
        
        let existing = await productModel.findOne({ pName: prod.pName });
        if (!existing) {
          await new productModel(prod).save();
          console.log(`Created Product: ${prod.pName}`);
        } else {
            console.log(`Product exists: ${prod.pName}`);
        }
      }

      console.log("Seeding completed successfully");
      process.exit(0);

    } catch (err) {
      console.error("Seeding error:", err);
      process.exit(1);
    }
  })
  .catch((err) => {
    console.log("Database Connection Error", err);
    process.exit(1);
  });
