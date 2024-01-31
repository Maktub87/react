import React from 'react';
import './LayoutStyles.css';
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export default Layout;