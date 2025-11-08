function NavBar() {
  return (
    <>
      <div className="text-sm flex gap-4 justify-around border-t-gray-400 border-b-gray-400 border-t border-b pt-8 pb-7">
        <div className="w-full flex justify-around">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Shop</h2>
          <h2>Cart</h2>
        </div>

      </div>
    </>
  );
}

export default NavBar;
