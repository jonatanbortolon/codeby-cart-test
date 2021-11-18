const CartItemSkeleton = () => {
  return (
    <div className="animate-pulse w-full flex flex-row items-center justify-start py-6">
      <div className="w-28 lg:w-32 h-28 lg:h-32 min-w-28 lg:min-w-32 min-h-28 lg:min-h-32 bg-gray-300 border-2" />
      <div className="w-full h-full ml-6 flex flex-col items-start justify-center">
        <div className="w-full bg-gray-300 mb-2 text-sm">&nbsp;</div>
        <div className="bg-gray-300 w-24 mb-2 text-sm">&nbsp;</div>
        <div className="bg-gray-300 w-24 text-sm">&nbsp;</div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
