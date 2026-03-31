BowlifeMemphis.com Website Pack
================================

This starter pack is prepared for:
- GitHub repo: rollingplains/MemphisArchery
- Custom domain: BowlifeMemphis.com

Included in this pack
---------------------
- Home page
- Event page
- Gallery page
- Vendors page
- Contact page
- Flyer image already loaded
- Uploaded logo pack added to assets/images/logo/
- Color palette updated to the approved brand colors
- CNAME file already set to BowlifeMemphis.com

Brand colors in this pack
-------------------------
- Deep Forest Green: #1F3D2B
- Olive Camo Green: #4F6B3A
- Accent Orange: #FF6A00
- Carbon Black: #111111
- Steel Gray: #6E7378

PowerShell push steps
---------------------
1. Extract the zip to a local folder, for example:
   C:\Users\jason\BowlifeMemphis

2. Open PowerShell in that folder:
   cd C:\Users\jason\BowlifeMemphis

3. Initialize git:
   git init
   git branch -M main

4. Connect to GitHub:
   git remote add origin https://github.com/rollingplains/MemphisArchery.git

   If the remote already exists:
   git remote set-url origin https://github.com/rollingplains/MemphisArchery.git

5. Commit the files:
   git add .
   git commit -m "Initial BowlifeMemphis website pack"

6. Push:
   git push -u origin main

7. In GitHub > Settings > Pages:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

8. Confirm the custom domain is set to:
   BowlifeMemphis.com

DNS notes
---------
At your registrar, point BowlifeMemphis.com to GitHub Pages using the standard GitHub Pages A records.
If you also want www, add a CNAME for www pointing to the correct GitHub Pages host.

Next recommended update
-----------------------
- Replace placeholder gallery panels with real competition photos
- Replace vendor placeholders with real sponsor logos and website links
- Swap the demo signup form action to Formspree or Google Forms
- Add your full event schedule and waiver text if desired


PHOTO SUBMISSIONS
- GitHub Pages cannot receive uploaded photos directly.
- Best option: create a Google Form with a file upload field or a shared Google Drive folder, then replace the placeholder upload button on gallery.html.
- After reviewing uploads, copy approved images into assets/images/events/ and update gallery.html or index.html.


Form integration update:
- The event registration form in events.html is live and posts to Formspree endpoint https://formspree.io/f/xykbwadr
- Form submissions go to rollingplainsarchery@gmail.com
- SMS alerts to (806) 204-0184 still require a separate automation such as Zapier + Twilio or another SMS service. That cannot be completed by static website files alone.
