# create-makefile

CLI for create a makefile with command `help`

```bash
## With npx
npx create-makefile
## With yarn
yarn create makefile
```

## makefile example

```makefile
.PHONY: help

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
```
