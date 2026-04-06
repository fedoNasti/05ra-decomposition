/**
 * Элемент информации о биржевых котировках.
 * @param {Object} props
 * @param {string} props.name - наименование валюты
 * @param {string} props.value - курс
 * @param {string} props.change - изменение курса
 */
const ExchangeRatesItem = ({ name, value, change }) => {
  return (
    <li className="exchange-item">
      <span className="exchange-item-name">{name}</span>
      <span className="exchange-item-value">{value}</span>
      <span className="exchange-item-change">{change}</span>
    </li>
  );
};

export default ExchangeRatesItem;