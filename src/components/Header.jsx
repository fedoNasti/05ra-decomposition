/**
 * Шапка страницы: рубрики (СМИ, Германия, Рекомендуем) и текущее время.
 * @param {Object} props
 * @param {string} props.date - дата в формате "31 июля, среда"
 * @param {string} props.time - время "02:32"
 * @param {React.ReactNode} children - элементы рубрик (HeaderItem)
 */
const Header = ({ date, time, children }) => {
  return (
    <div className="header">
      {children}
      <span className="header__datetime">{date} {time}</span>
    </div>
  )
};

export default Header;