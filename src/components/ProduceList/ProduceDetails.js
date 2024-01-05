import {useDispatch,useSelector} from 'react-redux';
import { addItem, increaseItemCount } from '../../store/cart';
import { likeToggle } from '../../store/produce';

function ProduceDetails({ produce }) {
  const cart = useSelector(state => state.cart);

  const cartItem = {};
  const dispatch = useDispatch();

  const handleItemAdd = () => {
    // search cart for existing key with produce.id
    // if there, increaseItemCount
    if (produce.id in cart) {
      dispatch(increaseItemCount(produce.id));
    }
    // if not there, addItem
    else {
      dispatch(addItem(produce.id));
    }
  };

  const handleLike = () => {
    // toggle boolean produce.liked
    dispatch(likeToggle(produce));
  };

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleItemAdd}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;