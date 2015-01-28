# blog-deadrooster-org

The Dead Rooster Blog

## Setup

    npm install   # Install Grunt and Bower
    bower install # Install JS and CSS dependencies

## Deployment

This site is deployed via GitHub Pages facility. From your developer environment, create 2 clones of this 
repository: 

- one for the Jekyll content
- one called `blog-deadrooster-org-gh-pages` that should be at the same level than the first one

To deploy:

1. From the Jekyll clone, type: `grunt`
2. From the `gh-pages` clone, commit and push modifications

## Acknowledgements

- This site runs with [Jekyll][http://jekyllrb.com/]
- The Grunt/Bower setup was inspired by [this post][http://www.pletscher.org/blog/2013/05/27/website.html]
