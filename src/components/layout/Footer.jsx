import { Link } from 'react-router-dom';
import {
  Trophy,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
} from '../common/SocialIcons';
import { siteConfig } from '../../config/siteConfig';
import { categories } from '../../data/shopData';
import WhatsAppButton from '../common/WhatsAppButton';
import jaiLogo from '../../assets/jailogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101B4B] text-white pt-16 pb-12 border-t-4 border-[#F04423]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info & Tagline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group">
              <img
                src={jaiLogo}
                alt={siteConfig.brandName}
                loading="lazy"
                decoding="async"
                className="h-10 sm:h-12 w-auto max-w-[210px] sm:max-w-[240px] object-contain group-hover:scale-102 transition-transform duration-300"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {siteConfig.shortDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F04423] flex items-center justify-center text-white transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F04423] flex items-center justify-center text-white transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F04423] flex items-center justify-center text-white transition-all duration-200"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFA08A]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F04423]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F04423]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F04423]" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F04423]" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F04423]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Dynamic Product Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFA08A]">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#F04423]" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details from siteConfig */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFA08A]">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F04423] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.area},<br />
                  {siteConfig.address.city} - {siteConfig.address.pincode}, {siteConfig.address.country}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F04423] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.displayPhone.replace(/[^0-9]/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.displayPhone}
                  </a>
                  {siteConfig.displayPhone2 && (
                    <a
                      href={`tel:${siteConfig.displayPhone2.replace(/[^0-9]/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {siteConfig.displayPhone2}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F04423] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F04423] shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.businessHours.weekdays}</p>
                  <p className="text-slate-400 text-xs">{siteConfig.businessHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} <span className="text-white font-semibold">{siteConfig.brandName}</span>. All rights reserved.
          </p>

          <p>
            Designed by <a href='https://printbazzar.online' target='_blank' rel='noopener noreferrer' className="text-yellow-300 font-bold hover:underline transition-colors">Print Bazzar</a>
          </p>

          <div className="items-center gap-4 hidden md:flex">
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link to="/products" className="hover:text-white transition-colors">
              Catalogue
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
