## Shopify Workflow Template
Base template for Shopify development and deployment

* * *

### Commands
| Type | Command |
| --- | --- |
| Create Config | npm run create:config -- --env=[development \| production] --store=[xxxx.myshopify.com] --password=[xxxx] --themeid=[xxxxx] |
| Build | npm run build |
| Deploy | npm run deploy |
| Watch | npm run watch |


### Set up automatic deployment
Uncomment the following lines in `./github/workflows/main.yml`
```yml
3 #on:
4 #  push:
5 #    branches: [ main ]
6 #  workflow_dispatch:
```

*** :mag: Issues
Open up a [ticket](https://github.com/marilynmorales/shopify_workflow/issues/new)

* * *

#### Credit 
**Marilyn Morales**
* @marilynmorales 
* [marilynmorales.com](https://marilynmorales.com)
* [hi@marilynmorales.com](hi@marilynmorales.com)
