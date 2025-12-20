import { useEffect, useState } from "react";

export function Products({ fetchProducts }) {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchProducts()
      .then((items) => {
        setProducts(items);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [fetchProducts]);

  if (status === "loading") return <p role="status" aria-live="polite">Loading products...</p>;

  if (status === "error") return <p role="alert" aria-live="assertive">Failed to load products</p>;

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
