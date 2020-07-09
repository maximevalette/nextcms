install:
	yarn create strapi-app backend --quickstart --no-run
	yarn --cwd ./backend strapi install graphql
	cd ./backend && npm install sqlite3 --save
	npx create-next-app frontend
	yarn --cwd ./frontend add @apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http graphql graphql-tag isomorphic-unfetch next-with-apollo @apollo/react-ssr react-ga
	rm -Rf ./frontend/pages ./frontend/styles ./frontend/components ./frontend/utils
	cp -R ./resources/pages ./frontend/
	cp -R ./resources/styles ./frontend/
	cp -R ./resources/utils ./frontend/
	cp -R ./resources/components ./frontend/
	make start
start:
	yarn --cwd ./backend develop &
	yarn --cwd ./frontend dev &
stop:
	pkill -f yarn
restart:
	make stop
	make start
package:
	rm -Rf ./backend ./frontend
