/**
 * Большой рекламный баннер (ссылка, в стилях накладывается картинка).
 * @param {Object} props
 * @param {Array} props.url - ссылка на рекламодателя
 */
const BannerBig = ({ url }) => {
  return (
    <a className="banner-big" href={url}>реклама</a>
  );
};

export default BannerBig;