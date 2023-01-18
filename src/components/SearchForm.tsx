import { ChangeEvent, FormEvent, useState, useEffect, memo, useCallback } from 'react';
import { useReduxDispatch } from 'hooks/useRedux';
import { productActions } from 'store/product';
import SelectBox from 'components/SelectBox';
import getSearchQuery from 'utils/getSearchQuery';
import 'styles/searchForm.css';
import { iProductSearch } from 'types/product';
import { defaultCondition } from 'constants/product';

const SearchForm = () => {
  const dispatch = useReduxDispatch();
  const condition = getSearchQuery();
  const defaultSearch = condition.category === '' ? defaultCondition : condition;
  const [isOepn, setIsOpen] = useState(false);
  const [search, setSearch] = useState<iProductSearch>(defaultSearch);

  const onChange = useCallback((e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setSearch(prev => ({ ...prev, [name]: value }));
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback((ev: any) => {
    if ((ev.target as HTMLElement).closest('.select__box')) return;
    setIsOpen(false);
  }, []);

  const onClick = useCallback((id: string) => {
    setSearch(prev => ({ ...prev, category: id }));
    setIsOpen(false);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { category, keyword } = search;
      window.history.pushState('', '', `?category=${category}&keyword=${keyword}`);
      dispatch(productActions.setFilterList(search));
    },
    [search]
  );

  useEffect(() => {
    window.addEventListener('click', onClose);

    return () => {
      window.removeEventListener('click', onClose);
    };
  }, []);

  return (
    <form onSubmit={onSubmit} className="search__form">
      <fieldset>
        <legend>상품 검색</legend>
        <div className="search__info__group">
          <label htmlFor="keyword">검색</label>
          <SelectBox value={search.category} isOepn={isOepn} onOpen={onOpen} onToggle={onToggle} onClick={onClick} />
          <input id="keyword" name="keyword" value={search.keyword} onChange={onChange} />
          <button>검색</button>
        </div>
      </fieldset>
    </form>
  );
};

export default memo(SearchForm);
