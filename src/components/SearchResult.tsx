import { memo } from 'react';
import { useReduxSelector } from 'hooks/useRedux';
import 'styles/searchResult.css';

const SearchResult = () => {
  const { total } = useReduxSelector(state => state.product);
  return <p className="search__result">검색된 데이터: {total}건</p>;
};

export default memo(SearchResult);
