# Colors
All about the different ways we can add colors to our webpages.

## Table of Contents
- [Types of colors](#Types-of-colors)
- [Images in CSS](#Images-in-CSS)
- [Other background properties](#Other-background-properties)
- [Opacity and Transparency](#Opacity-and-Transparency)
- [Gradients](#Gradients)
  - [Linear gradient](#Linear-gradient)
  - [Radial gradients](#Radial-gradients)

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
There is another color value beyond rgb, and thats a or alpha, which can be used to set the transparency or opacity. It can be assigned a value between 0 and 1, 0 being fully tranparent and 1 is solid color. 

A white background with 50% opacity.
````css
.back {
  background: rgba( 255, 255, 255, 0.5);
}
````

## Gradients
A smooth change from one color to another. More then one color can be applied to the gradient, and so the transition would be between each. Ther are two types of gradients, radial and linear.

### Linear gradient 
are between two point, top to bottom, left to right, ect.

This example of a linear gradient will sart with red on the left, and transition to blue to the right.
````css
.back {
  background: linear-gradient( to right, red, blue );
}
````

We can add more colors and css will show the transition between each.
````css
.back {
  background: linear-gradient( to right, red, green, yellow, blue );
}
````

We can also apply a gradient to an alpha channel, in the example below, the green will slowly fade into the background
````css
.back {
  background: linear-gradient( to right, rgb(69, 245, 66), rgba(69, 245, 66, 0) );
}
````

The first parameter (to right) is the starting position. In css, this can be left, top, bottom and right. These can be combined (to top right) to start from corners. If you dont want to use words to define an exact starting and ending postion, you canuse angles. This is a way to defeine the angle your grandient will travel instead of on side/corner to another. 
````css
.back {
  background: linear-gradient( 215deg, rgb(69, 245, 66), rgba(69, 245, 66, 0) );
}
````

### Radial gradients 
are circular and move out from a center. Radial gradient do not have a specified direction, but instead define the % proportions of the colors. We radial gradients, background-size does nothing.

The below example will start in the center blue, and transition to red.
````css
.back {
  background: radial-gradient( blue, red );
}
````

We can add more colors and change propotions of colors we want less/more of.
````css
.back {
  background: radial-gradient( blue 20%, red 40%, green 55%);
}
````
We can also define the shape of the gradient. For example, non-square rectangles will end up with an elipse shape, the below code esures the gradient remains a circle.
````css
.back {
  background: radial-gradient( circle, blue 20%, red 40%, green 55%);
}
````
