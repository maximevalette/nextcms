install:
	yarn create strapi-app backend --quickstart --no-run
	yarn --cwd ./backend strapi install graphql
	cd ./backend && npm install sqlite3 --save
	npx create-next-app -e basic-css frontend
	yarn --cwd ./frontend add @apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http graphql graphql-tag isomorphic-unfetch next-with-apollo @apollo/react-ssr react-ga
	rm -Rf ./frontend/pages ./frontend/styles ./frontend/components ./frontend/utils
	cp -R ./resources/pages ./frontend/
	cp -R ./resources/styles ./frontend/
	cp -R ./resources/utils ./frontend/
	cp -R ./resources/components ./frontend/
	cp -R ./resources/apollo ./frontend/
	make start
reinstall:
	rm -Rf backend/ frontend/
	make install
start:
	yarn --cwd ./backend develop &
	yarn --cwd ./frontend dev &
stop:
	pkill -f yarn
restart:
	make stop
	make start
dist:
	rm -Rf resources/apollo resources/components resources/pages resources/styles resources/utils
	cp -R frontend/apollo resources/
	cp -R frontend/components resources/
	cp -R frontend/pages resources/
	cp -R frontend/styles resources/
	cp -R frontend/utils resources/
package:
	make dist
	git commit -a