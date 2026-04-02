/**
 * Элемент телепрограммы.
 * @param {Object} props
 * @param {string} props.time - время (02:00)
 * @param {string} props.title - название передачи (THT. Best)
 * @param {string} props.channel - канал (THT International)
 * @param {string} props.link - ссылка на канал
 */
const TVProgramItem = ({ time, title, channel, link }) => {
  return (
    <li className="tv-item">
      <span className="tv-item__time">{time}</span>
      <span className="tv-item__title">{title}</span>
      <a className="tv-item__channel" href={link}>{channel}</a>
    </li>
  );
};

export default TVProgramItem;