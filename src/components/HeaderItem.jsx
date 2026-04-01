/**
 * Элемент рубрики в шапке.
 * @param {Object} props
 * @param {string} props.text - текст рубрики (например, "Сейчас в СМИ")
 * @param {string} [props.link] - опциональная ссылка, если рубрика кликабельна
 */
const HeaderItem = ({ text, link }) => {
  const content = link ? <a href={link}>{text}</a> : text;
  return <span className="header__item">{content}</span>;
};

export default HeaderItem;