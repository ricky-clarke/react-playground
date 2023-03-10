import './search-field.styles.scss';

const SearchField = ({ searchChange}) => {

    return (
        <div className='user_search_field'>
            <input
            type = 'search'
            placeholder = 'Search users name'
            onChange = { searchChange }
            />
         </div>
    );

}


export default SearchField;