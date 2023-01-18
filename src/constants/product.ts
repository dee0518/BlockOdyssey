import { iProductSearch, iSelectList } from 'types/product';

export const defaultCondition: iProductSearch = {
  category: 'all',
  keyword: '',
};

export const defaultSelectList: iSelectList[] = [
  {
    id: 'all',
    title: '전체',
  },
  {
    id: 'title',
    title: '상품명',
  },
  {
    id: 'brand',
    title: '브랜드',
  },
  {
    id: 'description',
    title: '상품내용',
  },
];
