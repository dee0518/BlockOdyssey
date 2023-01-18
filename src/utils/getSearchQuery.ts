const getSearchQuery = () => {
  const search = window.location.search;
  let condition = { category: '', keyword: '' };

  if (search) {
    const [, category, , keyword] = search.split(/[&=]/);
    condition = { category, keyword };
  }

  return condition;
};

export default getSearchQuery;
