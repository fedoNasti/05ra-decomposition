import NavigationItem from "./NavigationItem";

/**
 * Список новостей.
 * @param {Object} props
 * @param {Array} props.items - массив объектов навигации (text, link)
 */
const Navigation = ({ items }) => {
  return (
    <ul className="navigation-list">
      {items.map((item, idx) => (
        <NavigationItem key={idx} text={item.text} link={item.link}></NavigationItem>
      ))}
    </ul>
  );
};

export default Navigation;