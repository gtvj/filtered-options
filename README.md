# Filtered options application

## Purpose

To provide jQuery plugin that links a user's selection from a radio
button to the availability of a `<option>` elements within a `<select>`.
For example, if a user selects 'postal' as a delivery type, they will be
presented with options that are appropriate to a postal delivery only.

## Development machine setup

[Bower](https://bower.io) is used for dependency management in this project. See `bower.json` for a listing of dependencies. [GruntJS](http://gruntjs.com/) is used for task automation.

Dependencies can be installed by:

* installing Bower globally `npm install -g bower`
* installing dependencies `bower install`
* installing the GruntJS command line interface `npm install -g
  grunt-cli`
* installing GruntJS dependencies with `npm install`

### Tools available:

* jQuery and QUnit are provided by Bower
* 'watch', 'concat', 'uglify' and 'qunit' tasks are provided by GruntJS

To run all of this simply type `grunt watch` at the Terminal from within
the application root.

