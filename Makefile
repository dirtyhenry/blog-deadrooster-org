install:
	yarn install
	yarn bower:install
	bundle install

run:
	bundle exec jekyll serve
