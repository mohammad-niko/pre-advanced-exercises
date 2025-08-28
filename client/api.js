
async function get() {
    
    const data = await axios("http://localhost:5000/products")
    console.log(data);
}
// get()