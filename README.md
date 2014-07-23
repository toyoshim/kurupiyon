縦書きエディタ ♡ クルピヨン！
==============================

クルピヨン！ is a vertical writing tool for Japanese documents.

* NOTICE *
----------
This application is still under development.

How to checkout and build
-------------------------
    $ npm install -g bower
    $ git clone https://github.com/toyoshim/kurupiyon.git
    $ cd kurupiyon
    $ npm install

Serve on your local node.js
---------------------------
    $ PORT=8080 foreman start

That's it. Now, you can access it at http://localhost:8080/.

Deploying to Heroku
-------------------
It just works™ by pushing it to Heroku.

    $ heroku apps:create <name>
    $ git push heroku master

Chrome Apps v2
--------------
Chrome Apps version of binaries are stored in chrome/.