import VisitedItem from "./VisitedItem";
import { renderList } from "./utils";

/**
 * Список посещаемого.
 * @param {Object} props
 * @param {Array} props.items - массив объектов посещаемого
 */
const VisitedList = ({ items }) => {
  return (
    <ul className="visited-list">
      {renderList(items, (item, idx) => (
        <VisitedItem key={idx} title={item.title} description={item.description} link={item.link} />
      ))}
    </ul>
  );
};

export default VisitedList;