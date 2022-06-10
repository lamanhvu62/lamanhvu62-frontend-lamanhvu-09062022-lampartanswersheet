import Home from '~/pages/Home';
import About from '~/pages/About';
import Services from '~/pages/Services';
import Portfolio from '~/pages/Portfolio';
import ContactUs from '~/pages/ContactUs';

const publicRouter = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/portfolio', component: Portfolio },
    { path: '/contactUs', component: ContactUs },
];

const privateRouter = [];

export { publicRouter, privateRouter };
