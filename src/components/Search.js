import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ searchFood }) {
    const [input, setInput] = useState("")


    const handleSearchInput = function(event) {
        setInput(event.target.value)

        searchFood(event.target.value)
    }
    
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={input} type="text" onChange={handleSearchInput} />
    </>
  );
}

export default Search;