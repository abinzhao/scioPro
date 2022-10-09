/**
 * @param { string } str 待转义的HTML字符串
 */

const EscapeHTML = (str: string) => {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag] || tag),
  );
};
export default EscapeHTML;
