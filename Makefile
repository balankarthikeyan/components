bundelPacking:
	yarn webpack --config webpack.config.js

autocompile: 
	yarn webpack --watch --config webpack.config.js

serve: 
	yarn webpack-dev-server --config  webpack.config.js --open

dev: 
	$(MAKE) bundelPacking && $(MAKE) serve && $(MAKE) autocompile

book: 
	yarn run storybook

publish:
	npm run publish

jarvis-prod:
	yarn run publish
