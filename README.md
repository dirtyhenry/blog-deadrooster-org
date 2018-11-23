# blog-deadrooster-org

The Dead Rooster Blog

## Setup

    make install

## Writing a new post

    uuidgen -hdr # Generate a new GUID

## Deployment

This site is deployed via GitHub Pages facility. From your developer environment, create 2 clones of this
repository:

- one for the Jekyll content
- one called `blog-deadrooster-org-gh-pages` that should be at the same level than the first one

To deploy:

1. From the `master` clone:

        grunt
        rake dead_rooster:build_prod

2. From the `gh-pages` clone, commit and push modifications

## Resources

- Some inspiration were not used but might be useful for the future:
    - [Common Elements Used in Wooden UI Design](http://www.webdesignerdepot.com/2011/03/common-elements-used-in-wooden-ui-design/)
    - [The Elements of Retro Web Design](http://www.webdesignerdepot.com/2011/01/the-elements-of-retro-web-design/)

## Acknowledgements

- This site runs with [Jekyll](http://jekyllrb.com/)
- The Grunt/Bower setup was inspired by [this post](http://www.pletscher.org/blog/2013/05/27/website.html)
