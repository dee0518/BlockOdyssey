import { useEffect } from 'react';
import { useReduxDispatch, useReduxSelector } from './useRedux';
import { productActions } from 'store/product';
import getSearchQuery from 'utils/getSearchQuery';

const useProductList = () => {
  const dispatch = useReduxDispatch();
  const { showList } = useReduxSelector(state => state.product);

  const getProductList = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=100`);

      if (response.ok) {
        const json = await response.json();
        const condition = getSearchQuery();

        dispatch(productActions.setProductList({ ...json, condition }));
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return {
    showList,
  };
};

export default useProductList;
