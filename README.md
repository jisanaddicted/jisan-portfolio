# Static Portfolio for Netlify Hosting

A 100% static, lightning-fast portfolio website built for Shopify & Web Developers. It requires **no database, no backend servers, and no build steps**. Ready for instant deployment to **Netlify**!

---

## 🚀 How to Deploy to Netlify

### Option 1: Netlify Drag & Drop (Easiest — 30 Seconds)
1. Log in to your [Netlify](https://app.netlify.com) dashboard.
2. Go to the **Sites** tab.
3. Drag and drop this entire `frontend` folder directly into the **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"** area.
4. Netlify will upload and publish your site with a live URL instantly!

---

### Option 2: Deploy via GitHub / GitLab
If you push your repository to GitHub:
1. In Netlify, click **"Add new site"** > **"Import an existing project"**.
2. Select your repository.
3. Set the deployment settings:
   - **Base directory**: `frontend`
   - **Build command**: *(leave blank)*
   - **Publish directory**: `frontend` (or `.` if base directory is set to `frontend`)
4. Click **Deploy Site**.

---

## 📬 Free Contact Form Handling (Netlify Forms)
The contact form in `index.html` is pre-configured with Netlify Forms (`data-netlify="true"`). 

When hosted on Netlify:
* Any visitor who submits the contact form will have their message automatically captured in your **Netlify Dashboard > Forms** tab.
* You can also configure email notifications in Netlify under **Site configuration > Forms > Form notifications** to get an email directly to your inbox whenever someone contacts you!

---

## ✏️ How to Customize Your Portfolio Data
To change your name, projects, skills, email, metrics, or testimonials:
* Open `data.js`
* Edit the values in `portfolioData`
* Save and re-upload to Netlify! All changes will reflect immediately without any build step.

### 🖼️ Changing the Logo
The header and footer logo is controlled by `profile.headerLogoUrl` in `data.js`:
* Point it at any image — a local file such as `"images/shopify-logo.png"`, or any hosted URL.
* Set it to `""` to fall back to the built-in Lucide shopping-bag icon.
* If the image ever fails to load, the icon is shown automatically instead of a broken image.

---

## 📁 File Structure
* `index.html` — Semantic HTML5 portfolio markup with Tailwind CSS styling and Lucide icons.
* `data.js` — All static profile, projects, metrics, skills, and testimonials data.
* `app.js` — Interactive UI logic (category filtering, case study modal popup, mobile menu, Netlify form handling).
* `styles.css` — Micro-interactions, smooth scrolling, and animations.
* `images/` — Local image assets (e.g. the site logo and case study screenshots).
* `netlify.toml` — Netlify headers and caching rules.
* `_redirects` — Netlify rewrite and routing rules.
