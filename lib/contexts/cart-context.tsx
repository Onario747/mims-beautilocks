"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from "react";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
}

type CartAction =
  | { type: "SET_CART"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_CART" };

interface CartContextType extends CartState {
  addItem: (item: CartItem) => Promise<void>;
  updateQuantity: (id: number, quantity: number) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, items: action.payload, isLoading: false };
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

const SHIPPING_COST = 5.99;

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isLoading: true,
    error: null,
  });

  // Calculate totals
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = state.items.length > 0 ? SHIPPING_COST : 0;
  const total = subtotal + shipping;

  // Load cart from API on mount
  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("Failed to load cart");
      const data = await response.json();
      dispatch({ type: "SET_CART", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to load cart" });
      toast.error("Failed to load cart");
    }
  }

  async function addItem(item: CartItem) {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (!response.ok) throw new Error("Failed to add item");
      dispatch({ type: "ADD_ITEM", payload: item });
      toast.success("Item added to cart");
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to add item" });
      toast.error("Failed to add item to cart");
    }
  }

  async function updateQuantity(id: number, quantity: number) {
    try {
      if (quantity < 1) return;
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await fetch(`/api/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      if (!response.ok) throw new Error("Failed to update quantity");
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to update quantity" });
      toast.error("Failed to update quantity");
    }
  }

  async function removeItem(id: number) {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to remove item");
      dispatch({ type: "REMOVE_ITEM", payload: id });
      toast.success("Item removed from cart");
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to remove item" });
      toast.error("Failed to remove item");
    }
  }

  async function clearCart() {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await fetch("/api/cart", {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to clear cart");
      dispatch({ type: "CLEAR_CART" });
      toast.success("Cart cleared");
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to clear cart" });
      toast.error("Failed to clear cart");
    }
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
