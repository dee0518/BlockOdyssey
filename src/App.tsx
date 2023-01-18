import useProductList from 'hooks/useProductList';
import Logo from 'components/Logo';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import SearchResult from 'components/SearchResult';
import Table from 'components/Table';

const App = () => {
  const { showList } = useProductList();

  return (
    <>
      <Logo />
      <SearchForm />
      <SearchResult />
      <Table productList={showList} />
      {showList.length > 0 && <Pagination />}
    </>
  );
};

export default App;
