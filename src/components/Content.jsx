/**
 * Контейнер для группировки контентных блоков (погода, карта и т.д.).
 * @param {Object} props
 * @param {React.ReactNode} props.children - дочерние элементы ContentItem
 */
const Content = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

export default Content;