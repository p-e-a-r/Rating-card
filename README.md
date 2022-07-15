# Rating and Thank you Card App

## Demo



https://user-images.githubusercontent.com/107425698/179251406-772039d8-e984-4447-b864-e7dbadd9adad.mp4







## Features

- Color change on chover
- Card change on submit
- Display selected rating on another Card
- Animation on change




## Lessons Learned

The biggest challenge was to change ratings colors. When you click on another one, add color to it and remove from the previous.
I knew I had to use loops and toggle/remove classes but I couldn't figure out the logic. Especially since all list elements had same class name to automate it.
I created an array from the list and iterated through it to add eventListeners and then iterate again to check for accordance, if so, CONTINUE ( I learned it skips through instance instead of going out like 'break' does), else remove class from all other.
All comments are in my code.
Possibly I could skip conversion to array and just use the list.   

I also learned that getElementsByClassName returns an 'array', let's say, and you can't add eventListener to it. You can only add them to single items.
I learned about for(const "elem" in "list") functionality.

Besides css practice I learned to use keyframes.
## Acknowledgements

 - Design from FrontEndMentor.io
