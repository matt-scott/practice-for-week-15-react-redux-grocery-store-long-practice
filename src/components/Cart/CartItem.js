import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { removeItem, increaseItemCount, decreaseItemCount, setItemCount } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  }

  const handleIncrement = () => {
    dispatch(increaseItemCount(item.id));
  }

  const handleDecrement = () => {
    const newCount = --item.count;

    if (newCount < 1) {
      dispatch(removeItem(item.id));
    }
    else {
      dispatch(decreaseItemCount(item.id));
    }
  }

  const handleCountChange = (e) => {
    const newCount = e.target.value;
    if (newCount < 1) {
      dispatch(removeItem(item.id));
    }
    else {
      setCount(newCount)
      dispatch(setItemCount(item.id, newCount));
    }
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          onChange={handleCountChange}
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;