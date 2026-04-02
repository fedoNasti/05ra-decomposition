import ExchangeRatesItem from "./ExchangeRateItem";
import { renderList } from "./utils";

/**
 * Список биржевых котировок.
 * @param {Object} props
 * @param {Array} props.items - массив объектов котировок (name, value, change)
 */
const ExchangeRates = ({ items }) => {
  return (
    <ul className="exchange-list">
      {renderList(items, (item, idx) => (
        <ExchangeRatesItem key={idx} name={item.name} value={item.value} change={item.change}></ExchangeRatesItem>
      ))}
    </ul>
  );
};

export default ExchangeRates;