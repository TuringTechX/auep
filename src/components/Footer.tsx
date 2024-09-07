// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-4 shadow-inner">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Africa Unified Economic Platform. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  