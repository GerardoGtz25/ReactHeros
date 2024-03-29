import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString(location.search)

  console.log(query)

  const {searchText, onInputChange} = useForm({
    searchText: ''
  });

  const onSearchSubmit = event => {
    event.preventDefault();
    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              name='searchText'
              id=''
              placeholder='Search a hero'
              className='form-control'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button type='submit' className='btn btn-outline-primary mt-3'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div className='alert alert-primary'>Search a hero</div>
          <div className='alert alert-danger'>
            No hero with <b>Abc</b>
          </div>
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
