// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageLands from "./pages/ManageLands";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Sell from "./components/sellLand";
import LandForm from "./components/LandForm";
import LandList from "./components/LandList";
import FeedbackList from "./components/FeedbackList";
import ViewItem from "./components/ViewItem";
import { PropertyProvider } from "./components/PropertyContext";
import ViewItemOwner from "./components/ViewItem_owner";

function App() {
  const [id, setId] = useState(null);
  const [land, setLand] = useState([]);

  return (
    <PropertyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home setLand={setLand} setId={setId} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/a2z-admin" element={<PrivateRoute element={ManageLands} />}>
            <Route path="/a2z-admin/add" element={<LandForm />} />
            <Route path="/a2z-admin/" element={<LandList setId={setId} setLand={setLand} />} />
            <Route path="/a2z-admin/feedback" element={<FeedbackList />} />
            <Route path="/a2z-admin/viewproperty_owner" element={<ViewItemOwner id={id} land={land} />} />
          </Route>
          <Route path="/sellProperty" element={<Sell />} />
          <Route path="/viewproperty/:id" element={<ViewItem id={id} land={land} />} />
          <Route path="/property" element={<LandList setId={setId} setLand={setLand} />} />
        </Routes>
      </Router>
    </PropertyProvider>
  );
}

export default App;
