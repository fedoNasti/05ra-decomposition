import ExchangeRatesItem from "./ExchangeRateItem";

/**
 * Список биржевых котировок.
 * @param {Object} props
 * @param {Array} props.items - массив объектов котировок (name, value, change)
 */
const ExchangeRates = ({ items }) => {
  return (
    <ul className="exchange-list">
      {items.map((item, idx) => (
        <ExchangeRatesItem key={idx} name={item.name} value={item.value} change={item.change}></ExchangeRatesItem>
      ))}
    </ul>
  );
};

export default ExchangeRates;