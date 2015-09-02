/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var name = 'cu-styles';

module.exports = {
  type: 'library',
  path: __dirname,
  name: name,
  lib: {
    sass: true,
    sass_base: '',
    sass_dest: '',
    copy: true,
  },
  bundle: {
    browserify: false,
    sass_base: '',
    sass_dest: '',
  },
  compile: {
    ts: false,
  },
  server: {
    inject: {
      scripts_before: [],
    },
  },
};
