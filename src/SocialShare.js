import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTelegram } from 'react-icons/fa';

const SocialShare = ({ title, url }) => {
    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareTitle} ${shareUrl}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    const telegramUrl = `https://telegram.me/share/url?url=${shareUrl}&text=${shareTitle}`;

    return (
        <div className="social-share">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                <FaWhatsapp size={30} style={{ color: '#25D366' }} />
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                <FaFacebookF size={30} style={{ color: '#3b5998' }} />
            </a>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Telegram">
                <FaTelegram size={30} style={{ color: '#0088cc' }} />
            </a>
        </div>
    );
};

export default SocialShare;