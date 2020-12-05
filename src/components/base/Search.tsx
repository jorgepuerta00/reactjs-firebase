import Icon from '@material-ui/icons/Search';

interface ISearch {
  
}

const Search: React.FC<ISearch> = ({

}) => {

  return (
    <div className="bg-white shadow p-2 flex">
      <span className="w-auto flex justify-end items-center text-gray-500 p-2">
          <Icon />
      </span>
      <input className="w-full border border-transparent" type="text" placeholder="Search for any job, title, keywords or company" />
    </div>
  );
};

export default Search;