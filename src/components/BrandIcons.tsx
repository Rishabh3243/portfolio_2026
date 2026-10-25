import React from 'react';

interface IconProps {
  className?: string;
}

/**
 * Authentic Official GitHub Mark (Octocat silhouette)
 */
export const RealGitHubIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/**
 * Authentic Official LinkedIn Brand Icon (Blue tile with white "in")
 */
export const RealLinkedInIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
    <path d="M7.4 9.8H4.6V18.6H7.4V9.8Z" fill="#FFFFFF" />
    <circle cx="6.0" cy="6.8" r="1.5" fill="#FFFFFF" />
    <path
      d="M19.4 13.9C19.4 10.9 17.8 9.5 15.6 9.5C13.9 9.5 13.1 10.5 12.7 11.1V9.8H9.9C9.9 10.6 9.9 18.6 9.9 18.6H12.7V13.7C12.7 13.4 12.7 13.1 12.8 12.9C13.1 12.2 13.7 11.5 14.7 11.5C16.1 11.5 16.6 12.6 16.6 14.1V18.6H19.4V13.9Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Authentic Official Google Gmail Icon (White tile with Google 4-color M)
 */
export const RealGmailIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4.5" fill="#FFFFFF" stroke="#DCD4BC" strokeWidth="0.8" />
    <g transform="translate(2.5, 2.5) scale(0.7917)">
      <path d="M3.5 19.5h3v-9L2 7v11.5c0 .55.45 1 1 1z" fill="#4285F4"/>
      <path d="M17.5 19.5h3c.55 0 1-.45 1-1V7l-4.5 3.5v9z" fill="#34A853"/>
      <path d="M17.5 10.5L12 14.7 6.5 10.5V5.8c0-1.2 1.3-1.9 2.3-1.2L12 6.8l3.2-2.2c1-.7 2.3 0 2.3 1.2v4.7z" fill="#EA4335"/>
      <path d="M20.5 7V5.8c0-1.2-1.3-1.9-2.3-1.2l-.7.5v4.5l3-2.6z" fill="#FBBC04"/>
      <path d="M2 7l4.5 3.5V6.1L5.8 5.6C4.8 4.9 3.5 5.6 3.5 6.8V7H2z" fill="#C5221F"/>
    </g>
  </svg>
);

export const RealEmailIcon = RealGmailIcon;

/**
 * Authentic Phone Call / Dialer App Icon (Green tile with solid white telephone receiver)
 */
export const RealPhoneIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4.5" fill="#22C55E" />
    <path
      d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Authentic Official WhatsApp Brand Icon (WhatsApp green tile with speech bubble & receiver)
 */
export const RealWhatsAppIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4.5" fill="#25D366" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.2a7.8 7.8 0 0 0-6.7 11.8L4.2 19.8l4-1a7.8 7.8 0 1 0 3.8-14.6zm4.3 11.1c-.2.6-1.1 1.2-1.6 1.3-.5.1-1 .1-1.7-.1a13.5 13.5 0 0 1-4.5-3.5 8.3 8.3 0 0 1-1.3-2.6c-.2-.5 0-1 .3-1.3.2-.2.5-.3.6-.3h.5c.1 0 .3 0 .5.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .4s-.1.3-.2.4c-.1.1-.3.3-.4.4-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5 0 .2-.2.6-.7.8-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.5.3.1.2.1.6-.2 1.2z"
      fill="#FFFFFF"
    />
  </svg>
);
