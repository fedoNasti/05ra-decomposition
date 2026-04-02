/**
 * Элемент погода.
 * @param {Object} props
 * @param {string} props.icon - класс иконки или текст эмодзи.
 * @param {string} props.temp - значение температуры сейчас.
 * @param {string} props.text - прогноз на день.
 */
const Weather = ({ icon, temp, text }) => {
  return (
    <div className="weather-body">
      <div className="weather-body__icon">{icon}</div>
      <div className="weather-body__temp">{temp}</div>
      <div className="weather-body__text">{text}</div>
    </div>
  );
};

export default Weather;