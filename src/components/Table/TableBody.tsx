import { iProduct } from 'types/product';

type TProps = {
  productList: iProduct[];
};

const TableBody = ({ productList }: TProps) => {
  return (
    <div className="table__body">
      {productList.length > 0 &&
        productList.map(({ id, title, description, price, brand, rating, stock }) => (
          <div className="table__row" key={id}>
            <div className="table__cell">{id}</div>
            <div className="table__cell">{title}</div>
            <div className="table__cell">{brand}</div>
            <div className="table__cell">
              {description.length <= 40 ? description : `${description.substring(0, 40)}...`}
            </div>
            <div className="table__cell">{price}</div>
            <div className="table__cell">{rating}</div>
            <div className="table__cell">{stock}</div>
          </div>
        ))}
      {productList.length === 0 && (
        <div className="table__row empty">
          <div className="table__cell"></div>
          <div className="table__cell"></div>
          <div className="table__cell"></div>
          <div className="table__cell"></div>
          <div className="table__cell"></div>
          <div className="table__cell"></div>
          <div className="table__cell"></div>
        </div>
      )}
    </div>
  );
};

export default TableBody;
