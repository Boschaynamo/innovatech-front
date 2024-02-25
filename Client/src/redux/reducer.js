import {
  CLEAN_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  FILTER_BY_MODEL,
  GET_CATEGORIES,
  GET_ORDER,
  GET_PRODUCTS_BY_CATEGORIES,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from "./actions";

const initialState = {
  //Variables de producto, podría juntarse todo en un objeto
  products: [],
  categories: null,
  order: null,
  model: null,
  totalpages: null,
  pagenumber: "1",
  //******* */
  getProductById: {},
  filterByCategories: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        filterByCategories: action.payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload, // laptop, smarthphone,
        pagenumber: "1",
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload, // none // Price: Low to high // Price: High to low
        pagenumber: "1",
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
    case CLEAN_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
    case FILTER_BY_MODEL:
      return {
        ...state,
        products: action.payload,
      };
    case "CHANGE_MODEL":
      return {
        ...state,
        model: action.payload,
        pagenumber: "1",
      };

    case "SET_PAGE":
      return { ...state, pagenumber: action.payload };
    case "TOTAL_PAGES":
      return {
        ...state,
        totalpages: action.payload,
      };
    case ADD_TO_CART:
      const productFound = state.cart.find(
        (product) => product.id === action.payload
      )
      if (productFound) {
        const updatedCart = state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity + 1,
                total: product.price * (product.quantity + 1),
              }
            : product
        )
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const productToAdd = state.products.find(
        (product) => product.id === action.payload
      );
      if (productToAdd) {
        const updatedProduct = {
          ...productToAdd,
          quantity: 1,
          total: productToAdd.price,
        };
        return {
          ...state,
          cart: [...state.cart, updatedProduct],
        };
      }
    case REMOVE_ALL_FROM_CART:
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case REMOVE_ONE_FROM_CART:
      const productToRemove = state.cart.find(
        (product) => product.id === action.payload
      )
      if (productToRemove && productToRemove.quantity > 1) {
        const updatedCart = state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity - 1,
                total: product.price * (product.quantity - 1),
              }
            : product
        )
        return {
          ...state,
          cart: updatedCart,
        };
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
