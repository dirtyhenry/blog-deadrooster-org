namespace :dead_rooster do
  desc "Local production build"
  task :build_prod do
    sh "bundle exec jekyll build --config _config.yml,_config_production.yml"
  end

  desc "Local development build (without watch)"
  task :build_dev do
    sh "bundle exec jekyll build --config _config.yml"
  end

  desc "Local development build (with watch)"
  task :build_dev_watch do
    sh "bundle exec jekyll build --config _config.yml --watch"
  end

  desc "Create directories for 1st setup time"
  task :create_dir do
    sh "git clone -b gh-pages https://github.com/dirtyhenry/blog-deadrooster-org.git ~/Developer/build/blog-deadrooster-org-gh-pages"
    sh "mkdir -p ~/Developer/build/blog-deadrooster-org-pow"
    sh "ln -Ffvs ~/Developer/build/blog-deadrooster-org-gh-pages ~/Developer/build/blog-deadrooster-org-pow/public"
    sh "cd ~/.pow && ln -s ~/Developer/build/blog-deadrooster-org-pow blog-deadrooster-org"
  end
end
