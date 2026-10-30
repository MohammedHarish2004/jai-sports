import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
} from '../components/common/SocialIcons';
import { siteConfig } from '../config/siteConfig';
import { createContactFormEnquiryUrl, openWhatsApp } from '../utils/whatsapp';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Seo from '../components/common/Seo';

const enquiryTypes = [
  'General Enquiry',
  'Trophies & Awards Customization',
  'Sports Equipment Supply',
  'Kids Sports Gear',
  'Custom Team Uniforms',
  'Bulk Tournament Order',
];

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: enquiryTypes[0],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone / WhatsApp number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits)';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your enquiry message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Build WhatsApp URL and open chat
      const waUrl = createContactFormEnquiryUrl(formData);
      openWhatsApp(waUrl);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#F5F6F8] py-12 sm:py-16">
      <Seo
        title="Contact Jai Sports Trichy | Sports & Trophies Shop"
        description="Contact Jai Sports in Trichy for sports equipment, trophies, uniforms and store enquiries. Visit us on Madurai Road or call our shop."
        keywords={['Jai Sports contact', 'sports shop Madurai Road Trichy', 'trophy shop contact Trichy']}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0ED] text-[#F04423] border border-[#F04423]/20">
            CONNECT WITH JAI SPORTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-outfit text-[#101B4B] tracking-tight">
            Contact Jai Sports Trichy
          </h1>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Have a question about product availability, trophy engraving, or custom uniforms? Contact us directly or send a message via WhatsApp.
          </p>
        </div>

        {/* Main Grid: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold font-outfit text-[#101B4B] border-b border-slate-100 pb-3">
                Store & Contact Information
              </h2>

              <ul className="space-y-5 text-sm text-[#555555]">
                {/* Address */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] text-[#F04423] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#101B4B] text-xs uppercase tracking-wider mb-1">
                      Our Location
                    </span>
                    <p className="text-slate-600 leading-snug">
                      {siteConfig.address.street},<br />
                      {siteConfig.address.area},<br />
                      {siteConfig.address.city} - {siteConfig.address.pincode}, {siteConfig.address.country}
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] text-[#F04423] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#101B4B] text-xs uppercase tracking-wider mb-1">
                      Phone Numbers
                    </span>
                    <div className="flex flex-col space-y-0.5">
                      <a
                        href={`tel:${siteConfig.displayPhone.replace(/[^0-9]/g, '')}`}
                        className="text-base font-semibold text-[#101B4B] hover:text-[#F04423] transition-colors"
                      >
                        {siteConfig.displayPhone}
                      </a>
                      {siteConfig.displayPhone2 && (
                        <a
                          href={`tel:${siteConfig.displayPhone2.replace(/[^0-9]/g, '')}`}
                          className="text-base font-semibold text-[#101B4B] hover:text-[#F04423] transition-colors"
                        >
                          {siteConfig.displayPhone2}
                        </a>
                      )}
                    </div>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] text-[#F04423] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#101B4B] text-xs uppercase tracking-wider mb-1">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-[#101B4B] hover:text-[#F04423] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] text-[#F04423] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#101B4B] text-xs uppercase tracking-wider mb-1">
                      Opening Hours
                    </span>
                    <p className="text-slate-600">{siteConfig.businessHours.weekdays}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{siteConfig.businessHours.sunday}</p>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp Action Box */}
              <div className="pt-4 border-t border-slate-100">
                <WhatsAppButton
                  variant="primary"
                  size="md"
                  className="w-full justify-center shadow-md"
                >
                  Direct WhatsApp Chat
                </WhatsAppButton>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-100">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Follow Us Online
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#F04423] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#F04423] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#F04423] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold font-outfit text-[#101B4B] mb-1">
                  Send an Enquiry
                </h2>
                <p className="text-sm text-[#555555]">
                  Fill out the form below. When submitted, your details will open directly in WhatsApp for immediate response.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">WhatsApp message prepared!</span>
                    <span>Your enquiry details were formatted and opened in WhatsApp. You can also submit another message below.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Full Name <span className="text-[#F04423]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Ramesh Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] transition-colors focus:outline-none ${
                      errors.name
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-slate-200 focus:border-[#F04423] focus:ring-1 focus:ring-[#F04423]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Phone / WhatsApp Number <span className="text-[#F04423]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] transition-colors focus:outline-none ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-[#F04423] focus:ring-1 focus:ring-[#F04423]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address <span className="text-slate-400 text-[11px]">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-[#F04423] focus:ring-1 focus:ring-[#F04423]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Enquiry Type Dropdown */}
                <div>
                  <label htmlFor="enquiryType" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#222222] bg-white focus:outline-none focus:border-[#F04423] focus:ring-1 focus:ring-[#F04423]"
                  >
                    {enquiryTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Message / Requirements <span className="text-[#F04423]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Please specify quantity, event date, product details or any custom engraving requirements..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] transition-colors focus:outline-none ${
                      errors.message
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-slate-200 focus:border-[#F04423] focus:ring-1 focus:ring-[#F04423]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F04423] hover:bg-[#D63617] active:bg-[#B82B10] text-white font-bold text-base shadow-lg shadow-[#F04423]/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Submitting will format and launch WhatsApp with your enquiry for immediate attention.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Optional Location Map Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold font-outfit text-[#101B4B]">
                Visit Our Physical Store
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] mt-0.5">
                {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city} - {siteConfig.address.pincode}, {siteConfig.address.country}
              </p>
            </div>
          </div>

          {/* Interactive Styled Map Embed Placeholder */}
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8272758943467!2d78.6929186!3d10.8245267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5af108a9f2b%3A0x5dfb01fb561cbd36!2sJai%20Sports!5e0!3m2!1sen!2sae!4v1793174061551!5m2!1sen!2sae" width="100%" height="300px" style={{borderRadius: "12px"}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </div>
  );
}
