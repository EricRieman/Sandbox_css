# CSS Tutorial - Zero to Hero
[youtube](https://www.youtube.com/watch?v=1Rs2ND1ryYc&ab_channel=freeCodeCamp.org) \
[github](https://github.com/Video-Lab/css-course-content)
## Table of Contents
- [Creating and linking a style sheet](#Creating-and-linking-a-style-sheet)
- [Selectors](#Selectors)
  - [Element](#Element-selector)
  - [Class](#Class-selector)
  - [ID](#ID-selector)
  - [Inline](#Inline-style)
- [Pseudo Selectors](#Pseudo-selectors)
  - [Child Selectors](#Child-pseudo-selector)
  - [Element specific](#Element-specific-pseudo-selector)
- [Advanced Selectors](#Advanced-selectors)
  - [General sibling combinator](#General-sibling-combinator)

CSS standes for cascading style sheet, and it is used to style html elements on a webpage. Html is the structure of a web page, css is the visuals. Css is responsible for layout/design, animations, font changes, organization and grid systems.

## Creating and linking a style sheet

Create a file named style.css, the name of the file is not important, but 'style' is generally used. The important part is the extension, .css. In vanilla html, a style sheet is linked to a page by using the <link> element:

````html
<link rel="stylesheet" type="text/css" href="./style.css">
````

However, becasue I am using react in this example, we can import the css file in the component directly. Both will work, as vanilla react requires an index.html page, so it can be imported there, or in the App component. Rememeber, importing a .css file in any component will apply to the entire project, not just the component it is imported in.

````js
import style from './style.css'
````

## Selectors
Selectors are a way of grabbing and maipulating HTML. There are any types of selctors, and they all work in different ways, and are used for different purposes. Each have thier own specificity, which is a ranking order on which property is applied, if two or more of the same styles are applied. 

### Element selector
  Can select entire elements without any special charaters and applies to all the elements on the page with that tag. It is at the bottom of the specificity scale.

  ````css
  p {
    color: red;
  }
  ````
  Will make all paragraphs red.

### Class selector
  This is used to select elements with a certain class name. Is used by all elements assigned that class name. This is after the element selector on the specificity scale.

  ````html
  <p class="my-class">Text</p>
  ````

  ````css
  .my-class {
    color: red;
  }
  ````

### ID selector
This is used to select elements with a certain id name. Can be used on all elements assigned that id. Unlike classes, it is meant to be used on one element at a time, though, it will still work if you do. This is after the class selector on the specificity scale.

  ````html
  <p id="my-id">Text</p>
  ````

  ````css
  #my-id {
    color: red;
  }
  ````

### Inline style
These are the most commonly used selectors, but there are more. We can also use inline styles to style elements. In that case, we define the css code directly in the html, and dont need a css file. These are the highest on the specificity scale
  ````html
  <p style="color: red;">Text</p>
  ````

### Specificty scale:
element > class > id > inline

## Pseudo selectors
A Pseudo selector is used to define a special state of a selector. It is applied with a : and then the special state. In the example below, all h2 elements will change to the color red when hovering over.
  ````css
 h2:hover {
    color: red;
  }
  ````
### Child pseudo selector
  There are many special states to pseudo selectors, another one is first-child and last-child, which can be used to style the first or last child element. In the example below, the first li and the last li will be colored red. There is also nth-child, which requires a paramenter specifing the number of tht child. The third element in the example below will also be red.
  
  ````html
  <ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
    <li>last</li>
  </ul>
  ````

  ````css
  li:first-child {
    color: red;
  }

  li:last-child {
    color: red;
  }

  li:nth-child(3) {
    color: red;
  }
  ````

### Element specific pseudo selector
  There is also the only-child selector, which will only style an element if there is only one child inside of it. This would be the case in the example below, so the li would be colored red.

  ````html
  <ul>
    <li>only</li>
  </ul>
  ````

  ````css
  li:olny-child {
    color: red;
  }
  ````
Many of the pseudo selector are element specific. For example, only the anchor tag has a link pseuodo selector. Below, the google link will appear red, then change to yellow after it has been clicked.

  ````html
  <a href="http://www.google.com" class="google-link">google</a>
  ````

  ````css
  .google-link:link {
    color: red;
  }

  .google-link:visited {
    color: yellow;
  }
  ````

  ## Advanced selectors

  ### Adjacent sibling
  The adjacent sibling selector selects every element that directly follows a different element. This is denoted with a +, in the example below, all achors that are chilren of h2 will be colored red.

  ````html
  <h2>
    <a>my-link</a>
  </h2>
  ````

  ````css
  h2 + a {
    color: red;
  }
  ````

### General sibling combinator
The general sibling combinator (or selector) can be used to grab a sibling element. A sibling means they share the same parent, and is denote with a ~. In the example below, the button will appear red.
  ````html
  <main>
    <textarea>Text</textarea>
    <button>My button</button>
  </main>
  ````

  ````css
  textarea ~ button {
    color: red;
  }
  ````

  ### Child advanced selector

  54:22