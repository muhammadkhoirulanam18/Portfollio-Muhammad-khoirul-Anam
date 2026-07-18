export interface Project {
  title: string
  category: string
  description: string
  stack: string[]
  image?: string
  link: string
}

import numerixImg from '../assets/Thumbnail/Numerix.avif'
import youtapPosImg from '../assets/Thumbnail/Youtap-POS.avif'
import youtapBosImg from '../assets/Thumbnail/Youtap-BOS.avif'
import energyEventImg from '../assets/Thumbnail/Energy-Event.avif'
import laundryImg from '../assets/Thumbnail/Laundry.avif'
import youtapLoyaltyImg from '../assets/Thumbnail/Youtap-Loyalty.avif'
import youtapKioskImg from '../assets/Thumbnail/Youtap-Kiosk.webp'
import youtapPayImg from '../assets/Thumbnail/Youtap-pay.webp'
import youtapSolutionImg from '../assets/Thumbnail/Youtap-Solution.webp'
import travgoImg from '../assets/Thumbnail/Travgo.webp'
import homefreshImg from '../assets/Thumbnail/Homefresh.webp'
import serenityBaliImg from '../assets/Thumbnail/Serenity Bali.webp'
import windofaImg from '../assets/Thumbnail/Windofa.webp'
import serviceBrankasImg from '../assets/Thumbnail/Service Brankas.webp'
import youtapIndonesiaImg from '../assets/Thumbnail/Youtap Indonesia.webp'

export const projects: Project[] = [
  {
    title: 'Numerix Accounting',
    category: 'Website',
    description: 'I developed the Numerix Accounting website using WordPress and Elementor to create a modern, professional, and easy-to-manage business website. The project includes service pages, company profile sections, blog integration, contact forms, and structured navigation to help potential clients easily understand the business.',
    stack: ['WordPress', 'Elementor', 'Wpbakery'],
    image: numerixImg,
    link: 'https://numerixaccounting.com.au/',
  },
  {
    title: 'Youtap Indonesia',
    category: 'Website',
    description: 'Youtap Indonesia is a technology company established through a joint venture between Salim Group and Youtap Global (New Zealand), officially launched in February 2020. The company provides an integrated digital platform that helps businesses of all sizes—from SMEs to large enterprises—digitize their operations.\n\nFor this project, I developed the Youtap Indonesia website to showcase the company\'s digital solutions and business management services. The website features a modern, responsive design that highlights key offerings while delivering a seamless and intuitive user experience for potential clients and business partners.',
    stack: ['Webflow'],
    image: youtapIndonesiaImg,
    link: 'https://www.youtap.id/',
  },
  {
    title: 'Youtap Kiosk',
    category: 'Website',
    description: 'Empower your customers and streamline business operations through a modern Self Order Kiosk application. Designed to handle multiple order types and payment methods, this solution helps reduce queue times, improve efficiency, and enhance overall customer satisfaction.',
    stack: ['Webflow'],
    image: youtapKioskImg,
    link: 'https://www.kiosk.youtap.id/',
  },
  {
    title: 'Youtap POS',
    category: 'Website',
    description: 'I designed and developed the Youtap POS website to showcase an all-in-one solution for seamless business management. The website highlights key features such as cash and cashless payment acceptance, product and inventory management, ordering via e-menu, bill splitting, and detailed transaction reports.',
    stack: ['Webflow'],
    image: youtapPosImg,
    link: 'https://www.pos.youtap.id/',
  },
  {
    title: 'Youtap PAY',
    category: 'Website',
    description: 'I created the Youtap PAY website to introduce a seamless and user-friendly payment solution for businesses. The website showcases how Youtap PAY simplifies payment processes and helps expand customer reach by integrating multiple payment methods.',
    stack: ['Webflow'],
    image: youtapPayImg,
    link: 'https://www.payment.youtap.id/',
  },
  {
    title: 'Youtap BOS',
    category: 'Website',
    description: 'I developed the Youtap BOS website to present a complete and practical solution for restocking business supplies. It highlights Youtap BOS as a one-stop platform where business owners can easily find a wide range of products at competitive prices, with fast delivery and free shipping.',
    stack: ['Webflow'],
    image: youtapBosImg,
    link: 'https://www.ecommerce.youtap.id/',
  },
  {
    title: 'Youtap Solution',
    category: 'Website',
    description: 'I designed the Youtap Solution website to showcase a suite of personalized digital solutions tailored to diverse business needs. The site highlights Youtap’s flexibility in offering everything from standard QRIS payments to fully customized enterprise solutions.',
    stack: ['Webflow'],
    image: youtapSolutionImg,
    link: 'https://www.solution.youtap.id/',
  },
  {
    title: 'Travgo',
    category: 'Website',
    description: 'Redesign of the "Cheap Domestic Flight Tickets" page on Travgo.com to enhance visual quality and user experience. This process involved modernizing the design into a more structured layout, optimizing content placement for better information discovery, and ensuring full responsiveness across all devices.',
    stack: ['WordPress', 'Elementor', 'Wpbakery'],
    image: travgoImg,
    link: 'https://travgo.com/tiket-pesawat-domestik-murah/',
  },
  {
    title: 'Home Fresh Indonesia',
    category: 'Website',
    description: 'Redesign of the Imported Fruits page on the Homeresh Indonesia website using WordPress. This process included improving the visual appearance to make it more modern and appealing, restructuring the content layout to enhance readability, and optimizing the user experience.',
    stack: ['WordPress', 'Elementor', 'Wpbakery'],
    image: homefreshImg,
    link: 'https://homefresh-indonesia.com/buah-import/',
  },
  {
    title: 'Dinamis Biro Psikologi',
    category: 'Website',
    description: 'I designed and developed the DINAMIS Psychology Center website using WordPress to present its professional psychological consultation services in a clear and approachable way. The site offers information about various services including individual, couple, and family counseling.',
    stack: ['WordPress', 'Elementor'],
    image: '', // Placeholder, no image uploaded for this yet
    link: 'https://dinamispsikologi.id/',
  },
  {
    title: 'Serenity Bali',
    category: 'Website',
    description: 'Development and redesign of the Vegan Restaurant Bali website for Serenity Bali using Wix. This project included improving the website layout structure, refining visual elements, and enhancing the user experience to create a more modern, responsive, and user-friendly interface.',
    stack: ['Wix'],
    image: serenityBaliImg,
    link: 'https://www.serenitybali.com/',
  },
  {
    title: 'Windofa Apparel',
    category: 'Website',
    description: 'A modern company profile website for premium digital t-shirt printing services, built using WordPress. The website was designed with a clean, responsive, and conversion-focused layout to showcase high-quality DTG and DTF printing services with sharp print results.',
    stack: ['WordPress', 'Wpbakery'],
    image: windofaImg,
    link: 'https://windofaapparel.com/sablon-digital/',
  },
  {
    title: 'Energy Event',
    category: 'Website',
    description: 'A professional corporate event planner and organizer website built using WordPress for Energy Event, an experienced event organizer company based in Jakarta, Bali, and Singapore. The website was designed with a modern, premium, and responsive layout to represent the company’s professional brand image.',
    stack: ['WordPress', 'Wpbakery'],
    image: energyEventImg,
    link: 'https://energyevent.id/',
  },
  {
    title: 'Bali Express Laundry',
    category: 'Website',
    description: 'A modern laundry service website built using WordPress for Bali Express Laundry, a professional laundry pickup and delivery service in Bali. The website was designed with a clean, responsive, and user-friendly interface to provide seamless access to laundry services for villa guests, hotels, and tourists.',
    stack: ['WordPress', 'Wpbakery'],
    image: laundryImg,
    link: 'https://baliexpresslaundryservice.com/',
  },
  {
    title: 'Service Brankas.com',
    category: 'Website',
    description: 'A professional safe repair and security service website built using WordPress for Service Brankas, a company specializing in safe repair, unlocking, maintenance, relocation, and security storage solutions across Indonesia. The website was designed with a responsive and service-focused layout.',
    stack: ['WordPress', 'Wpbakery'],
    image: serviceBrankasImg,
    link: 'https://servicebrankas.com/jasa-buka-brankas-surabaya/',
  },
  {
    title: 'Youtap Loyalty',
    category: 'Website',
    description: 'Development of the Youtap Loyalty Landing using Webflow, focused on creating a modern and conversion-driven digital experience for Youtap’s loyalty and rewards solution. The project emphasized clean visual hierarchy, responsive design, and structured content presentation to effectively communicate the platform’s features.',
    stack: ['Webflow'],
    image: youtapLoyaltyImg,
    link: 'https://youtap-loyalty.webflow.io/',
  }
]
