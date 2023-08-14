STATIC=/usr/share
VAR=/var
PROJECT=ai-market-research/web

all: build

node_modules:
	npx yarn install

build: node_modules
	npx yarn next telemetry disable
	NEXT_PUBLIC_API_URL="/api" npx yarn run build

install: node_modules
	mkdir -p $(DESTDIR)$(STATIC)/$(PROJECT)/
	cp -r out/* $(DESTDIR)$(STATIC)/$(PROJECT)/

clean:
	rm -rf out/ node_modules/
