import TableHeader from 'components/Table/TableHeader';
import TableBody from 'components/Table/TableBody';
import 'styles/table.css';
import { iProduct } from 'types/product';

type TProps = {
  productList: iProduct[];
};

const Table = ({ productList }: TProps) => {
  return (
    <div className="table">
      <TableHeader />
      <TableBody productList={productList} />
    </div>
  );
};

export default Table;
