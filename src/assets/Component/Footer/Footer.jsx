const Footer = () => {
  return (
    <footer className="bg-slate-50 py-8">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Gadget Heaven</h2>
        <p className="text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="border-b-2 mb-5"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Services</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg bg-red-500 font-medium text-gray-800">CompanyGitTesting</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-800">Legal</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
