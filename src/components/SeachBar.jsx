/**
 * Элемент поиска
 * @param {Object} props 
 * @param {function} [props.onSearch] - опциональный callback при клике на кнопку или отправке формы
 */

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.search.value;
    if (onSearch) onSearch(input);
  };

  return (
    <>
      <div className="search-bar">
        <a className="search-logo" href="#">Яндекс</a>
        <form className="search-form" onSubmit={handleSubmit}>
          <input className="search-input" type="text" name="search" />
          <button type="submit">Найти</button>
        </form>
      </div>
      <div className="search-text">Найдется все. Например,
        <a className="search-text-link" href="#">фаза луны сегодня</a>
      </div>
    </>  
  );
};

export default SearchBar;