import { categories, products } from '../data/shopData';

/**
 * Finds a category by its slug or ID
 * @param {string} categoryKey
 * @returns {Object|undefined}
 */
export function findCategory(categoryKey) {
  if (!categoryKey || categoryKey === 'all') return null;
  const key = categoryKey.toLowerCase();
  return categories.find(cat => cat.slug.toLowerCase() === key || cat.id.toLowerCase() === key);
}

/**
 * Checks if a category is marked as Coming Soon
 * @param {Object|string} categoryOrSlug
 * @returns {boolean}
 */
export function isCategoryComingSoon(categoryOrSlug) {
  if (!categoryOrSlug) return false;
  const cat = typeof categoryOrSlug === 'string' ? findCategory(categoryOrSlug) : categoryOrSlug;
  if (!cat) return false;
  return Boolean(cat.comingSoon);
}

/**
 * Returns list of active categories where products are available now
 * @returns {Array}
 */
export function getActiveCategories() {
  return categories.filter(c => !c.comingSoon);
}

/**
 * Filters products by selected category and search term.
 * Search matches against product name, description, and category name.
 * 
 * @param {Object} options
 * @param {string} [options.categorySlug] - Category slug or id
 * @param {string} [options.searchQuery] - Search query string
 * @returns {Array} Filtered list of products
 */
export function filterProducts({ categorySlug = '', searchQuery = '' } = {}) {
  let filtered = [...products];

  // 1. Filter by category
  if (categorySlug && categorySlug !== 'all') {
    const matchedCategory = findCategory(categorySlug);
    if (matchedCategory) {
      if (isCategoryComingSoon(matchedCategory)) {
        return [];
      }
      filtered = filtered.filter(p => p.categoryId === matchedCategory.id);
    } else {
      // Gracefully return empty array if invalid category was explicitly requested
      return [];
    }
  } else {
    // When viewing 'all', show active products from active categories
    filtered = filtered.filter(p => {
      const cat = categories.find(c => c.id === p.categoryId);
      return cat && !cat.comingSoon;
    });
  }

  // 2. Filter by search query
  const query = (searchQuery || '').trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(p => {
      const matchName = p.name.toLowerCase().includes(query);
      const matchDesc = p.description.toLowerCase().includes(query);
      const cat = categories.find(c => c.id === p.categoryId);
      const matchCat = cat ? cat.name.toLowerCase().includes(query) : false;
      return matchName || matchDesc || matchCat;
    });
  }

  return filtered;
}

/**
 * Returns formatted price or "Price on Request" if null
 * @param {number|null} price
 * @param {string} [currencySymbol='₹']
 * @returns {string}
 */
export function formatProductPrice(price, currencySymbol = '₹') {
  if (price === null || price === undefined || typeof price !== 'number') {
    return 'Price on Request';
  }
  return `${currencySymbol}${price.toLocaleString('en-IN')}`;
}
