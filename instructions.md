This is a new Vue fresh project. I want to create a website promoting my app Tandapp: https://play.google.com/store/apps/details?id=com.drodriguez.tandapp
Inspect Google Play app to know more about it. Also, if you want to see the project, it is /Users/dani/Desktop/repos/tandapp. This will be a commercial website to find extra users to my app. It won't have any contact form or anything special, it will just point out all the important features and the problem we are trying to fix with this app, so we need the SEO to be extremelly good. Check these improvements another page got about its SEO:

1. Google is not getting clear crawl files
2. There are duplicate versions of the site Both pixarc.co and www.pixarc.co load as separate pages. Also, the homepage seems to move to /landing. Google needs one clear main version, otherwise ranking signals can get split.
3. Wrong pages return 200 OK instead of 404 If someone visits a fake URL, the site still says the page exists, but shows blank content. Google may see these as low-quality empty pages.
4. The title and description are too generic The page title is just “Pixarc.” It should explain what Pixarc does, like “AI Mobile UI Generator & Native Code Export.” The description should also include keywords like mobile UI, AI design, native code, Figma, Flutter, React Native, SwiftUI, etc.
5. Most content depends on JavaScript The first HTML Google receives is almost empty. Google can render JavaScript, but it’s still better if the important SEO content is available immediately or server-rendered.
6. The site is missing proper social/SEO metadata It has Twitter tags, but not proper Open Graph tags, canonical tags, or structured data. These help search engines and link previews understand the page better.
7. Performance could hurt SEO The main JavaScript file is large, and caching/compression does not look optimized. This can slow down the page, especially on mobile.
8. There are not enough crawlable keyword pages Right now it’s mostly one landing page. They should add pages for things people might search.

Find extra suggestions about SEO online and implement them. Also use respectASO to find the best keywords for Spanish and English and support both languages in the website.

# Style

Use something fresh that doesn't scream AI slop. We need to follow the same design we have in the app. You could check files folders/files in the app like /Users/dani/Desktop/repos/tandapp/lib/core/theme.
It should work correctly on mobile.
You could use any images you want to make the website more attractive. For that, use https://placehold.co/ and put a name property on it like name="3 young people sitting together in a park looking at their phones" for example. Be really descriptive on that. I will replace the image later with the exact description and size. The image needs to make sense with the description, don't put just random images without any value.

# Content

As mentioned, describe the features of Tandapp, we need to understand the public we have in this app and show them an undertandable content, easy to read and catchy. Of course, we need to show the link to the app to Android and iOS:

- https://play.google.com/store/apps/details?id=com.drodriguez.tandapp
- https://apps.apple.com/us/app/tandapp-group-savings-tracker/id6763742265
  Show these 2 buttons using their repective icons

The landing page will have some info. This info should be descriptive enough to understand the app, but then talk about specific features (online tandas, savings, build trust, etc.) in other pages to improve SEO.

Mention clearly that the app is free to use.

Don't repeat content for the shake of having more description. We need real and good value. Take good websites online as a reference. You could also use Reddit for extra tips.

# Assets

Take everything you need from /Users/dani/Desktop/repos/tandapp/assets, specially the icon (assets/resources/icon.png) and paste those in this project.

# CI/CD

We need to deploy the website with every push. For that, take another website examples like /Users/dani/Desktop/repos/drodriguez-apps.github.io/.github/workflows/deploy.yml
