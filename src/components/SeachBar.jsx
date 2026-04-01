/**
 * Элемент поиска
 * @param {}
 */

const SearchBar = ({  }) => {
  return (
    <>
      <div className="search-bar">
        <a className="search-logo" href="#">Яндекс</a>
        <input type="text"/>
        <button>Найти</button>
      </div>
      <div className="search-text">Найдется все. Например,
        <a className="search-text-link" href="#">фаза луны сегодня</a>
      </div>
    </>  
  );
};

export default SearchBar;