export async function fetchProduct(
  name: string,
): Promise<{ name: string; price: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, price: Math.floor(Math.random() * 1000000) });
    }, 1000);
  });
}
