import React,{useState} from "react";
import './style.css';

const menuItems = [
  {
    image: "https://leitesculinaria.com/wp-content/uploads/2022/07/skillet-bacon-cheeseburger-with-crispy-fried-onions.jpg",
    name: "Cheeseburger",
    description: "Beef patty with cheddar cheese and lettuce",
    price: 8.99
  },
  {
    image:"https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg",
    name: "Caesar Salad",
    description:
      "Romaine lettuce with croutons, parmesan cheese, and Caesar dressing",
    price: 7.99
  },
  {
    image:"https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36.jpg",
    name: "Spaghetti Bolognese",
    description: "Spaghetti with meat sauce and parmesan cheese",
    price: 10.99
  },
  {
    image:"https://www.dropee.com/product-images/f1e8c0b6c010dc156f8752fba4165e69dc61bf76.jpeg",
    name: "Coca-Cola",
    description: "Coke with ice",
    price: 2
  }
];

function MenuItem(props) {

 const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    props.addToOrder({ ...props.item, quantity });
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="cddd">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>${props.price.toFixed(2)}</p>
        <div className="quantity-selector">
          <button onClick={decrementQuantity} className="decrement">-</button>
          <span className="quantity-cart">{quantity}</span>
          <button onClick={incrementQuantity} className="increment">+</button>
        </div>
        <button onClick={addToCart} className="cart-button">Add to Cart</button>
      </div>
      </div>
  );
}

function Menu() {
  return (
    <div>
      <h2 className="subHeader">Menu</h2>
      <img src="https://o.remove.bg/downloads/a1016ca3-0382-4fb2-b30c-6ab85d21b56a/image-removebg-preview.png" alt="icon" className="icon-img"></img>
      <div className="main">
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
    </div>
    </div>
  );
}

export default Menu;
