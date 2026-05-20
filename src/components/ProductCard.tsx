import Button from "./Button";
import { useState } from "react";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ name, price, image }: ProductCardProps) {
  const [cart, setCart] = useState(0);

  return (
    <div className="product-card">
      <p>
        {cart <= 10 ? (
          <b>TOTAL PRODUCT DI DALAM CART MASIH KURANG DARI KAPASITAS</b>
        ) : (
          <b>TOTAL PRODUCT DI DALAM CART SUDAH LEBIH DARI KAPASITAS!!</b>
        )}

        <p>
          <b>Cart: {cart}</b>
        </p>
      </p>
      <p>{name}</p>

      <img src={image} alt={name} />
      <p>Rp.{price}</p>

      <Button
        text="Add to Cart"
        onClick={() => {
          setCart(cart + 1);
        }}
      />
    </div>
  );
}
