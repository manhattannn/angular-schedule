
DEMO
----
You should be able to view a demo at: http://manhattannn.github.io/angular-schedule

DEVELOPING
-------
This is a yeoman, grunt, angular project. You'll need those dependencies. Checkout angular-vm if you want an easier way to setup those items on various platforms. See https://github.com/frankcarey/angular-vm

When you build the project with grunt, it ends up replacing the javascript file for the floating table header.
 and you'll get an error of "jquery.floatThead-slim.js requires underscore." To fix, simply use `git reset --hard` to rever the change and everything should work.

The prototype schedule api url is likely to disappear eventually. A dump of some example data can be found in example.json.
