import test from 'ava';
import fs from 'fs';
import njk from 'nunjucks';
import attrs from 'nunjucks-add-attrs-filter';
import { JSDOM } from 'jsdom';

import plugin from '../';
import defaultTest from './helpers/default.js';

let template;

const nunjucks = njk.configure({ autoescape: true });
nunjucks.addFilter('attrs', attrs);


test.serial('Nunjucks template existss', t => {
  t.is(typeof plugin, 'object', 'plugin exports an object');
  t.is(typeof plugin.versions, 'object', 'should have a pattern versions');
  t.is(typeof plugin.versions.nunjucks, 'string', 'should have a nunjucks version');
  t.true(fs.existsSync(plugin.versions.nunjucks), 'referenced nunjucks file exists');
  template = plugin.versions.nunjucks;
});

test('Nunjucks rendered with default content', t => {
  const content = plugin.content;
  const rendered = nunjucks.render(template, content);
  const frag = JSDOM.fragment(rendered);

  defaultTest(t, frag, content);
});

test('Nunjucks accepts variables', t => {
  const content = {
    anchor: {
      class: 'bx--link--other',
      content: 'Another Link',
      href: 'http://example.com',
    },
  };
  const rendered = nunjucks.render(template, content);
  const frag = JSDOM.fragment(rendered);

  t.true(frag.querySelector('a') !== null, 'has an anchor element');
  t.true(frag.querySelector('a').classList.contains(content.anchor.class), 'anchor element has default className');
  t.is(frag.querySelector('a').getAttribute('href'), content.anchor.href, 'anchor has default href attribute');
  t.is(frag.querySelector('a').textContent.trim(), content.anchor.content, 'anchor has default content');
});
