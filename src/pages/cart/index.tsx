/**
 * Components
 */
import CartItem from "../../components/CartItem";
import CartItemSkeleton from "../../components/CartItemSkeleton";

/**
 * Controller
 */
import useController from "./controller";

const Cart = () => {
  const controller = useController();

  return (
    <div className="container-fluid flex flex-col min-h-full items-center justify-center text-black bg-indigo-100">
      <div className="mx-auto p-0 h-full w-full md:h-auto lg:my-14 md:w-5/6 lg:w-4/6 shadow-2xl rounded-none md:rounded-3xl bg-white">
        <div className="w-full py-6 text-center">
          <span className="font-extrabold text-3xl">Meu carrinho</span>
        </div>
        <div className="w-full h-px border-gray-300 border" />
        <div className="px-4 lg:px-10">
          {controller.loading
            ? Array.from({ length: 3 }, (_, i) => i++).map((i) => (
                <CartItemSkeleton key={i} />
              ))
            : !controller.error && controller.items
            ? controller.items.map((item) => (
                <CartItem
                  key={item.uniqueId}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  sellingPrice={item.sellingPrice}
                />
              ))
            : null}
        </div>
        <div className="w-full h-px border-gray-300 border" />
        <div className="px-10 py-12">
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-extrabold text-3xl">Total</span>
            {controller.loading ? (
              <div className="animate-pulse bg-gray-300 text-3xl w-24 mb-2">
                &nbsp;
              </div>
            ) : !controller.error && controller.totalizers ? (
              <span className="font-extrabold text-3xl">
                R${" "}
                {(controller.totalizers[0]?.value / 100)
                  .toFixed(2)
                  .toString()
                  .replace(/\./g, ",")}
              </span>
            ) : null}
          </div>
          {!controller.loading && !controller.error && controller.totalizers ? (
            controller.totalizers[0]?.value > 1000 ? (
              <div className="w-full flex items-center justify-center mt-8">
                <div className="w-full rounded-full bg-green-50 text-center px-6 py-4">
                  <span className="text-green-800 font-medium text-xs md:text-lg lg:text-2xl whitespace-nowrap">
                    Parabéns, sua compra tem frete grátis !
                  </span>
                </div>
              </div>
            ) : null
          ) : null}
        </div>
        <div className="w-full h-px border-gray-300 border" />
        <div className="px-10">
          <div className="w-full py-6">
            <button
              disabled={controller.loading || !!controller.error}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-500 rounded-xl py-8 text-white font-bold text-2xl lg:text-3xl disabled:opacity-50 disabled:bg-gray-500"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
