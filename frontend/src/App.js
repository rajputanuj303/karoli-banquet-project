
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import QuickContact from './components/QuickContact';
import SearchAvailability from './components/SearchAvailability';
import HallList from './components/HallList';
import PackagesAddOns from './components/PackagesAddOns';
import Gallery from './components/Gallery';
import BookingFlow from './components/BookingFlow';
import FAQ from './components/FAQ';
import Policies from './components/Policies';
import LocationMap from './components/LocationMap';
import ContactDetails from './components/ContactDetails';
import UserAccount from './components/UserAccount';
import VendorDirectory from './components/VendorDirectory';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Testimonials />
      <QuickContact />
      <SearchAvailability />
      <HallList />
      <PackagesAddOns />
      <Gallery />
      <BookingFlow />
      <FAQ />
      <Policies />
      <LocationMap />
      <ContactDetails />
      <UserAccount />
      <VendorDirectory />
      <Footer />
    </div>
  );
}export default App;
