workflow "Deploy to Github Pages" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Deploy to GitHub Pages" {
  uses = "JamesIves/github-pages-deploy-action@1.0.8"
  secrets = ["ACCESS_TOKEN"]
  env = {
    BRANCH = "gh-pages"
    FOLDER = "out"
    BUILD_SCRIPT = "npm install && npm run-script build && npm run-script export"
  }
}
