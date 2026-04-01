/**
 * Элемент списка новостей.
 * @param {Object} props
 * @param {string} props.icon - класс иконки или текст эмодзи.
 * @param {string} props.text - текст новости.
 * @param {string} props.link - URL новости.
 */
const NewsItem = ({ icon, text, link }) => {
  return (
    <li className="news-item">
      <span className="news-item__icon">{icon}</span>
      <a href={link} className="news-item__link">{text}</a>
    </li>
  );
};

export default NewsItem;