
# Selectors
Selectors are a way of grabbing and maipulating HTML. There are any types of selctors, and they all work in different ways, and are used for different purposes. Each have thier own specificity, which is a ranking order on which property is applied, if two or more of the same styles are applied. 

## Table of Contents
- [Common selectors](#Common-selectors)
  - [Element](#Element-selector)
  - [Class](#Class-selector)
  - [ID](#ID-selector)
  - [Inline](#Inline-style)
- [Pseudo Selectors](#Pseudo-selectors)
  - [Child Selectors](#Child-pseudo-selector)
  - [Element specific](#Element-specific-pseudo-selector)
- [Advanced Selectors](#Advanced-selectors)
  - [General sibling combinator](#General-sibling-combinator)
  - [Child selector](#Child-selector)
  - [Decendent selector](#Decendent-selector)
- [Attribute selector](#Attribute-selector)

## Common selectors
These element, class and id are the most commonly used selectors. Inline styling is not a seletor, but still covered here as it is another common way to sytle specific components. 

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

  ### Child selector
  Grabs all children of a certain element, denoted with a >. In the example below, all li elements inside a ul will be red;
    
  ````html
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
  ````

  ````css
  ul > li {
    color: red;
  }
  ````

  ### Decendent selector
  Grabs all children, and its children,... of a certain element, denoted with nothing. In the example below, all li elements inside a ul will be red, and becasue it has a ol child with li chilidren, those li will aslo be red.

  ````html
  <ul>
    <li>My unordered list</li>
    <li><ol>
      <li>
        My numbered list
      </li>
    </li></ol>

  </ul>
  ````

  ````css
  ul li {
    color: red;
  }
  ````

  Remember, specificity is still in play with these advanced selectors, but they can get very confusing. Generally, a more specific selector is greater on the specificity scale, and sudeo selectors are more specific then advanced selectors. Using selectors in complicated ways are generally not good practice, as spcificity can get complex. The most common selectors are element, class, and id, then using inline when nessesary, and to override any other selector, as inline is the highest on the specificity scale.

## Attribute selector
An attribute in html are the paremeter we pass into the element, for example, <img> has a src attribute: <img src="">. With attribute selectors, we can select elements based on their attributes and values. The code below styles all h2 elements with the class attribute set to subtitle. The two css blocks do exactly the same thing, as the class selector styles the exact same way, however, the attribute selector is only applied to h2 elements where the class selector is applied to all elements with that class.
  ````html
  <h2 class='subtitle'>text</h2>
  ````
  ````css
  h2[class=subtitle] {
    color: red;
  }

  .subtitle{
    color: red;
  }
  ````

  In the above example, the attribute value (subtitle) must matach exactly to the class name. However, we could also check if it just begins with that value, for example, if we assigned a class subtitle-2 but still want the same styling applied. We use ^= instead of =, shown below. This can we useful for the image src attribute, as local images are generaly stored in the same folder, so the starting path would be '../img/'

  ````html
  <h2 class='subtitle-2'>text</h2>
  ````
  ````css
  h2[class^=subtitle] {
    color: red;
  }
  ````

  Similarly, we can use $= to check if the attribute ends with the value.
  ````html
  <h2 class='subtitle-2'>text</h2>
  ````
  ````css
  h2[class$=-2] {
    color: red;
  }
  ````

  Similarly, we can use *= to check if the attribute is anywhere within the value.
  ````html
  <h2 class='subtitle-2'>text</h2>
  ````
  ````css
  h2[class*=title] {
    color: red;
  }
  ````

  There are many more attribute selectors, these are just some that are fairly common. 