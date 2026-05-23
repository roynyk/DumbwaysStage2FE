export async function fetchProduct(query: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
    );
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari API");
    }
    console.log(response);
    const data = await response.json();
    console.log(data);

    // Karena API DummyJSON mengembalikan array di dalam properti "products",
    // kita bisa mengambil produk pertama [0] agar cocok dengan state di komponen Anda
    if (data.products && data.products.length > 0) {
      const firstProduct = data.products[0];
      return {
        name: firstProduct.title, // Menyesuaikan dengan properti 'name' di state Anda
        price: firstProduct.price, // Menyesuaikan dengan properti 'price' di state Anda
      };
    }

    return null; // Jika produk tidak ditemukan
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
