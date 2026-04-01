import NewsItem from './NewsItem';

/**
 * Список новостей.
 * @param {Object} props
 * @param {Array} props.news - массив объектов новостей (icon, text, link)
 */
const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((item, idx) => (
        <NewsItem key={idx} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </ul>
  );
};

export default NewsList;