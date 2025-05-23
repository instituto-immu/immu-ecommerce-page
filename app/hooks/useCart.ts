import { IProducts } from '@immu/contexts/interfaces';

export interface ICartProduct extends IProducts {
  quantity: number;
}

const CART_KEY = 'cart';

export const getCart = (): ICartProduct[] => {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
};

export const saveCart = (cart: ICartProduct[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
};

export const addToCart = (product: IProducts) => {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

export const removeFromCart = (productId: number) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCart(updatedCart);
};

export const incrementQuantity = (productId: number) => {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart[index].quantity += 1;
    saveCart(cart);
  }
};

export const decrementQuantity = (productId: number) => {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1); // remove item se quantidade for 1
    }
    saveCart(cart);
  }
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event('cart-updated'));
};
