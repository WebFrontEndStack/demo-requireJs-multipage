# demo-requireJs-multipage

This project shows how to set up a multi-page requirejs-based project that has
the following goals:

* Each page uses a mix of common and page-specific modules.
* All pages share the same requirejs config.
* After an optimization build, the common items should be in a shared common
layer, and the page-specific modules should be in a page-specific layer.
* The HTML page should not have to be changed after doing the build.
* **[shim config](http://requirejs.org/docs/api.html#config-shim)** is used to
load Backbone and underscore.

## Project layout

This project has the following layout:

* **tools**: The requirejs optimizer, **r.js**, and the optimizer config,
**build.js.**
* **www**: The code that runs in the browser while in development mode.
* **www-built**: Generated after an optimizer build. Contains the built code
that can be deployed to the live site.

This **www** has the following layout:

* **page1.html**: page 1 of the app.
* **page2.html**: page 2 of the app.
* **page3.html**: page 3 of the app.
* **js**
    * **app**: the directory to store app-specific modules.
    * **lib**: the directory to hold third party modules, like jQuery.
    * **common.js**: contains the requirejs config, and it will be the build
    target for the set of common modules.
    * **page1.js**: used for the data-main for page1.html. Loads the common
    module, then loads **app/main1**, the main module for page 1.
    * **page2.js**: used for the data-main for page2.html. Loads the common
    module, then loads **app/main2**, the main module for page 2.

To optimize, run:

    node tools/r.js -o tools/build.js

That build command creates an optimized version of the project in a
**www-built** directory. The **js/common.js** file will contain all the common
modules. **js/page1.js** will contain the page1-specific modules,
**js/page2.js** will contain the page2-specific modules.
