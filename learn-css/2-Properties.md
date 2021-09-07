# Properties
All CSS code consists of a selector (covered in last section), a block (the {}), and the properites within that block. The properties are how css defines the actual style. Each style is associated with a property, and most properties take a value(s). The property/value is separated by a : and ends with ;. Below is an outline of the stuture, not real code:

````css
selector {
  property: value;
  property2: value2;
}
````

## Table of Contents
- [Types of colors](#Types-of-colors)
- [Images in CSS](#Images-in-CSS)
- [Other background properties](#Other-background-properties)
- [Opacity and Transparency](#Opacity-and-Transparency)

## Types of colors
There are 3 different ways we can add color, you can read more about them and play around with coloring tools [here](https://htmlcolorcodes.com/)
- Colors given by name [all names](https://htmlcolorcodes.com/color-names/)
- Color by hex code
- Color by rgb

The below code will color h1,h2 and h3 all to the same red color.

````css
h1 {
  color: red;
}

h2 {
  color: #FF0000;
}

h3 {
  color: rgb(255,0,0);
}
````
The color property will color the actual element, but we can also color the background of an element using the property 'background' or 'background-color'. They both work the same for colors, but 'background' is much more flexible, as you can also add images and urls. 

The code below will color the background of myClass elements to blue
````css
.myClass {
  background: blue;
}
````
## Images in CSS
As said before, we can add images to our background. To do that, we need a link to an image, local or from the web.

The code below will apply an image from a wiki page to the background of any element with myImage.
````css
.myImage {
  background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ward_Cunningham%2C_Inventor_of_the_Wiki.webm/220px--Ward_Cunningham%2C_Inventor_of_the_Wiki.webm.jpg);
}
````

## Other background properties
CSS by default will try to fill the entire background area of the selected element. So when there is an area larger then the background image, it will repeat the image over the entire area. We may not want that to happen, so we can use the background-repeat property that can be assigned a value 'repeat' or 'no-repeat'.
````css
.myImage {
  background: url(../img/img-1.jpg);
  background-repeat: no-repeat;
}
````

We can also alter the size of the background using background-size, which can be used to re-size just the background area and not the size of the actual element. This can assigned a value cover, which tells CSS to cover the entire background. In combination with a picture, CSS will stretch or shink the background image in order to always cover the background. We can also assign background-size the value contain, but it will only re-size the image up to its maxium without messing with its proportions.

````css
.myImage {
  background: url(../img/img-1.jpg);
  background-size: cover;
}
````

## Opacity and Transparency
1:49