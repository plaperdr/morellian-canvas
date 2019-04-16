## Phase 3 of the canvas API study

The third and final phase of our study consisted of 10 tests to further enhance the diversity between devices.
We focused on analyzing the impact of Bezier curves and shadows on the overall entropy.
If every collected fingerprint presents a unique rendering, the maximum observable entropy for a test from the dataset of this second phase of more than 23,000 fingerprints is 14.50 bits.
In the end, shadows and curves have a small impact on the global entropy but they still help to further differentiate devices.
This phase also echoes the conclusion of the other two phases: bigger canvas elements increase the entropy of the performed tests. 
This is logical as large elements have better defined edges that could be lost if reduced to a very small surface of pixels.

| Test | Entropy (bits) | Size (WxH)| Image |
| :-----: |:-------------:| :-----: | :-----: |
| 1  | 7.68 | 400x90| ![](images/can1.png)  |
| 2  | 7.71 | 400x90| ![](images/can2.png)  |
| 3  | 7.70 | 400x90| ![](images/can3.png)  |
| 4  | 7.71 | 400x90| ![](images/can4.png)  |
| 5  | 7.75 | 400x90| ![](images/can5.png)  |
| 6  | 7.81 | 400x90| ![](images/can6.png)  |
| 7  | 7.84 | 400x90| ![](images/can7.png)  |
| 8  | 7.84 | 400x90| ![](images/can8.png)  |
| 9  | 8.05 | 400x90| ![](images/can9.png)  |
| 10 | 8.11 | 400x90| ![](images/can10.png)  |

Test n°1 is the base rendering for our final phase: a string with an emoji and a radial gradient.
It is identical to the base rendering of the second phase.
Test n°2 introduces a quadratic Bezier curve.
Test n°3 switches to a cubic Bezier curve.
Test n°4 mixes these two curves in a single rendering.
Test n°5 investigates the impact of increasing the width of a drawn curve.
Test n°6 takes the base rendering and adds a black shadow around the rendered string.
Test n°7 is identical to the previous one but with an orange shadow.
Test n°8 doubles the strength of the shadow blur (from 5 to 10).
Test n°9 is a mix of tests n°2, 3 and 5: a light shadow with two Bezier curves.
The final test increases the thickness of the curves.

In the end, **shadows** and **curves** have a small impact on the global entropy but they still help to further differentiate devices.
This phase also echoes the conclusion of the other two phases: **bigger canvas elements increase the entropy of the performed tests**. 
This is logical as large elements have better defined edges that could be lost if reduced to a very small surface of pixels.
