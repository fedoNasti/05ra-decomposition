/**
 * Элемент навигации.
 * @param {Object} props
 * @param {string} props.name - наименование валюты
 * @param {string} props.value - курс
 * @param {string} props.change - изменение курса
 */
const ExchangeRatesItem = ({ name, value, change }) => {
  return (
    <li className="exchange-item">
      <div className="exchange-item-name">{name}</div>
      <div className="exchange-item-value">{value}</div>
      <div className="exchange-item-change">{change}</div>
    </li>
  );
};

export default ExchangeRatesItem;