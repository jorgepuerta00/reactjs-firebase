import React from 'react';
import Icon from '@material-ui/icons/Search';

interface ISearch {
  OnPress?: any
}

const Search: React.FC<ISearch> = ({
  OnPress
}) => {
  
  const setFilter = (filter: string) => {
    console.log(filter)
    OnPress && OnPress(filter)
  }

  return (
    <div className="bg-white shadow p-2 flex">
      <span className="w-auto flex justify-end items-center text-gray-500 p-2">
          <Icon />
      </span>
      <input 
        className="w-full border border-transparent pl-2" 
        type="text" 
        onChange={e => setFilter(e.target.value)}
        placeholder="Search for any job, title, keywords or company" 
      />
    </div>
  );
};

export default Search;