dev:
	yarn run start

publish:
	npm run publish

book:
	npm run storybook

prod:
	yarn publish

dual:
	$(MAKE) jarvis && $(MAKE) book

#Updaling Build  need to publish as well
