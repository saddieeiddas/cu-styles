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
    sass_base: 'sass',
    sass_dest: '',
    copy: true,
  },
  bundle: {
    browserify: false,
    base: 'js',
    sass_base: 'sass',
    sass_dest: '',
  },
};
