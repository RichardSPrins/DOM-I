const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let navItems = document.querySelectorAll('nav > a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];
let banner = document.querySelector('.cta h1');
banner.innerHTML = `<h1>${siteContent['cta']['h1']}</h1>`
let headerImage = document.querySelector('#cta-img');
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);
let btn = document.querySelector('.cta button');
btn.textContent = siteContent['cta']['button'];  
let topTextHeading = document.querySelectorAll('.main-content .top-content h4');
topTextHeading[0].textContent = siteContent['main-content']['features-h4'];
topTextHeading[1].textContent = siteContent['main-content']['about-h4'];
let topTextInfo = document.querySelectorAll('.main-content .top-content p');
topTextInfo[0].textContent = siteContent['main-content']['features-content'];
topTextInfo[1].textContent = siteContent['main-content']['about-content'];
let bannerImg = document.getElementById('middle-img');
bannerImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let bottomTextHeading = document.querySelectorAll('.main-content .bottom-content h4');
bottomTextHeading[0].textContent = siteContent['main-content']['services-h4'];
bottomTextHeading[1].textContent = siteContent['main-content']['product-h4'];
bottomTextHeading[2].textContent = siteContent['main-content']['vision-h4'];
let bottomTextInfo = document.querySelectorAll('.main-content .bottom-content p');
bottomTextInfo[0].textContent = 