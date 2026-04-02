/**
 * Элемент карты.
 * @param {Object} props
 * @param {string} props.text - текст ссылки
 * @param {string} props.link - ссылка
 */
const Map = ({ text, link }) => {
  return <a href={link} className="map-body__link">{text}</a>
};

export default Map;