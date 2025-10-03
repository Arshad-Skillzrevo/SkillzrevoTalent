import Contact from "./Contact.jsx";
export const metadata = {
  title: 'Contact Us - SkillzRevo',
  description:
    'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  alternates: {
    canonical: 'https://skillzrevo.com/contact-us/',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'SkillzRevo',
    url: 'https://skillzrevo.com/contact-us/',
    title: 'Contact Us - SkillzRevo',
    description:
      'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
    images: [
      {
        url: 'https://skillzrevo.com/wp-content/uploads/2024/09/Honesty_20240912_152035_0000.webp',
        width: 512,
        height: 512,
        alt: 'Contact Us',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - SkillzRevo',
    description:
      'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
    images: [
      'https://skillzrevo.com/wp-content/uploads/2024/09/Honesty_20240912_152035_0000.webp',
    ],
    label1: 'Time to read',
    data1: '1 minute',
  },
};

export default function Page(){
    return(
        <>
       <Contact/>
       </>
    )
}