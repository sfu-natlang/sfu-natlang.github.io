SFU Natural Language Lab website (sfu-natlang.github.io)
=====================

Source files for the SFU natural language lab website using Jekyll
for content and Bootstrap for markup plus some custom Javascript.

## Web version

This website is hosted on Github Pages in the following repository:

    https://github.com/sfu-natlang/sfu-natlang.github.io.git
    git@github.com:sfu-natlang/sfu-natlang.github.io.git

If you have write access to this repository then to update the web
version all you need to do is update the repository, commit your
changes and push to github. The web version will be updated in a
few minutes by Github.

The website is built using [jekyll](http://jekyllrb.com/).

Please check that your changes did not break the website by using
a locally installed version of Jekyll and testing that the website
is built correctly **before** you push to Github (see below).

## Local version

To create a local version of the website, run:

    jekyll serve --config=_localconfig.yml 

And then go to `http://127.0.0.1:4000/` on any web browser to check
that everything is working as it should.

## Installing Jekyll

Tested with Ruby 2.1.1 and Jekyll 1.5.1

- unicode
- nokogiri
- RedCloth
- rdiscount
- bibtex-ruby
- citeproc-ruby
- csl-styles
- jekyll

All of the above can be installed from ruby gems. 

On the SFU RCG machines these gems are already installed for the
natlang ruby module, so there is no need for any setup besides
loading the one module.

