import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <div className="product-list">
      <ProductCard
        name="Rumah"
        price={200000}
        image="public/assets/house.jpg"
      />
    </div>
  );
}

export default App;
