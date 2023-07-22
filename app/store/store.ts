import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface ShowCartState {
  showCart: boolean;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  amount: number;
  collection: string;
  src: StaticImageData;
  bgColor: string;
}

interface CartState {
  cart: CartItem[];
}

interface TotalAmountState {
  totalAmount: number;
}

const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    showCart: false,
  } as ShowCartState,
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      const keyToDelete = action.payload;
      state.cart = state.cart.filter((item) => item.id !== keyToDelete);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.cart[action.payload].quantity =
        state.cart[action.payload].quantity - 1;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.cart[action.payload].quantity =
        state.cart[action.payload].quantity + 1;
    },
  },
});

const totalAmountSlice = createSlice({
  name: "totalAmount",
  initialState: {
    totalAmount: 0,
  } as TotalAmountState,
  reducers: {
    setTotalAmount: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  showCart: showCartSlice.reducer,
  cart: cartSlice.reducer,
  totalAmount: totalAmountSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const showCartActions = showCartSlice.actions;
export const cartActions = cartSlice.actions;
export const totalAmountActions = totalAmountSlice.actions;
export default store;
