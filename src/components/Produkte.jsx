import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrQuantityById,
  increaseItemQuantity,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Produkte(props) {
  const { data } = props;

  const { name, productImg, price, id } = data;
  const { cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrQuantityById(id));

  return (
    <div className="product border rounded-lg w-full md:w-80 h-95 p-6 m-4 flex flex-col justify-center ">
      <ul className="">
        <li key={`Liste${id}`}>
          <img
            className="mx-auto rounded-2xl"
            key={`Image${id}`}
            src={productImg}
            alt={`Picture:${productImg}`}
          />
          <div className="description text-center mt-4">
            <span className="text-2xl md:text-3xl" key={`Name${id}`}>
              {name}
            </span>
            <br />
            <span className="text-base md:text-lg" key={`Preis${id}`}>
              <b>Preis: </b> {price}
            </span>
          </div>
        </li>
      </ul>
      {quantity > 0 ? (
        <>
          <button
            key={`Add${id}`}
            onClick={(e) => {
              e.preventDefault();
              dispatch(increaseItemQuantity(id));
            }}
            className={`${
              cartItemsAmount > 0 ? "bg-slate-600 text-white" : ""
            } addToCartBttn border border-gray-700 px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 hover:text-white  cursor-pointer`}
          >
            Hinzufügen zum Einkaufwagen
            {quantity > 0 && <>({quantity})</>}
          </button>
        </>
      ) : (
        <>
          <Link
            to="https://buy.stripe.com/test_fZe4hE8CydEw8U06oq?locale=de"
            target="_blank"
            rel="noreferrer"
            key={`Add${id}`}
            className={`${
              cartItemsAmount > 0 ? "bg-slate-600 text-white" : ""
            } text-center addToCartBttn border border-gray-700 px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 hover:text-white  cursor-pointer`}
          >
            <span>Pay</span>
            {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
          </Link>
        </>
      )}
      <div className="content-details mt-4">
        <p>Details:</p>
        <ul className="left-0 ml-0 p-0">
          <li>adw</li>
          <li>adwasd</li>
          <li>adwasdaf</li>
        </ul>
      </div>
    </div>
  );
}

export default Produkte;
