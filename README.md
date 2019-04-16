# Morellian Analysis for Browsers

This repository contains additional details with code from the article 
entitled "Morellian Analysis for Browsers: Making Web Authentication 
Stronger With Canvas Fingerprinting" published at the DIMVA conference in 2019 [[PDF]](https://plaperdr.github.io/assets/documents/canvasauthentication_dimva2019.pdf).
This repository is divided into three parts:

* [Preliminary analysis](https://github.com/plaperdr/morellian-canvas/tree/master/Preliminary%20analysis): This folder presents additional details on our preliminary analysis.
We performed three different phases of testing to fine tune our mechanism.

* [Prototype](https://github.com/plaperdr/morellian-canvas/tree/master/Prototype): This folder presents the prototype of our canvas authentication mechanism
with the generation of the canvas challenges and the rendering of canvas images. The complete
source code of our solution can be found the **code** folder.

* [MFA Scheme](https://github.com/plaperdr/morellian-canvas/tree/master/MFA%20Scheme): 
This folder presents an example of this system can be integrated in a multi-factor 
authentication scheme.

Finally, you can see every preliminary canvas tests running in your browser 
[HERE](https://plaperdr.github.io/morellian-canvas/Preliminary%20analysis/webpage/canvas.html) 
and you can test a demo page of our canvas mechanism 
[HERE](https://plaperdr.github.io/morellian-canvas/Prototype/webpage/picassauth.html).
