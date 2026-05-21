import { useEffect, useState } from "react";
import { fetchProduct } from "../api/product";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function MenuProduct() {
  const [product, setProduct] = useState("");
  const [productData, setProductData] = useState<{
    name: string;
    price: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const debounceProduct = useDebounce(product, 500);
  useEffect(() => {
    if (debounceProduct) {
      setLoading(true);
      fetchProduct(debounceProduct)
        .then((data) => setProductData(data))
        .finally(() => setLoading(false));
    }
  }, [debounceProduct]);

  return (
    <>
      <h1>Menu Product</h1>
      <input
        type="text"
        placeholder="Search product..."
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {productData && !loading && (
        <>
          <h2>{productData.name}</h2>
          <p>Price: ${productData.price}</p>
        </>
      )}
    </>
  );
}
