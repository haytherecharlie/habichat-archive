import Sitemap from 'react-router-sitemap'
import router from './sitemap-routes'

(() => new Sitemap(router).build('https://habi.chat').save('./public/sitemap.xml'))()
