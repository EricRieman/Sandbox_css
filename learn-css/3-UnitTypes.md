# Unit Types
There are many units CSS uses to apply values to properties. There are two main types, relative and absolute. Asolute units are exactly what they measure to be, 100 pixels is 100 pixels. Realtive units are dependent on something else, like screen size. 

For example, by setting with width of an element to 70%, it ensures it will always be 70% width of it's parent. This is greate for responsive websites, becasue viewing on different screen sizes and changing the bowser window size, it will alwys be 70%.

## Table of Contents
- [Absolute units](#Absolute-units)
- [Relative units](#Relative-units)
- [Text manipulation](#Text-manipulation)
  - [Text decorationn](#Text-decorationn)
  - [Text transform](#Text-transform)
  - [Text alignment](#Text-alignment)
- [Font size, bold, style](#Font-size,-bold,-style)
  - [Font size](#Font-size)
  - [Font weight](#Font-weight)
  - [Font style](#Font-style)
- [Font families](#Font-families)
- [External fonts](#External-fonts)
## Absolute units
- centimeter (cm), will re-size exactly to a cm, no matter with the screen size.
- milimeters(mm)
- inches(in) 
- pixels(px)
- points(pt), a little bit bigger then a pixel
- 12 points(pc), the size of 12 points

   The code below chages all text in the body of a back to exactly 1 inch
   ````css
   body {
     font-size: 2in;
   }
   ````

## Relative units
- percentage(%), always takes up that % size of it's parent element
- font size (em), size relative to current standard font size
- view width(vw), the viewport is the entire body width/height, and 1 vw is 1% of that width. This would be the same as % if the parent is the body.
- view height(vh), percent of the viewport's height

## Text manipulation
Text maniipulation includes everything you can change, no matter the font. The chosen font of the text has its own set of styling properties, like sizing, that is only applied to the font. Underlining and capitalization are not related to font, and is considered text manipulation.

### Text decorationn
The text-dectoration property allows us the style the lines in the text with include none, unerline, linethrough and overline.

   Link text by default is underlined, this is how we would remove that line
   ````css
   .link {
     text-dectoration: none;
   }
   ````

### Text transform
The text-transform property allows us to manipulate capitalization by making setting it to uppercase, lowercase, and capitalize

   Make all h1 elements upper case.
   ````css
   h1 {
     text-transform: uppercase;
   }
   ````

### Text alignment
The text-align property allows us to align, or justify, our text to the left, center, right and justify. The first 3 should be self-explanity, justify is used to force the text to match a certain width by adding spaces between words.

   Center the text withing the parent 
   ````css
   h1 {
     text-align: center;
   }
   ````

## Font size, bold, style
This properties are related to the font
### Font size
The text-size property allows us to change the size of the text. This should be done in a responsive way, to ensure it works on all screen sizes.

   This will make the current font 25% more then current
   ````css
   body {
     font-size: 1.25em;
   }
   ````
  If we set using pixel values, then it will not scale properly with different screen sizes (not responsive)

  ````css
    body {
      font-size: 40px;
    }
  ````

  ### Font weight
  The font-weight property determines the bolding of the font. The Max allowed is determined by the font being used. Most only support up to 800-900. Typically you start with 100 and add 100 untill you get the desiered thickness. Normal is around 400, headers are typically in the 800-900 range.

  Makes all the text thinner by about 50% normal 
  ````css
    body {
      font-weight: 200;
    }
  ````

### Font style
The font-style property is used for italicizing. It can be set to normal, italic, and oblique (more italic).
  This will make all text italic.
  ````css
    body {
      font-style: italic;
    }
  ````

  ## Font families
  A font family is a collection of fonts that have similar features. There are 3 main font families you can use, sarif, sans sarif, and monospace.

  Sarif fonts have lines at the ends of some letters and used commonly on academic papers, but can be dificult to read on a website. So, sans-sarif are fonts without those lines. Then in monospcae, all the characters have the same width, which is more comonly used in applications like code editors.

  - Popular sarif fonts: Times new roman, Georgia
  - Popular sans sarif fonts: Arial and calibri
  - Popular monospace fonts: Courier

  It is generally best to use sans serif fonts on a website. We can apply is using the font family property.

  ````css
  body {
    font family: sans sarif;
  }
  ````  
  This property can also be used to specify the font using a comma separator and if the font name contains spaces, use quotes to contain it. The code below will use the Times new roman font if it is available, else it will default to the standard sarif font. You may add as many as you want, and css will select the first available.
  ````css
  body {
    font family: "Times New Roman", sarif;
  }
  ````
## External fonts
2:37:18