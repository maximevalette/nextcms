.PHONY: help
.DEFAULT_GOAL := help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install Next CMS
	yarn create strapi-app backend --quickstart --no-run
	yarn --cwd ./backend strapi install graphql
	cd ./backend && npm install sqlite3 --save
	npx create-next-app -e basic-css frontend
	yarn --cwd ./frontend add @apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http graphql graphql-tag isomorphic-unfetch next-with-apollo @apollo/react-ssr react-ga
	rm -Rf ./frontend/pages ./frontend/styles ./frontend/components ./frontend/utils
	cp -R ./resources/Dockerfile ./frontend/
	cp -R ./resources/pages ./frontend/
	cp -R ./resources/styles ./frontend/
	cp -R ./resources/utils ./frontend/
	cp -R ./resources/components ./frontend/
	cp -R ./resources/apollo ./frontend/
	make start
reinstall: ## Reinstall Next CMS (Delete and install)
	rm -Rf backend/ frontend/
	make install
start: ## Start daemons
	yarn --cwd ./backend develop &
	yarn --cwd ./frontend dev &
stop: ## Stop daemons
	pkill -f yarn
restart: ## Restart daemons
	make stop
	make start
dist: ## Create the dist for Next CMS from files
	rm -Rf resources/.env resources/next.config.js resources/apollo resources/components resources/pages resources/styles resources/utils
	cp frontend/.env resources/
	cp frontend/next.config.js resources/
	cp -R frontend/apollo resources/
	cp -R frontend/components resources/
	cp -R frontend/pages resources/
	cp -R frontend/styles resources/
	cp -R frontend/utils resources/
package: ## Create the dist and launches a git commit
	make dist
	git commit -a