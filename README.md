# 8.bit CSS

> A minimal CSS framework that uses no classes to give pages a retro look.


## How to use

In order to use **8.bit** CSS, you should just import the CSS file into the page. File(s) are stored under `public/css/`.

There are 4 available themes:

| Theme  | Filename                      |
|--------|-------------------------------|
| green  | `public/css/8.bit-green.css`  |
| yellow | `public/css/8.bit-yellow.css` |
| red    | `public/css/8.bit-red.css`    |
| blue   | `public/css/8.bit-blue.css`   |

1. Get the appropriate file, based on the theme you want to use

2. Import the CSS in the page `<head>`:
    ```html
    <link rel="stylesheet" href="css/8.bit-green.css">
    ```

## Customization

**8.bit CSS** uses CSS variables, to make it easy to customize the theme. See the available CSS variables in the `src/scss/_variables.scss`.

To customize a variable, add a `<style>` tag to the page, _after_ the import of the **8.bit CSS** file. In the tag, change the variables as follow:

```html
<style>
  :root {
    --font-family: 'Source Code Pro', monospace;
  }
</style>
```

_If you change the font with a custom one, don't forget to import the font file as well!_

Enjoy!
