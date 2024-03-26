// Unit Testing

import { render } from '@testing-library/react';
import Header from '../Header';
import { StaticRouter } from 'react-router-dom/server';

test("Logo should be load on rendering header", () => {
   // Load Header 
   const header = render(
      <StaticRouter>
         <Header />
      </StaticRouter>
   );

   // Check if logo is loaded
   const logo = header.getAllByTestId('logo');
   expect(logo[0].src).toBe('http://localhost/dummy.png');
})

test("Nav items should be loaded on rendering header", () => {
   // Load Header 
   const header = render(
      <StaticRouter>
         <Header />
      </StaticRouter>
   );

   // Access the children of the ul element (li nodes)
   const navItems = header.getByTestId('nav-items');
   const navLiItems = Array.from(navItems.children);
   // console.log(navItems, navItems.children);
   expect(navLiItems.length).toBe(5);
})