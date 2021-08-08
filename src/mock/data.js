import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Untitled-UX', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Daniel Peters UX/UI Designer Aichach, Germany', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, Im',
  name: 'Daniel Peters UX/UI Designer ',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'danep_56.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_modest.jpg',
    title: 'Modest UX/UI Design',
    info: 'UX/UI-Design for the artist collective Modest',
    info2: 'Web-Design and implementing a Web Shops. Wix as CMS.',
    link: 'http://kollektivmodest.de',
    repo: 'https://www.behance.net/gallery/104541287/UXUI-Design-Modest', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_burkhard.jpg',
    title: 'Mode-Burkhard WebShop',
    info: 'Implementing a Web Shop for Mode-Burkhard. Web-Design.',
    info2: 'Wordpress as CMS. ',
    link: 'http://mode-burkhard.de',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_jeff.jpg',
    title: 'Jeffs Room Logo Design',
    info: 'Designing a Logo for a Personal Fitness Studio. Designing Face-Masks and Polo Shirts',
    info2: ' for Personal Trainer Jeff Rahimic',
    link: '',
    repo: 'https://www.behance.net/gallery/104675617/Logo-Design-Branding-Jeffs-Room-EMS-Fitness', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_luna.jpg',
    title: 'Luna Bar Branding',
    info: 'Extending the Branding of the Luna Bar Cocktail Bar.',
    info2: 'Designing Menu Cards and Design Guidelines.',
    link: '',
    repo: 'https://www.behance.net/gallery/104691069/Graphic-DesignBranding-Luna-Lounge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sticker_modest.jpg',
    title: 'Modest Sticker Concepts',
    info: 'Sticker concepts for music fashion label Modest',
    info2: 'bridging the gap between two different logos',
    link: '',
    repo: 'https://www.behance.net/gallery/112848009/Branding-Modest-Sticker-Concepts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mixing-mastering.png',
    title: 'Web UI Design',
    info: 'Mixing & Mastering Site',
    info2: 'creating a light funnel concept. Responsive Design.',
    link: '',
    repo: 'https://www.behance.net/gallery/112857867/Web-UI-Design-Modest-Mixing-Mastering', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hi@untitled-ux.de',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'behance',
      url: 'https://www.behance.net/untitled-ux',
    },
   
    {
      id: nanoid(),
      name: 'xing',
      url: 'https://www.xing.com/profile/Daniel_Peters188/cv',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/weareuntitled',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
