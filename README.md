# SCOTTeVEST Frontend Templates

## Tools used

### Grunt / Node.js

Grunt is a "task runner" built in Node.js, a JavaScript runtime used in many popular applications.
Grunt is being utilized to "watch" our various languages (Twig, Sass, and JavaScript), and compile them
into final web-ready assets.

#### Installing Node and Grunt

First, you will need to install Node and NPM: [https://nodejs.org/en/](https://nodejs.org/en/)

Following installation, run the following from the root folder where this README file is located:

    npm install

This will install Grunt and all of the code that Grunt will need to run its tasks.

#### Running a web server for development

The following command can be run from the folder where this file is located - it will start up a local
web server using Express, a Node.js server application, and actively watch for any changes in the code's
Twig, Sass, or JavaScript files, and automatically update the local server with those changes in real-time.

To enable the development server, run the following in a terminal / command prompt, and leave it running:

    grunt server

#### Compiling to final HTML, CSS, and JS

To compile all of the files out to final HTML, CSS, and JS, run the following command:

    grunt build

Following this, you will have freshly-compiled HTML, CSS, and JS in the /build/html folder.

### Twig

Twig has been used as a templating language for assembling the frontend HTML templates.
Upon handoff of this code, Twig may be continued to be used to generate the markup,
or the code could be broken up into server-side includes in another templating language
(such as .shtml, which looks to be in use already on SCOTTeVEST).

All Twig templates are contained in the /views folder.

Documentation on Twig templating: [http://twig.sensiolabs.org/doc/templates.html](http://twig.sensiolabs.org/doc/templates.html)

### Foundation 6

Foundation is a widely-used framework for building web applications. It brings in ready-made
styles, code, and classes that can be used to quickly generate responsive grids, and common web components.
We have made extensive use of Foundation's grid system and some of its web components (buttons, tabs, etc.)

A very small example of Foundation would include its classes - a developer can quickly direct Foundation
as to how many columns wide an element should be on small, medium, and large screens with some simple classes:

    <div class="small-12 medium-6 large-5 columns end">Some content.</div>

The above code would direct Foundation to set the element to occupy all 12 columns (the full screen) on mobile
devices, six columns on medium-sized screens (so half the screen on tablets), and five columns on large screens
(so 5/12's of the screen on screens larger than 1024px).

Full documentation for using Foundation is available at [http://foundation.zurb.com/sites/docs/](http://foundation.zurb.com/sites/docs/)

When browsing Foundation's documentation, be sure to look at their documentation for Foundation 6, and not Foundation 5.

### Sass (SCSS style)

Sass is a preprocessor for writing CSS - this means that instead of writing CSS (which can be very repetitive and does not easily
allow for breaking up large amounts of code into managable fragments), we are using a CSS-like language that, when compiled by Grunt,
exports regular CSS that a browser can understand.

Our main Sass file is saved at `/public/scss/main.scss`. From there it imports fragments that are unique to each page
or component of the site, allowing for the volume of code to be far more manageable.

A great guide to learning Sass is available on the Sass website (we are using the SCSS variant of Sass): [http://sass-lang.com/guide](http://sass-lang.com/guide)

## Version Control

Boston Interactive uses Git as its system for version control. Version control allows for changes to files to be tracked, commited,
etc. Git can be run from the command line, or from an application such as the Github desktop app, or Tower for Mac.

How to install Git: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

The basics of how to use Git: [https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

The End
