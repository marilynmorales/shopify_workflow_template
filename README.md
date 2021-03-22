## Shopify Workflow Template
Base template for Shopify development and deployment

* * *

## File Structure
### Add your Stylesheet
./src/styles

### Add your scripts
./src/scripts

### Add your shopify theme
./src/liquid
To reference scripts and styles add the following to your header

```liquid
// script
<script src="{{ 'index.js' | asset_url }}" defer="defer"></script>

// stylesheet
<link href='{{ 'main.css' | asset_url }}' rel='stylesheet' type='text/css' media='all' />

````


### Commands
| Type | Command |
| --- | --- |
| Create Config | npm run create:config -- --env=[development \| production] --store=[xxxx.myshopify.com] --password=[xxxx] --themeid=[xxxxx] |
| Build | npm run build |
| Deploy | npm run deploy |
| Watch | npm run watch |


## Set up automatic deployment
Uncomment the following lines in `./github/workflows/main.yml`
```yml
3 #on:
4 #  push:
5 #    branches: [ main ]
6 #  workflow_dispatch:
```
Create secrets in your repo with the following keys and their respective values\
**SHOPIFY_PROD_URL**\
**SHOPIFY_PROD_THEME_ID**\
**SHOPIFY_PROD_PASSWORD**

### :mag: Issues
Open up a [ticket](https://github.com/marilynmorales/shopify_workflow/issues/new)

* * *

#### Credit 
**Marilyn Morales**
* @marilynmorales 
* [marilynmorales.com](https://marilynmorales.com)
* [hi@marilynmorales.com](hi@marilynmorales.com)
