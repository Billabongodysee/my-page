# MLP Made — Website

A simple, no-build-tools website: plain HTML, CSS, and a little vanilla JS.
No frameworks, no server required — just files you can open in a browser
or host anywhere, and easy to reference later when you set up a Shopify or
Square store.

## Structure

```
index.html          Home page
shop.html            Full product catalog, grouped by category
blog.html            Blog/content post listing
about.html           Shop story + process
contact.html         Contact form (see note below) + contact details
posts/               One HTML file per blog post
css/style.css         All site styling (colors/fonts are CSS variables at the top)
js/main.js            Mobile menu + small contact-page helpers
data/products.csv     Your product list in Shopify's CSV import format
```

## Viewing it locally

Just open `index.html` in a browser — no build step, no server needed.
(Some browsers restrict JS on `file://` pages; if the mobile menu doesn't
toggle, run a quick local server instead, e.g. `python3 -m http.server`
from this folder, then visit `http://localhost:8000`.)

## Things to customize before this goes live

- **Contact form**: `contact.html` currently uses a `mailto:` link, which
  opens the visitor's email app instead of submitting silently. Replace
  `YOUREMAIL@example.com` in `contact.html` with your real address. If you
  want real inline submissions instead, look at a free service like
  [Formspree](https://formspree.io).
- **Placeholders**: search for bracketed text like `[Replace with...]` and
  `[YOUREMAIL@example.com]` in `about.html` and `contact.html` and fill
  those in.
- **Photos**: every product/post currently uses a plain "Photo coming
  soon" placeholder box instead of a real image (`.thumb` divs in the
  HTML). Once you have product photos, replace those divs with
  `<img src="images/your-photo.jpg" alt="...">` — an `images/` folder is
  already set up for this.
- **Prices**: everything in `shop.html` and `data/products.csv` uses
  placeholder pricing — update both to match.
- **Social links**: the `#` links in the footer and contact page need your
  actual Instagram/Facebook/Etsy URLs.

## Moving to Shopify or Square later

Neither platform lets you upload a plain HTML site as-is (they use their
own theme/page systems), but this site is set up to make that transition
easy:

- **`data/products.csv`** is already formatted as a Shopify product import
  file (Settings → Products → Import). Square has its own item-import CSV
  format that takes the same underlying info (title, description, price,
  SKU) if you go that route instead.
- Every product and blog post lives in its own clearly-labeled block in
  the HTML, so copying titles/descriptions/prices over to whichever
  platform you pick is straightforward — nothing is generated dynamically
  or hidden in a database.
- **One thing to check before listing it**: the custom handgun slide
  engraving service is marked `draft` (not published) in
  `data/products.csv` on purpose — both Shopify and Square have specific
  policies around firearm-related listings, so it's worth confirming
  what's allowed under whichever platform's rules before publishing that
  one.

Until then, this site works fine on its own — you can host it for free on
something like GitHub Pages, Netlify, or Cloudflare Pages.
