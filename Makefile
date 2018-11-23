install:
	yarn install
	bundle install

build:
	yarn grunt
	bundle exec jekyll build

run:
	bundle exec jekyll serve

clean:
	rm -rf node_modules
