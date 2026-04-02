/**
 * Вспомогательные функции для уменьшения дублирования кода
 * 
 * renderList - функция рендеринга для списка элементов
 * Для упрощения использует индекс элемента как React key.
 * 
 * @param {Array} items - массив данных
 * @param {Function} renderItem - функция, которая получает элемент и индекс, возвращает JSX
 * @returns {Array|null} массив JSX-элементов или null, если items не массив
 */
export const renderList = (items, renderItem) => {
  if (!Array.isArray(items)) return null;
  return items.map((item, index) => renderItem(item, index));
};