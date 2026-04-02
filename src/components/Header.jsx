import HeaderItem from "./HeaderItem";
import { renderList } from "./utils";

/**
 * Шапка страницы: рубрики (СМИ, Германия, Рекомендуем) и текущее время.
 * @param {Object} props
 * @param {string} props.date - дата в формате "31 июля, среда"
 * @param {string} props.time - время "02:32"
 * @param {Array} props.rubrics - массив объектов рубрик (text, link)
 */
const Header = ({ date, time, rubrics }) => {
  return (
    <div className="header">
      {renderList(rubrics, (item, idx) => (
        <HeaderItem key={idx} text={item.text} link={item.link} />
      ))}
      <span className="header__datetime">{date} {time}</span>
    </div>
  )
};

export default Header;