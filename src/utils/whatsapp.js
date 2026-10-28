import { siteConfig } from '../config/siteConfig';

/**
 * Creates a WhatsApp click-to-chat URL with a pre-filled, URI-encoded message.
 * @param {string} message The message to encode and attach
 * @returns {string} Fully formatted WhatsApp URL
 */
export function createWhatsAppUrl(message) {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Creates a product-specific enquiry link.
 * Requirement format:
 * "Hello Jai Sports, I would like to enquire about {ProductName}. Please share the price and availability."
 * @param {string} productName
 * @returns {string}
 */
export function createProductEnquiryUrl(productName) {
  const message = `Hello from ${siteConfig.brandName} website, I would like to enquire about ${productName}. Please share the price and availability.`;
  return createWhatsAppUrl(message);
}

/**
 * Creates a general enquiry link.
 * @param {string} [customNote]
 * @returns {string}
 */
export function createGeneralEnquiryUrl(customNote) {
  const note = customNote ? ` - ${customNote}` : '';
  const message = `Hello from ${siteConfig.brandName} website, I would like to make an enquiry regarding your sports products and services${note}.`;
  return createWhatsAppUrl(message);
}

/**
 * Builds and returns a WhatsApp URL from contact form data.
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.phone
 * @param {string} [data.email]
 * @param {string} data.enquiryType
 * @param {string} data.message
 * @returns {string}
 */
export function createContactFormEnquiryUrl(data) {
  const lines = [
    `Hello ${siteConfig.brandName}, I am reaching out from your website contact form:`,
    ``,
    `👤 *Name:* ${data.name.trim()}`,
    `📞 *Phone:* ${data.phone.trim()}`,
    ...(data.email && data.email.trim() ? [`✉️ *Email:* ${data.email.trim()}`] : []),
    `🏷️ *Enquiry Type:* ${data.enquiryType}`,
    `💬 *Message:*`,
    `${data.message.trim()}`,
    ``,
    `Please share the details and availability. Thank you!`
  ];

  return createWhatsAppUrl(lines.join('\n'));
}

/**
 * Helper to safely open a WhatsApp link in a new tab
 * @param {string} url
 */
export function openWhatsApp(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
