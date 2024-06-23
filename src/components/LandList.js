import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { ref, onValue, update,remove } from 'firebase/database';
import LandItem from "../components/LandItem";
import Loading from "../components/Loading";

const LandList = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLand, setSelectedLand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const ownerNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressLine1Ref = useRef(null);
  const addressLine2Ref = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodeRef = useRef(null);
  const contactNumberRef = useRef(null);
  const sellOrRentRef = useRef(null);
  const locationRef = useRef(null);
  const sublocationRef = useRef(null);
  const propertyAddressRef = useRef(null);
  const propertyCityRef = useRef(null);
  const propertyStateRef = useRef(null);
  const propertyZipCodeRef = useRef(null);
  const propertyTypeRef = useRef(null);
  const totalAreaRef = useRef(null);

  useEffect(() => {
    const landRef = ref(db, 'lands');
    onValue(landRef, (snapshot) => {
      const lands = [];
      snapshot.forEach((childSnapshot) => {
        const land = {
          id: childSnapshot.key,
          ...childSnapshot.val()
        };
        lands.push(land);
      });
      setLands(lands);
      setLoading(false);
    });
  }, []);

  const editLand = (land) => {
    setSelectedLand(land);
    setIsModalOpen(true);
  };
  const deleteLand = async (id) => {
    await remove(ref(db, `lands/${id}`));
    setLands(lands.filter((land) => land.id !== id));
  };
  const handleStatusChange = async (id, status) => {
    try {
      await update(ref(db, `lands/${id}`), { status });
      alert('Status updated successfully!');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedLand = {
      ...selectedLand,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      ownerName: ownerNameRef.current.value,
      email: emailRef.current.value,
      addressLine1: addressLine1Ref.current.value,
      addressLine2: addressLine2Ref.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zipCode: zipCodeRef.current.value,
      contactNumber: contactNumberRef.current.value,
      sellOrRent: sellOrRentRef.current.value,
      location: locationRef.current.value,
      sublocation: sublocationRef.current.value,
      propertyAddress: propertyAddressRef.current.value,
      propertyCity: propertyCityRef.current.value,
      propertyState: propertyStateRef.current.value,
      propertyZipCode: propertyZipCodeRef.current.value,
      propertyType: propertyTypeRef.current.value,
      totalArea: totalAreaRef.current.value,
    };

    await update(ref(db, `lands/${selectedLand.id}`), updatedLand);
    setLands(lands.map((land) => (land.id === selectedLand.id ? updatedLand : land)));
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="row mx-3 mt-20">
      {lands.map((land) => (
        <LandItem key={land.id} land={land} deleteLand={deleteLand} editLand={() => editLand(land) } handleStatusChange={handleStatusChange} />
      ))}

{isModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Land</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsModalOpen(false)}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" defaultValue={selectedLand.title} ref={titleRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" defaultValue={selectedLand.description} ref={descriptionRef}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="text" className="form-control" id="price" defaultValue={selectedLand.price} ref={priceRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="ownerName" className="form-label">Owner Name</label>
                <input type="text" className="form-control" id="ownerName" defaultValue={selectedLand.ownerName} ref={ownerNameRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" defaultValue={selectedLand.email} ref={emailRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="addressLine1" className="form-label">Address Line 1</label>
                <input type="text" className="form-control" id="addressLine1" defaultValue={selectedLand.addressLine1} ref={addressLine1Ref} />
              </div>
              <div className="mb-3">
                <label htmlFor="addressLine2" className="form-label">Address Line 2</label>
                <input type="text" className="form-control" id="addressLine2" defaultValue={selectedLand.addressLine2} ref={addressLine2Ref} />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City / Village</label>
                <input type="text" className="form-control" id="city" defaultValue={selectedLand.city} ref={cityRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" className="form-control" id="state" defaultValue={selectedLand.state} ref={stateRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">Zip Code / Pin Code</label>
                <input type="text" className="form-control" id="zipCode" defaultValue={selectedLand.zipCode} ref={zipCodeRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input type="text" className="form-control" id="contactNumber" defaultValue={selectedLand.contactNumber} ref={contactNumberRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="sellOrRent" className="form-label">Sell or Rent</label>
                <input type="text" className="form-control" id="sellOrRent" defaultValue={selectedLand.sellOrRent} ref={sellOrRentRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" defaultValue={selectedLand.location} ref={locationRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="sublocation" className="form-label">Sublocation</label>
                <input type="text" className="form-control" id="sublocation" defaultValue={selectedLand.sublocation} ref={sublocationRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyAddress" className="form-label">Property Address</label>
                <input type="text" className="form-control" id="propertyAddress" defaultValue={selectedLand.propertyAddress} ref={propertyAddressRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyCity" className="form-label">Property City</label>
                <input type="text" className="form-control" id="propertyCity" defaultValue={selectedLand.propertyCity} ref={propertyCityRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyState" className="form-label">Property State</label>
                <input type="text" className="form-control" id="propertyState" defaultValue={selectedLand.propertyState} ref={propertyStateRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyZipCode" className="form-label">Property Zip Code</label>
                <input type="text" className="form-control" id="propertyZipCode" defaultValue={selectedLand.propertyZipCode} ref={propertyZipCodeRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyType" className="form-label">Property Type</label>
                <input type="text" className="form-control" id="propertyType" defaultValue={selectedLand.propertyType} ref={propertyTypeRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="totalArea" className="form-label">Total Area</label>
                <input type="text" className="form-control" id="totalArea" defaultValue={selectedLand.totalArea} ref={totalAreaRef} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
      )}
    </div>
  );
};

export default LandList;