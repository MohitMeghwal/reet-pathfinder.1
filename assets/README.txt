REET Pathfinder — Optional Custom Assets Folder
==============================================
App bina kisi external image ke bhi built-in inline SVG illustrations ke saath poori tarah chalta hai.
Agar aap custom anime-style/high-res images add karna chahein, to is folder me in exact naamon se files rakhein:

1. assets/logo.png            (Top-left brand logo, recommended 128x128 PNG)
2. assets/hero.jpg            (Dashboard hero banner illustration, recommended 840x420 JPG)
3. assets/subject-cdp.png     (CDP subject card icon, recommended 256x256 PNG)
4. assets/subject-hindi.png   (Hindi subject card icon, recommended 256x256 PNG)
5. assets/subject-english.png (English subject card icon, recommended 256x256 PNG)
6. assets/subject-maths.png   (Maths subject card icon, recommended 256x256 PNG)
7. assets/subject-evs.png     (EVS subject card icon, recommended 256x256 PNG)

Startup par app har image ko `new Image()` se check karta hai. Agar file maujood nahi hai to built-in SVG dikhta rahega (koi broken image nahi aayegi).
