import React from 'react';
import ToastProvider from '../ToastProvider';
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
      <h3>hi</h3>
    </ToastProvider>
  );
}

export default App;
