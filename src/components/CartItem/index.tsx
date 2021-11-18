/**
 * Types
 */
import CartItemProps from "./types";

const CartItem = ({ image, name, price, sellingPrice }: CartItemProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-start py-6">
      <div className="w-28 lg:w-32 h-28 lg:h-32 min-w-28 lg:min-w-32 min-h-28 lg:min-h-32 border-gray-300 border-2 flex flex-row items-center justify-center">
        <img className="h-full rounded" src={image} alt={name} />
      </div>
      <div className="h-full ml-6 flex flex-col items-start justify-center">
        <span className="font-extrabold">{name}</span>
        {price > sellingPrice ? (
          <span className="font-semibold text-gray-400">
            R$ {(price / 100).toFixed(2).toString().replace(/\./g, ",")}
          </span>
        ) : null}
        <span className="font-semibold">
          R$ {(sellingPrice / 100).toFixed(2).toString().replace(/\./g, ",")}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
