import { useState } from 'react';

const useFilterState = (initialValue) => {
  const [filter, setFilter] = useState(initialValue);
  return {
    filter,
    onFilterChange: (filter) => setFilter(filter),
  };
};

export default useFilterState;
