'use strict';

const path = require('path');

/**
 * Link pattern
 * Documents a system-agnostic HTML pattern for a link
 * @module link
 */

module.exports = {
  name: 'link',
  description: 'A system-agnostic HTML pattern for a link',
  content: {
    anchor: {
      class: 'bx--link',
      content: 'Link',
      href: '#',
    },
  },
  versions: {
    default: path.join(__dirname, 'node_modules/carbon-components/src/components/link/link.html'),
    nunjucks: path.join(__dirname, 'src/link.njk'),
  },
};
