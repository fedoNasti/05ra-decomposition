/**
 * Элемент телепрограммы.
 * @param {Object} props
 * @param {string} props.icon - иконка
 * @param {string} props.title - название передачи 
 * @param {string} props.channel - канал 
 * @param {string} props.link - ссылка на канал
 */
const EtherItem = ({ icon, title, channel, link }) => {
  return (
    <li className="ether-item">
      <span className="ether-item__icon">{icon}</span>
      <span className="ether-item__title">{title}</span>
      <a className="ether-item__channel" href={link}>{channel}</a>
    </li>
  );
};

export default EtherItem;