UNCAP GEAR - project files

Open index.html in a browser to run the site (no build step needed).

index.html      One long page: home, most hired, catalogue, quotation, contact sections
css/style.css   All styling. Colours are the variables at the top (:root) and the lime (#c8f854), violet (#5b0fd6), black (#0a0a0a) values used throughout.
js/app.js       Products, filters, quotation maths, animations, page routing
assets/gifs/    Put your 360-degree GIFs here

Edit products:   the P array at the top of js/app.js (category, name, price per day, most-hired flag 1/0, gif).
Add a 360 GIF:   save it in assets/gifs/ and set gif:"assets/gifs/yourfile.gif" on that product.
Delivery fees:   the cm and dm options in index.html (value = fee in rand).
VAT rate:        search for .15 in js/app.js.
Quotation and contact buttons do not send anything yet: connect them to your email or a form service.

ADDING PRODUCT PHOTOS
Put photos in assets/images/ (about 800x600, JPG or WebP), then in js/app.js set img:"assets/images/name.jpg" on that product.
Items without a photo show a category illustration. A GIF, when set, takes priority and is also used for the 360-degree view.
Free-to-use photo sources (check each licence): unsplash.com, pexels.com, pixabay.com, commons.wikimedia.org
Search terms: "cinema camera", "camera lens", "field monitor", "wireless video transmitter", "v-mount battery", "led video light", "softbox", "shotgun microphone", "c-stand", "camera gimbal", "black fabric backdrop".

QUOTATION EMAIL + PDF
In js/app.js set COMPANY_EMAIL (top of file) to your address. On "Send quotation" the site builds a PDF (jsPDF, needs internet) and downloads it, then opens an email to your address with the details; the customer attaches the PDF.
For fully automatic sending (PDF attached, no customer steps) set QUOTE_ENDPOINT to a server or form service URL that accepts a multipart POST and emails it to you. A browser alone cannot send email.

PRODUCT DETAIL
Click a product to open it. In js/app.js, per product you can set: views:["assets/images/a.jpg","assets/images/b.jpg"] (extra picture views), gif (360), desc (description), how:["step 1","step 2"], yt:"https://www.youtube.com/watch?v=..." (video tutorial; if empty it opens a YouTube search for the product).
