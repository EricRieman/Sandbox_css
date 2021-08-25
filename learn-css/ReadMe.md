# CSS Tutorial - Zero to Hero
[youtube](https://www.youtube.com/watch?v=1Rs2ND1ryYc&ab_channel=freeCodeCamp.org)
[github](https://github.com/Video-Lab/css-course-content)

CSS standes for cascading style sheet, and it is used to style html elements on a webpage. Html is the structure of a web page, css is the visuals. Css is responsible for layout/design, animations, font changes, organization and grid systems.

## Creating and linked a style sheet

Create a file named style.css, the name of the file is not important, but 'style' is generally used. The important part is the extension, .css. In vanilla html, a style sheet is linked to a page by using the <link> element:

````html
<link rel="stylesheet" type="text/css" href="./style.css">
````

However, becasue I am using react in this example, we can import the css file in the component directly. Both will work, as vanilla react requires an index.html page, so it can be imported there, or in the App component. Rememeber, importing a .css file in any component will apply to the entire project, not just the component it is imported in.

````js
import style from './style.css'
````

## Selectors and Properties
Selectors are a way of grabbing and maipulating HTML. There are any types of selctors, and they all work in different ways, and are used for different purposes. Each have thier own specificity, which is a ranking order on which property is applied, if two or more of the same styles are applied. 

- Element selector
  Can select entire elements without any special charaters and applies to all the elements on the page with that tag. It is at the bottom of the specificity scale.

  ````css
  p {
    color: red
  }
  ````
  Will make all paragraphs red.

- Class selector
  This is used to select elements with a certain class name.

  24:02