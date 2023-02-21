import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addItemHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;
    // const updateItems = cart.items.slice();
    // const existingItem = updateItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updateItem = { ...existingItem };
    //   updateItem.quantity++;
    //   updateItem.totalPrice = updateItem.totalPrice + price;
    //   const existingItemIndex = updateItems.findIndex((item) => item.id === id);
    //   updateItems[existingItemIndex] = updateItem;
    // } else {
    //   updateItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }
    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updateItems,
    // };
    // dispatch(cartActions.replaceCart(newCart));
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
