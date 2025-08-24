import express from "express";
import dotenv from "dotenv";

const server = express();
dotenv.config()
const port = process.env.PORT || 3500




const cars = [
  { name: "BMW", country: "Germany", year: 2022, body_type: "sedan" },
  { name: "Mercedes-Benz", country: "Germany", year: 2023, body_type: "suv" },
  { name: "Audi", country: "Germany", year: 2021, body_type: "coupe" },
  {
    name: "Volkswagen",
    country: "Germany",
    year: 2022,
    body_type: "hatchback",
  },
  { name: "Ford", country: "USA", year: 2023, body_type: "truck" },
  { name: "Chevrolet", country: "USA", year: 2022, body_type: "suv" },
  { name: "Tesla", country: "USA", year: 2024, body_type: "sedan" },
  { name: "Toyota", country: "Japan", year: 2023, body_type: "sedan" },
  { name: "Honda", country: "Japan", year: 2022, body_type: "hatchback" },
  { name: "Nissan", country: "Japan", year: 2021, body_type: "suv" },
  { name: "Mazda", country: "Japan", year: 2023, body_type: "sedan" },
  { name: "Hyundai", country: "South Korea", year: 2022, body_type: "suv" },
  { name: "Kia", country: "South Korea", year: 2023, body_type: "sedan" },
  { name: "Volvo", country: "Sweden", year: 2022, body_type: "wagon" },
  { name: "Porsche", country: "Germany", year: 2024, body_type: "sports car" },
  { name: "Lexus", country: "Japan", year: 2023, body_type: "sedan" },
  { name: "Jeep", country: "USA", year: 2022, body_type: "suv" },
  { name: "Land Rover", country: "UK", year: 2023, body_type: "suv" },
  { name: "Ferrari", country: "Italy", year: 2024, body_type: "sports car" },
  {
    name: "Lamborghini",
    country: "Italy",
    year: 2023,
    body_type: "sports car",
  },
];

server.use(express.json());

server.use((req, res, next) => {
  console.log(` ${req.method} : ${req.url} `);
  if (req.method === "POST")
    return res.status(405).send("POST is disabled here");

  next();
});

server.get("/", (req, res) => {
  res.send("this a main rout");
});

server.get("/car", (req, res) => {
  const { query } = req;

  if (Object.keys(query).length === 0) {
    return res.json(cars);
  }

  const filteredCars = cars.filter((car) => {
    return Object.entries(query).every(([key, value]) => {
      const carValue = String(car[key]).toLowerCase();
      return carValue.includes(value.toLowerCase());
    });
  });

  if (filteredCars.length > 0) {
    return res.json(filteredCars);
  }

  return res
    .status(404)
    .json({ message: "❌ No cars found matching the criteria" });
});

server.post("/car", (req, res) => {
  console.log();
});

server.get("/car/:carname", (req, res) => {
  const { carname } = req.params;

  const find = cars.find(({ name }) => name === carname.toUpperCase());
  console.log(find);

  if (!find) return res.status(404).json({ masseag: "not found 404❌" });

  res.status(200).json(find);
});

server.use((req, res) => {
  res.status(404).send("❌ Page not found");
});

server.listen(port, () => {
  console.log(`server run in port ${port}`);
});
