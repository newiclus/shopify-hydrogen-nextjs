"use client";

import { useCart } from "@shopify/hydrogen-react";
import type { CartLineInput } from "@shopify/hydrogen-react/storefront-api-types";

function Cart() {
  const { linesAdd, status } = useCart();

  const merchandise: CartLineInput = {
    merchandiseId: "gid://shopify/Product/7182672724107",
  };

  return (
    <div>
      Cart Status: {status}
      <button onClick={() => linesAdd([merchandise])}>Add Line</button>
    </div>
  );
}

export default Cart;
