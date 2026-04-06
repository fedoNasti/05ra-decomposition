/**
 * Маленький рекламный баннер.
 * @param {Object} props
 * @param {string} props.img - ссылка на картинку
 * @param {string} props.url - ссылка на рекламодателя
 * @param {string} props.title - заголовок ссылки
 * @param {string} props.text - текст рекламы
 */
const BannerSmall = ({ img, url, title, text }) => {
  return (
    <div className="banner-small__container">
      <img className="banner-small__img" src={img} alt={title} />
      <a href={url}>{title}</a>
      <span>{text}</span>
    </div>
  );
};

export default BannerSmall;