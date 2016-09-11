namespace :dead_rooster do
  # desc "Production Build"
  # task :build_prod do
  #   sh "jekyll build --config _config.yml,_config_production.yml"
  # end

  # desc "Staging Build"
  # task :build_staging do
  #   sh "jekyll build --config _config.yml,_config_staging.yml"
  # end

  # desc "Development Build"
  # task :build_dev do
  #   sh "jekyll build --config _config.yml"
  # end

  desc "Create directories"
  task :create_dir do
    sh "git clone -b gh-pages https://github.com/dirtyhenry/blog-deadrooster-org.git ~/Developer/build/blog-deadrooster-org-gh-pages"
    sh "mkdir -p ~/Developer/build/blog-deadrooster-org-pow"
    sh "ln -Ffvs ~/Developer/build/blog-deadrooster-org-gh-pages ~/Developer/build/blog-deadrooster-org-pow/public"
    sh "cd ~/.pow && ln -s ~/Developer/build/blog-deadrooster-org-pow blog-deadrooster-org"
  end
end
