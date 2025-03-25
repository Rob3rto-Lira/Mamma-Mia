import React from "react";

function Navbar() {
  const total = "25.000";
  const token = true;
  function refresh() {
    return token ? (
      <>
        <button type='button' className='btn btn-danger'>
          🔓 Profile
        </button>
        <button type='button' className='btn btn-danger'>
          🔒 Logout
        </button>
      </>
    ) : (
      <>
        <button type='button' className='btn btn-danger'>
          🔐 Login
        </button>
        <button type='button' className='btn btn-danger'>
          🔐 Register
        </button>
      </>
    );
  }
  return (
    <div className='navbar'>
      <button type='button' className='btn btn-danger'>
        🍕 Home
      </button>
      {refresh()}
      <button type='button' className='btn btn-danger'>
        🛒 Total: ${total}
      </button>
    </div>
  );
}

export default Navbar;
