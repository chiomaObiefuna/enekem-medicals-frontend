import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import PageLoader from "./components/common/PageLoader";
import OfflinePage from "./components/common/OfflinePage";
//import Telemedicine from "./components/services/Telemedicine";

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Services = lazy(() => import("./components/pages/Services"));
const Bookings = lazy(() => import("./components/pages/Bookings"));
const Contacts = lazy(() => import("./components/pages/Contacts"));
const HMO = lazy(() => import("./components/pages/HMO"));
const FAQ = lazy(() => import("./components/pages/FAQ"));
const MedicalTeam = lazy(() => import("./components/pages/MedicalTeam"));

// Legal pages
const PrivacyPolicy = lazy(() => import("./components/legal/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./components/legal/TermsAndConditions")
);
const CookiePolicy = lazy(() => import("./components/legal/CookiePolicy"));
const AIAssistantDisclaimer = lazy(() => import("./components/legal/AIAssistantDisclaimer"));


 const Dental = lazy(() => import("./components/services/Dental"));
 const ECG = lazy(() => import("./components/services/ECG"));
 const FamilyPlanning = lazy(() => import("./components/services/FamilyPlanning"));
const Laboratory = lazy(() => import("./components/services/Laboratory"));
const GPConsultation = lazy(() => import("./components/services/GPConsultation"));
const Immunization = lazy(() => import("./components/services/Immunization"));
 const Ultrasound = lazy(() => import("./components/services/Ultrasound"));
const NursingCare = lazy(() => import("./components/services/NursingCare"));
 const SpecialistConsultation = lazy(() => import("./components/services/SpecialistConsultation"));
 const Telemedicine = lazy(() => import("./components/services/Telemedicine"));



function App() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

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
      
      <Header />
    

      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Bookings />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/hmo" element={<HMO />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about/medical-team" element={<MedicalTeam />} />

            {/* Service pages */}
            <Route path="/services/gp-consultation" element={<GPConsultation />} />
            <Route path="/services/specialist-consultation" element={<SpecialistConsultation />} />
             <Route path="/services/nursing-care" element={<NursingCare />} />
              <Route path="/services/telemedicine" element={<Telemedicine />} /> 
              <Route path="/services/family-planning" element={<FamilyPlanning />} />
              <Route path="/services/dental" element={<Dental />} />
              <Route path="/services/ultrasound" element={<Ultrasound />} />
              <Route path="/services/laboratory" element={<Laboratory />} />
              <Route path="/services/ecg" element={<ECG />} />
              <Route path="/services/immunization" element={<Immunization />} />

            {/* Legal pages */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
            <Route path="/legal/ai-assistant-disclaimer" element={<AIAssistantDisclaimer />} />

            
           
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </Router>
  );
}

export default App;