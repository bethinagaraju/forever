// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { CardProvider } from './cartcontext'
// import {CardProvider} from './cartcontext'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CardProvider>
//       <App />
//     </CardProvider>
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './cartcontext'; // Corrected import


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);