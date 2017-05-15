
/**
 * Tests an HTML `DocumentFragment` for default structure and content
 * @param  {object} test - test runner
 * @param  {object} fragment - HTML `DocumentFragment`
 * @param {object} content - default content
 */
const defaultTest = (test, fragment, content) => {
  test.true(fragment.querySelector('a') !== null, 'has an anchor element');
  test.true(fragment.querySelector('a').classList.contains(content.anchor.class), 'anchor element has default className');
  test.is(fragment.querySelector('a').getAttribute('href'), content.anchor.href, 'anchor has default href attribute');
  test.is(fragment.querySelector('a').textContent.trim(), content.anchor.content, 'anchor has default content');
};

module.exports = defaultTest;
