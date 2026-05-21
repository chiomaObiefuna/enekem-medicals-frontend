import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
 import Footer from "./components/layouts/Footer";
 import ErrorBoundary from "./components/common/ErrorBoundary";
 import PageLoader from "./components/common/PageLoader";
import OfflinePage from "./components/common/OfflinePage";

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() =>  import("./components/pages/About"));
const Services = lazy(() => import("./components/pages/Services"));
const Bookings = lazy(() => import("./components/pages/Bookings"));
const Contacts = lazy(() =>  import("./components/pages/Contacts"));


function App() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => {setIsOnline(true);};
    console.log("App is online:", navigator.onLine);

    const handleOffline = () => {setIsOnline(false);};

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <Router>
      {/* Header appears on every page */}
      <Header />

      
      <ErrorBoundary>
       <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Page content changes based on the URL */}
        <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
         <Route path="/services"  element={<Services />} /> 
        <Route path="/book"      element={<Bookings />} />
        <Route path="/contact"   element={<Contacts />} /> 
      </Routes>
       </Suspense>  
      </ErrorBoundary>

      {/* Footer appears on every page */}
       <Footer /> 
    </Router>
  );
}

export default App;