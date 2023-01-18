import { ChangeEvent, memo, useCallback } from 'react';
import { useReduxDispatch, useReduxSelector } from 'hooks/useRedux';
import { productActions } from 'store/product';
import 'styles/pagination.css';

const Pagination = () => {
  const dispatch = useReduxDispatch();
  const { currentPage, totalPage, limit } = useReduxSelector(state => state.product);

  const getPageList = () => {
    const val = Math.floor(currentPage / 10);
    const curRest = currentPage % 10;
    const curStart = val * 10 + 1;
    const gap = totalPage - curStart + 1;
    const list: string[] = [];

    if (gap < 7) {
      for (let i = 1; i <= gap; i++) {
        const page = val * 10 + i;
        list.push('' + page);
      }
    } else {
      const len = gap < 10 ? gap : 10;

      for (let i = 1; i <= len; i++) {
        const page = val * 10 + i;

        if (i === 1 || i === len) {
          list.push('' + page);
        } else if (curRest < Math.ceil(len / 2)) {
          if (i <= Math.ceil(len / 2)) list.push('' + page);
          else if (list[list.length - 1] !== '...') list.push('...');
        } else if (curRest < Math.ceil(len / 2) + 2) {
          if (i === curRest - 1 || i === curRest || i === curRest + 1) list.push('' + page);
          else if (list[list.length - 1] !== '...') list.push('...');
        } else {
          if (i >= Math.ceil(len / 2) + 1) list.push('' + page);
          else if (list[list.length - 1] !== '...') list.push('...');
        }
      }
    }

    return list;
  };
  const pageList = getPageList();

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(productActions.setLimit(+e.target.value));
  }, []);

  const onClickPage = useCallback((page: string) => {
    dispatch(productActions.setCurrentPage(+page));
  }, []);

  const onClickControl = useCallback(
    (type: string) => {
      const page = currentPage + (type === 'prev' ? -1 : 1);
      dispatch(productActions.setCurrentPage(page));
    },
    [currentPage]
  );

  return (
    <div className="pagination__group">
      <div className="page__per">
        <label htmlFor="page">페이지당 행: </label>
        <select id="page" defaultValue={limit} onChange={onChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <ul className="pagination__list">
        <li>
          <button
            className={`control__btn prev__btn ${currentPage === 1 ? 'off' : ''}`}
            aria-label="이전"
            onClick={onClickControl.bind(null, 'prev')}
          />
        </li>
        {pageList.map((page, i) =>
          page === '...' ? (
            <li key={'rest' + i}>{page}</li>
          ) : (
            <li key={page} className={currentPage === +page ? 'on' : ''}>
              <button onClick={onClickPage.bind(null, page)}>{page}</button>
            </li>
          )
        )}

        <li>
          <button
            className={`control__btn next__btn ${currentPage === totalPage ? 'off' : ''}`}
            aria-label="다음"
            onClick={onClickControl.bind(null, 'next')}
          />
        </li>
      </ul>
    </div>
  );
};

export default memo(Pagination);
