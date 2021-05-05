## Shopify Workflow Template
Base template for Shopify development and deployment

## File Structure
### ./src/styles/main.scss
import styles here.

### ./src/scripts/index.js
Add scripts here

### ./src/liquid
Move the shopify theme folder here

To reference scripts and styles add the following to header

```liquid
// script
<script src="{{ 'index.js' | asset_url }}" defer="defer"></script>

// stylesheet
<link href='{{ 'main.css' | asset_url }}' rel='stylesheet' type='text/css' media='all' />

````


### Commands
| Type | Command |
| --- | --- |
| Create Config | npm run create:config -- --env=[development \| production] --store=[xxxx.myshopify.com] --password=[xxxx] --theme_id=[xxxxx] |
| Build | npm run build |
| Deploy | npm run deploy [--allow-live] |
| Watch | npm run watch |


## Set up automatic deployment
Uncomment the lines in `./github/workflows/main.yml`

Create secrets in the repo with the following keys and their respective values\
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
