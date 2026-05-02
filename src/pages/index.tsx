import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import '../css/styles.css'
import Home from '../views/Home'
import TagManager from 'react-gtm-module';

const tagManagerAgrs = {
  gtmId: 'GTM-WXW693PW',
};

TagManager.initialize(tagManagerAgrs);

TagManager.dataLayer({
  dataLayer: {
    event: 'page_view',
    pagePath: '/home',
    pageTitle: 'Home Page',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
