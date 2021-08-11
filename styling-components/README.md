# Different ways to style components in React

## Inline styles
Written in a javasript object and can be assigned directly to an html element. This supersedes any other styling applied to that element. Objects can be exported from a file so it can be shared across files, but still must be imported and assigned everywhere it is used. We cant take advantage of selectors, sudo selectors, and sudo elements so its best practice to avoid using inline styles, unless you need a very specific styling for a particular element.

## Styled components
A popular React library which allows you to encode styles in react components. It uses a special java script syntax known as taged templates. This way, you can work with real css, and just a js object. It supports selects, sudo selectors and sudo elements, making it a prefered option over inline styles for mid to large aplications. 

[styled components](https://styled-components.com/)

install the package using:

````bash 
npm install --save styled-components
````

Follow App.js for how to setup the styled class, which contains methods that correspond to html elements. Choose the element type you want to style, generaly this would be div, but you can choose the styled component to be any html element, like main or nav. To pass data into this tagged template, we use `` after the method name. Then inside the 2 back ticks, we write our normal css code.