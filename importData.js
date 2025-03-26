const sanityClient = require("@sanity/client");
const fetch = require("node-fetch");

const client = sanityClient({
  projectId: "your_project_id",
  dataset: "production",
  useCdn: false,
  token: "sk0d60mLz7JAFmnU5juO5OfhMWRE19cInBwcGrXb34qGc7V6quyCnwT0jVDbbGPjBQFU16uIvdjE85YhqqeRrgV7veSbEUo8NsmHhRzWVL7RN4W80mYxNDDKs6O7aihQyQF1BORC6ODyQTbDT7Xg1PwzJ0K77Zbr0xG2mDIN0jjIQpfJpBdE", 
});

async function migrateData() {
  const apiUrl = "https://template6-six.vercel.app/api/products"; 
  const response = await fetch(apiUrl);
  const products = await response.json();

  for (const product of products) {
    await client.create({
      _type: "product",
      title: product.title,
      price: product.price,
      category: product.category || "Uncategorized",
      image: {
        _type: "image",
        asset: {
          _ref: product.image, 
        },
      },
    });
  }
  console.log("✅ Data migration completed!");
}

migrateData();
