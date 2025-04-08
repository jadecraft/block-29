import { useState } from 'react';



function SearchBar({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;