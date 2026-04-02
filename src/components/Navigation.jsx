import NavigationItem from "./NavigationItem";
import { renderList } from "./utils";

/**
 * Список новостей.
 * @param {Object} props
 * @param {Array} props.items - массив объектов навигации (text, link)
 */
const Navigation = ({ items }) => {
  return (
    <ul className="navigation-list">
      {renderList(items, (item, idx) => (
        <NavigationItem key={idx} text={item.text} link={item.link}></NavigationItem>
      ))}
    </ul>
  );
};

export default Navigation;