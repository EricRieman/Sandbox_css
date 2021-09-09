# CSS Tutorial - Zero to Hero
[youtube](https://www.youtube.com/watch?v=1Rs2ND1ryYc&ab_channel=freeCodeCamp.org)   
[github](https://github.com/Video-Lab/css-course-content)
## Table of Contents
- [Creating and linking a style sheet](#Creating-and-linking-a-style-sheet)
- [Basics](#Basics)
- [Selectors](1-Selectors.md)
- [Properties](2-Colors.md)
- [Unit Types](3-UnitTypes.md)

CSS standes for cascading style sheet, and it is used to style html elements on a webpage. Html is the structure of a web page, css is the visuals. Css is responsible for layout/design, animations, font changes, organization and grid systems.

# Creating and linking a style sheet

Create a file named style.css, the name of the file is not important, but 'style' is generally used. The important part is the extension, .css. In vanilla html, a style sheet is linked to a page by using the <link> element:

````html
<link rel="stylesheet" type="text/css" href="./style.css">
````

However, becasue I am using react in this example, we can import the css file in the component directly. Both will work, as vanilla react requires an index.html page, so it can be imported there, or in the App component. Rememeber, importing a .css file in any component will apply to the entire project, not just the component it is imported in. So, it is good practice to import in the head component, index.js, unless you are using css modules.

````js
import style from './style.css'
````

## Basics
All CSS code consists of a selector (covered in last section), a block (the {}), and the properites within that block. The properties are how css defines the actual style. Each style is associated with a property, and most properties take a value(s). The property/value is separated by a : and ends with ;. Below is an outline of the stuture, not real code:

````css
selector {
  property: value;
  property2: value2;
}
````