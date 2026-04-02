import TVProgramItem from "./TVProgramItem";
import { renderList } from "./utils";

/**
 * Список телепрограмм.
 * @param {Object} props
 * @param {Array} props.items - массив объектов телепрограмм
 */
const TVProgramList = ({ items }) => {
  return (
    <ul className="tv-list">
      {renderList(items, (item, idx) => (
        <TVProgramItem key={idx} time={item.time} title={item.title} channel={item.channel} link={item.link} />
      ))}
    </ul>
  );
};

export default TVProgramList;