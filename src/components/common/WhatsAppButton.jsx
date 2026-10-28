import { MessageCircle } from 'lucide-react';
import { createProductEnquiryUrl, createGeneralEnquiryUrl } from '../../utils/whatsapp';

export default function WhatsAppButton({
  productName,
  customNote,
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'dark' | 'header'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon = true,
  onClick,
}) {
  const url = productName
    ? createProductEnquiryUrl(productName)
    : createGeneralEnquiryUrl(customNote);

  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 select-none group';

  const variants = {
    primary:
      'bg-[#F04423] text-white hover:bg-[#D63617] active:bg-[#B82B10] shadow-md hover:shadow-lg hover:shadow-[#F04423]/25 focus:ring-[#F04423]',
    secondary:
      'bg-[#101B4B] text-white hover:bg-[#18286E] active:bg-[#0A1132] shadow-md hover:shadow-lg focus:ring-[#101B4B]',
    outline:
      'border-2 border-[#F04423] text-[#F04423] bg-transparent hover:bg-[#FFF0ED] active:bg-[#FFE0D9] focus:ring-[#F04423]',
    dark:
      'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 focus:ring-white',
    header:
      'bg-[#F04423] text-white hover:bg-[#D63617] shadow-sm hover:shadow-md hover:shadow-[#F04423]/25 focus:ring-[#F04423]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-bold',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {icon && (
        <MessageCircle
          className={`${iconSizes[size] || 'w-4 h-4'} transition-transform duration-200 group-hover:scale-110 shrink-0`}
        />
      )}
      <span>{children || (productName ? 'Enquire on WhatsApp' : 'Enquire Now')}</span>
    </a>
  );
}
