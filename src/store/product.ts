import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { iProduct, iProductResponse, iProductSearch } from 'types/product';

type TProduct = {
  total: number;
  currentPage: number;
  totalPage: number;
  limit: number;
  productList: iProduct[];
  filteredList: iProduct[];
  showList: iProduct[];
};

const initialState: TProduct = {
  total: 0,
  currentPage: 1,
  totalPage: 0,
  limit: 10,
  productList: [],
  filteredList: [],
  showList: [],
};

const getFilterList = (productList: iProduct[], condition: iProductSearch) => {
  const { category, keyword } = condition;

  let filtered = [];

  if (category === '') {
    filtered = productList;
  } else if (category === 'all') {
    filtered = productList.filter(({ title, description, brand }) => {
      const curKeyword = keyword.toLowerCase();
      return (
        title.toLowerCase().includes(curKeyword) ||
        description.toLowerCase().includes(curKeyword) ||
        brand.toLowerCase().includes(curKeyword)
      );
    });
  } else {
    filtered = productList.filter(product => {
      const cur = (product[category] as string).toLowerCase();
      const curKeyword = keyword.toLowerCase();

      return cur.indexOf(curKeyword) !== -1;
    });
  }

  return filtered;
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<iProductResponse>) => {
      state.productList = action.payload.products;
      const filtered = getFilterList(action.payload.products, action.payload.condition);
      state.filteredList = filtered;
      state.showList = filtered.slice(0, state.limit);
      state.total = filtered.length;
      state.currentPage = 1;
      state.totalPage = Math.ceil(filtered.length / state.limit);
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.totalPage = Math.ceil(state.total / state.limit);
      state.currentPage = state.currentPage > state.totalPage ? state.totalPage : state.currentPage;

      const startIdx = (state.currentPage - 1) * state.limit;
      const endIdx = startIdx + state.limit;
      state.showList = state.filteredList.slice(startIdx, endIdx);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;

      const startIdx = (action.payload - 1) * state.limit;
      const endIdx = startIdx + state.limit;
      state.showList = state.filteredList.slice(startIdx, endIdx);
    },
    setFilterList: (state, action: PayloadAction<iProductSearch>) => {
      const filtered = getFilterList(state.productList, action.payload);
      state.filteredList = filtered;
      state.showList = filtered.slice(0, state.limit);
      state.total = filtered.length;
      state.currentPage = 1;
      state.totalPage = Math.ceil(filtered.length / state.limit);
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
