import test from 'ava';
import React from 'react'; // eslint-disable-line no-unused-vars
import cloneDeep from 'lodash/cloneDeep';
import { JSDOM } from 'jsdom';
import { mount } from 'enzyme';

import plugin from '../';
import Link from '../src/Link'; // eslint-disable-line no-unused-vars
import defaultTest from './helpers/default.js';

test('React rendered with default content', t => {
  const content = cloneDeep(plugin.content);
  const wrapper = mount(<Link href={content.anchor.href} className={content.anchor.class}>{content.anchor.content}</Link>);

  // using wrapper debug to get a string to use the same tests as the default html file
  const frag = JSDOM.fragment(wrapper.html());

  defaultTest(t, frag, plugin.content);
});

test('Link: allows a caption to be first', t => {
  const content = {
    anchor: {
      class: 'bx--link--other',
      content: 'Another Link',
      href: 'http://example.com',
    },
  };
  const wrapper = mount(<Link href={content.anchor.href} className={content.anchor.class}>{content.anchor.content}</Link>);

  // using wrapper debug to get a string to use the same tests as the default html file
  const frag = JSDOM.fragment(wrapper.html());

  t.true(frag.querySelector('a') !== null, 'has an anchor element');
  t.true(frag.querySelector('a').classList.contains(content.anchor.class), 'anchor element has default className');
  t.is(frag.querySelector('a').getAttribute('href'), content.anchor.href, 'anchor has default href attribute');
  t.is(frag.querySelector('a').textContent.trim(), content.anchor.content, 'anchor has default content');
});
