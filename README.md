# Link with editor

Light Table plugin for linking the file currently edited with the workspace
view.

## Installation

Install from the `plugin manager` within Light Table
or clone this repository into your Light Table plugins folder.
You might need to run `Refresh plugin list`, and `Reload app behaviors`
commands after installation.

If you like the highlighted workspace element to be CSS-styled, just add a
`linked-with-editor` entry in your Light Table's theme, for example:

```css
.linked-with-editor {
  background-color: steelblue;
}
```

## Usage

Hit `ctrl+space` (or `command` for mac users) and type "link with editor".

Select this choice, and the workspace should now display (and highlight if you
did the CSS config) the file being edited.

## Known issues

* Sometimes the plugin has no effect, and the workspace does not wriggle at
  all. Must investigate on this.

## TODO

* use for CSS styling
  <https://github.com/LightTable/LightTable/wiki/FAQ#how-do-i-load-custom-css-files-at-startup>
* raise an event to display workspace sidebar if required
* change behavior file format
* add keymap

## Changelog

* 0.0.1 Initial release.

## License

Copyright © 2015 Olivier Barbeau. All rights reserved.

The use and distribution terms for this software are covered by the
Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
which can be found in the file LICENSE at the root of this distribution.
By using this software in any fashion, you are agreeing to be bound by
the terms of this license.
You must not remove this notice, or any other, from this software.
