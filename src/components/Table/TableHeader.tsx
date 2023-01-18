const TableHeader = () => {
  return (
    <div className="table__header">
      <div className="table__row">
        <div className="table__cell">상품번호</div>
        <div className="table__cell">상품명</div>
        <div className="table__cell">브랜드</div>
        <div className="table__cell">상품내용</div>
        <div className="table__cell">가격</div>
        <div className="table__cell">평점</div>
        <div className="table__cell">재고</div>
      </div>
    </div>
  );
};

export default TableHeader;
