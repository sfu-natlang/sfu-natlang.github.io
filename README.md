SFU Natural Language Lab website 
=====================

http://sfu-natlang.github.io

Source files for the SFU natural language lab website using Jekyll
for content, Bootstrap for markup, plus some custom Javascript.

## Web version

This website is hosted on Github Pages in the following repository:

    https://github.com/sfu-natlang/sfu-natlang.github.io.git
    git@github.com:sfu-natlang/sfu-natlang.github.io.git

If you have write access to this repository, you can update the web
version by commiting changes and pushing them to Github. The
web version will be updated in a few minutes by Github.

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

Tested with Ruby 2.1.1 and Jekyll 1.5.1. Install the following
gems:

- unicode
- nokogiri
- RedCloth
- jekyll

The current version uses a Javascript reader for bibtex written by
[ramtinms](https://github.com/ramtinms).

The older version of this website used a Jekyll plugin written in
Ruby to process bibtex. The Jekyll plugin uses the following gems.

- rdiscount
- bibtex-ruby
- citeproc-ruby
- csl-styles

On the SFU RCG machines these gems are already installed for the
natlang ruby module, so there is no need for any setup besides
loading the Ruby module (check `module avail`).

