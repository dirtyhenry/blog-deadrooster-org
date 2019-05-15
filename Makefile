install:
	yarn install
	bundle install

build:
	yarn grunt
	bundle exec jekyll build

build-prod:
	yarn grunt
	bundle exec jekyll build --config _config.yml,_config_production.yml

run:
	bundle exec jekyll serve

clean:
	git clean -dfX

lint:
	bundle exec rubocop
