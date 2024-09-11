import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageLands from "./pages/ManageLands";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Sell from "./components/sellLand";
import LandForm from "./components/LandForm";
import LandList from "./components/LandList";
import FeedbackList from "./components/FeedbackList";
import ViewItem from "./components/ViewItem";
import { PropertyProvider } from "./components/PropertyContext";
import ViewItemOwner from "./components/ViewItem_owner";
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Properties from './components/Properties';
import NotFound from './components/404';

function App() {
  const [id, setId] = useState(null);
  const [land, setLand] = useState([]);
  const [location, setLocation] = useState(""); // Added location state

  return (
    <PropertyProvider>
      <Router>
        <Routes>
          {/* Passing props to Home */}
          <Route path="/" element={<Home setLand={setLand} setId={setId} location={location} setLocation={setLocation} />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          
          {/* Passing props to Properties */}
          <Route path="/Properties" element={<Properties setId={setId} setLand={setLand} location={location} setLocation={setLocation} />} />

          {/* Admin Routes with props */}
          <Route path="/a2z-admin" element={<PrivateRoute element={ManageLands} />}>
            <Route path="/a2z-admin/add" element={<LandForm />} />
            <Route path="/a2z-admin/" element={<LandList setId={setId} setLand={setLand} />} />
            <Route path="/a2z-admin/feedback" element={<FeedbackList />} />
            <Route path="/a2z-admin/viewproperty_owner" element={<ViewItemOwner id={id} land={land} />} />
          </Route>

          {/* Passing props to Sell */}
          <Route path="/sellProperty" element={<Sell setLand={setLand} setId={setId} location={location} setLocation={setLocation} />} />
          
          {/* Passing props to ViewItem */}
          <Route path="/viewproperty/:id" element={<ViewItem id={id} land={land} />} />
          
          <Route path="/property" element={<LandList setId={setId} setLand={setLand} />} />
        </Routes>
      </Router>
    </PropertyProvider>
  );
}

export default App;
