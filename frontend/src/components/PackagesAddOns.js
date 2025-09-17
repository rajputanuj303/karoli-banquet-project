import React, { useState } from 'react';
import './PackagesAddOns.css';

const packages = [
  {
    id: 1,
    name: 'Silver Package',
    catering: 'Standard',
    decor: 'Classic',
    price: 50000
  },
  {
    id: 2,
    name: 'Gold Package',
    catering: 'Premium',
    decor: 'Elegant',
    price: 90000
  },
  {
    id: 3,
    name: 'Platinum Package',
    catering: 'Luxury',
    decor: 'Royal',
    price: 150000
  }
];

const addOns = [
  { id: 1, name: 'DJ', price: 10000 },
  { id: 2, name: 'Photography', price: 15000 },
  { id: 3, name: 'Extra Hours', price: 8000 }
];

const PackagesAddOns = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handlePackageChange = e => {
    setSelectedPackage(Number(e.target.value));
  };

  const handleAddOnChange = id => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const packagePrice = packages.find(p => p.id === selectedPackage).price;
  const addOnsPrice = selectedAddOns.reduce(
    (sum, id) => sum + addOns.find(a => a.id === id).price,
    0
  );
  const totalPrice = packagePrice + addOnsPrice;

  return (
    <section className="packages-section" id="packages">
      <h2>Packages & Add-Ons</h2>
      <form className="packages-form">
        <div className="package-options">
          {packages.map(pkg => (
            <label key={pkg.id} className="package-card">
              <input
                type="radio"
                name="package"
                value={pkg.id}
                checked={selectedPackage === pkg.id}
                onChange={handlePackageChange}
              />
              <div>
                <h3>{pkg.name}</h3>
                <p>Catering: {pkg.catering}</p>
                <p>Decor: {pkg.decor}</p>
                <p>Price: ₹{pkg.price.toLocaleString()}</p>
              </div>
            </label>
          ))}
        </div>
        <div className="addon-options">
          <h4>Add-Ons</h4>
          {addOns.map(addon => (
            <label key={addon.id} className="addon-card">
              <input
                type="checkbox"
                value={addon.id}
                checked={selectedAddOns.includes(addon.id)}
                onChange={() => handleAddOnChange(addon.id)}
              />
              {addon.name} (+₹{addon.price.toLocaleString()})
            </label>
          ))}
        </div>
        <div className="price-calculator">
          <h4>Total Estimate: <span>₹{totalPrice.toLocaleString()}</span></h4>
        </div>
      </form>
    </section>
  );
};

export default PackagesAddOns;
