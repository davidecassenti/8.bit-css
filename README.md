# 8.bit CSS

> A minimal CSS framework that uses no classes to give pages a retro look.


## How to use

In order to use **8.bit** CSS, you should just import the CSS file into the page. File(s) are stored under `public/css/`.

These are the available themes:

| Theme     | Filename                         |
|-----------|----------------------------------|
| all       | `public/css/8.bit.css`           | 
| blue      | `public/css/8.bit-blue.css`      | 
| grayscale | `public/css/8.bit-grayscale.css` | 
| green     | `public/css/8.bit-green.css`     | 
| pink      | `public/css/8.bit-pink.css`      | 
| red       | `public/css/8.bit-red.css`       | 
| yellow    | `public/css/8.bit-yellow.css`    |

1. Get the appropriate file, based on the theme you want to use

2. Import the CSS in the page `<head>`:
    ```html
    <link rel="stylesheet" href="css/8.bit-green.css">
    ```

## Main File (all themes)

The file `8.bit.css` can be used to switch theme without loadind different files.
To do so, you should add a CSS class to the `html` tag: `theme-8bit-[color]`.

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
