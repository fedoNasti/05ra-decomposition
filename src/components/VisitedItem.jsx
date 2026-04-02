/**
 * Элемент блока "Посещаемое".
 * @param {Object} props
 * @param {string} props.title - заголовок (Недвижимость)
 * @param {string} props.description - описание (о сталинках)
 * @param {string} props.link - ссылка
 */
const VisitedItem = ({ title, description, link }) => {
  return (
    <li className="visited-item">
      <a href={link} className="visited-item__title">{title}</a>
      <span className="visited-item__desc"> — {description}</span>
    </li>
  );
};

export default VisitedItem;