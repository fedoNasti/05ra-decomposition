import EtherItem from './EtherItem';
import { renderList } from './utils';

/**
 * Список программ эфира.
 * @param {Object} props
 * @param {Array} props.programs - массив объектов 
 */
const EtherList = ({ programs }) => {
  return (
    <ul className="ether-list">
      {renderList(programs, (item, idx) => (
        <EtherItem key={idx} icon={item.icon} title={item.title} channel={item.channel} link={item.link}></EtherItem>
      ))}
    </ul>
  );
};

export default EtherList;