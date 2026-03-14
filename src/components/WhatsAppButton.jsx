import React from 'react';

function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919998805925?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '80px',
                right: '20px',
                zIndex: 9999,
                backgroundColor: '#25D366',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#20BA5A';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#25D366';
            }}
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            {/* WhatsApp SVG Icon */}
            <img 
                src="/whatsapp-100.svg" 
                alt="WhatsApp"
                style={{
                    width: '35px',
                    height: '35px',
                    objectFit: 'contain'
                }}
            />
        </a>
    );
}

export default WhatsAppButton;
