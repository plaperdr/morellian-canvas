## Generator

In **generator.js**, you will find the code associated with the generation of the canvas 
challenge.
The script is structured as follows:
* From line 1 to 21, you can find the limits of different variables for the canvas generation
process. These can be tweaked to change the number of artifacts or the way they are rendered
in the browser.
* From line 24 to 119, you can find different functions used by the challenge generator from
getting a random color to a random string.
* From line 122 to 156, the **generateChallenge()** function will return the canvas challenge,
i.e. the set of elements that should be rendered by the browser.

## PicassAuth

In **picassauth.js**, you will find the code associate with the rendering of the canvas image
from a canvas challenge. The **getData(challenge)** goes through all elements and render them one 
by one. It returns a textual representation of the image by using the **toDataURL()** function
of the Canvas API.  