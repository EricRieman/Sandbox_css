# Different ways to style components in React

## Inline Styles
Written in a javasript object and can be assigned directly to an html element. This supersedes any other styling applied to that element. Objects can be exported from a file so it can be shared across files, but still must be imported and assigned everywhere it is used. We cant take advantage of selectors, sudo selectors, and sudo elements so its best practice to avoid using inline styles, unless you need a very specific styling for a particular element.

## Styled Components
A popular React library which allows you to encode styles in react components. It uses a special java script syntax known as taged templates. This way, you can work with real css, and just a js object. It supports selects, sudo selectors and sudo elements, making it a prefered option over inline styles for mid to large aplications. 

[styled components](https://styled-components.com/)

install the package using:

````bash 
npm install --save styled-components
````

The styled class contains methods that correspond to html elements. Choose the element type you want to style, generaly this would be div, but you can choose the styled component to be any html element, like main or nav. To pass data into this tagged template, we use `` after the method name. Then inside the 2 back ticks, we write our normal css code, including selectors.

One problem with this is that all your code is still in a javascript file, even if you export it from its own file, its still a .js file. This is more of a personal choice, but its nice to separate your code in this way for readability.

## Vanila CSS
A vanilla css file may be imported in a specific component, but the styles defined in it will be injected direcly into the head of our html. This means there is no assignmnet, so a global style defined there will be applied to the entire site, not just that component. This can be dangerous, and why we use classes in css to assign specific styles. Then we must be carful not to use the same classname twice, which can get difficult on large scale projects. A common css class naming practice to avoid this is called [BEM](http://getbem.com/introduction/), blocks, elements, and modifiers.

## CSS Modules
This is a built time transformation that is supported by projects created by create-react-app. Using CSS modules will tell the build tool in the web pack (with the right plugins) to go over the css files and tweak the css class names to be garenteed unique, and then inject those names into the jsx code. This way, we can import a component specific css file and ensure it is only being used on that one component

To do that, we need to change the file name to my-file.module.css, the .module tell the compiler to use css modules. We then need to import the module.css file in a different way...

Vanilla css:
````js
import './style.css'
````

CSS module:
````js
import myName from './style.module.css'
````

Then, in the jsx code, you can access the classes defined in that css file using the dot operator: className={myName.button} instead of className='button'