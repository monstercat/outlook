EXCLUDES=--exclude .git \
				 --exclude logs \
				 --exclude images \
				 --exclude model \

build: components index.js css/outlook.css index.html
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

index.html: index.jade
	jade -P < $^ > $@

deploydev:
	rsync $(EXCLUDES) -lrovz . connectdeploy:/data/monstercat/monstercat.com/site/yx2zhang

.PHONY: clean
