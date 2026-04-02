/**
 * Универсальный блок контента с заголовком и телом.
 * @param {Object} props
 * @param {string} props.title - заголовок-ссылка блока (например, "Погода", "Карта Германии")
 * @param {React.ReactNode} props.children - содержимое блока (виджет погоды, карта, список телепрограммы)
 */
const ContentItem = ({ title, link, children }) => {
  return (
    <div className="content-item">
      <a className="content-item__title" href={link}>{title}</a>
      <div className="content-item__body">
        {children}
      </div>
    </div>
  );
};

export default ContentItem;