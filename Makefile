
build: components index.js outlook.css index.html
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

index.html: index.jade
	jade -P < $^ > $@

.PHONY: clean
