let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

let currentId = products.length ? Math.max(...products.map((p) => p.id)) : 0;

const nextId = () => ++currentId;

// Get all products
export function getProducts(req, res) {
  res.json(products);
}

// Get product by ID
export function getProductsWithId(req, res) {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return res.status(404).json({ message: "Product not found ❌" });

  res.json(product);
}

// POST new product
export function postData(req, res) {
  const dataArray = Array.isArray(req.body) ? req.body : [req.body];
  const newProducts = [];


  for(const data of dataArray){
    if (!data.name || isNaN(data.price))
      return res
        .status(400)
        .json({ message: "you should provide name and price(number) ❌" });

    const newProduct = { id: nextId(), ...data };

    products.push(newProduct);
    newProducts.push(newProduct)
  }

  res.json({ message: "Data received and add successfully ✅", newProducts });
}

// Patch Data:
export function patchData(req, res) {
  const { id } = req.params;
  
  const updates = Array.isArray(req.body) ? req.body[0] : req.body;
  const { name, price } = updates;
  const product = products.find((p) => p.id === parseInt(id));
    
  //valideation
  if (!product)
    return res.status(404).json({ message: "product not found ❌" });
  if (!name)
    return res.status(400).json({ message: "you should provide name ❌" });
  if (!price || isNaN(price))
    return res
      .status(400)
      .json({ message: "you should provide price(number) ❌" });

  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  if (productIndex === -1)
    return res.status(404).json({ message: "Product not found ❌" });

  if (name) products[productIndex].name = name;
  if (price) products[productIndex].price = price;

  res.json({
    message: "Product updated successfully ✅",
    product: products[productIndex],
  });
}

// Delete Data
export function deleteData(req, res) {
  const { id } = req.params;

  const product = products.find((p) => p.id === parseInt(id));
  if (!product)
    return res.status(404).json({ message: "product not found ❌" });

  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  products.splice(productIndex, 1);

  res.json({ message: "item deleted successfuly ✅", products });
}
