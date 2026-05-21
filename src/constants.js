
const weddings = [
    { label: 'Brahmin', path: '/brahmin' },
    { label: 'Christian', path: '/christian' },
    { label: 'Hindu', path: '/hindu' },
    { label: 'Muslim', path: '/muslim' },
    { label: 'Engagement', path: '/engagement' }];

const pages = [
    { label: 'Home', path: '/'},
    { label: 'Gallery', path: '/gallery'},
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Weddings', path: null, children: weddings}
];

export {
    weddings,
    pages
};