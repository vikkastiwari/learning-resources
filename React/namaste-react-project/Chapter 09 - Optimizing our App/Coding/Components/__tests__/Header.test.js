import { render } from '@testing-library/react';
import Header from '../Header';

test("Logo should be load on rendering header", () => {
   // Load Header 
   const header = render(<Header />);
   console.log(header);
   // Check if logo is loaded
})