# Unit Types
There are many units CSS uses to apply values to properties. There are two main types, relative and absolute. Asolute units are exactly what they measure to be, 100 pixels is 100 pixels. Realtive units are dependent on something else, like screen size. 

For example, by setting with width of an element to 70%, it ensures it will always be 70% width of it's parent. This is greate for responsive websites, becasue viewing on different screen sizes and changing the bowser window size, it will alwys be 70%.

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
