/**
 * Элемент навигации.
 * @param {Object} props
 * @param {string} props.text - текст ccskrb (например, "Видео")
 * @param {string} props.link - опциональная ссылка
 */
const NavigationItem = ({ text, link }) => {
  return (
    <li className="navigation-item">
      <a href={link} className="navigation-item__link">{text}</a>
    </li>
  );
};

export default NavigationItem;