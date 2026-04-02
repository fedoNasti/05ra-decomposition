import NewsItem from './NewsItem';
import { renderList } from './utils';

/**
 * Список новостей.
 * @param {Object} props
 * @param {Array} props.news - массив объектов новостей (icon, text, link)
 */
const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {renderList(news, (item, idx) => (
        <NewsItem key={idx} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </ul>
  );
};

export default NewsList;