import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { categories } from '../../data/shopData';
import { siteConfig } from '../../config/siteConfig';

const defaultKeywords = [
  'best sports shop in Trichy',
  'sports goods shop in Trichy',
  'sports equipment shop in Tiruchirappalli',
  'sports store Trichy',
  'Jai Sports Trichy',
  'Jai Sports',
  'sports shop near me',
  'trophy shop in Trichy',
];

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function Seo({ title, description, keywords = [], noindex = false }) {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const categorySlug = params.get('category');
    const category = categories.find((item) => item.slug === categorySlug);
    const canonicalParams = new URLSearchParams();
    if (pathname === '/products' && category) {
      canonicalParams.set('category', category.slug);
    }

    const canonicalUrl = new URL(pathname, window.location.origin);
    if (canonicalParams.toString()) canonicalUrl.search = canonicalParams.toString();

    const pageTitle = title || `${siteConfig.brandName} | Sports Shop in Trichy`;
    const pageDescription = description || siteConfig.shortDescription;
    const pageKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');
    const shouldNoindex = noindex || (pathname === '/products' && params.has('search'));
    const pageName = pathname === '/products' && category
      ? `${category.name} Products`
      : pathname === '/'
        ? 'Home'
        : pathname.slice(1).replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
    const breadcrumbNames = pathname === '/products'
      ? category
        ? ['Home', 'Products', category.name]
        : ['Home', 'Products']
      : pathname === '/'
        ? ['Home']
        : ['Home', pageName];

    document.title = pageTitle;
    setMeta('name', 'description', pageDescription);
    setMeta('name', 'keywords', pageKeywords);
    setMeta('name', 'robots', shouldNoindex ? 'noindex,follow' : 'index,follow');
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonicalUrl.href);
    setMeta('property', 'og:site_name', siteConfig.brandName);
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl.href;

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SportingGoodsStore',
          '@id': `${window.location.origin}/#store`,
          name: siteConfig.brandName,
          description: siteConfig.shortDescription,
          url: `${window.location.origin}/`,
          telephone: `+91-${siteConfig.displayPhone.replace(/[^0-9]/g, '').replace(/^0/, '')}`,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: `${siteConfig.address.street}, ${siteConfig.address.area}`,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.pincode,
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
          },
          priceRange: '₹₹',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:30',
              closes: '21:30',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Sunday',
              opens: '10:00',
              closes: '21:00',
            },
          ],
          sameAs: Object.values(siteConfig.socialLinks),
        },
        {
          '@type': 'WebSite',
          '@id': `${window.location.origin}/#website`,
          name: siteConfig.brandName,
          url: `${window.location.origin}/`,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${window.location.origin}/products?search={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'WebPage',
          name: pageTitle,
          description: pageDescription,
          url: canonicalUrl.href,
          isPartOf: { '@id': `${window.location.origin}/#website` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbNames.map((name, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name,
              item: index === 0
                ? `${window.location.origin}/`
                : index === 1 && pathname === '/products'
                  ? `${window.location.origin}/products`
                  : canonicalUrl.href,
            })),
          },
        },
      ],
    };

    let script = document.getElementById('jai-sports-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jai-sports-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [description, keywords, noindex, pathname, search, title]);

  return null;
}
