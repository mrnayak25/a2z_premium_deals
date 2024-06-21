import React, { useEffect, useState, useRef } from "react";
import { ref, onValue, remove, update } from "firebase/database";
import { db } from "../firebase";
import LandItem from "./LandItem_cust";
import Loading from "./Loading";

const LandList = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLand, setSelectedLand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    const landsRef = ref(db, "lands");
    onValue(landsRef, (snapshot) => {
      const landsData = snapshot.val();
      const loadedLands = [];
      for (const id in landsData) {
        loadedLands.push({ id, ...landsData[id] });
      }
      setLands(loadedLands);
      setLoading(false);
    });
  }, []);

  const deleteLand = async (id) => {
    await remove(ref(db, `lands/${id}`));
    setLands(lands.filter((land) => land.id !== id));
  };

  const editLand = (land) => {
    setSelectedLand(land);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedLand = {
      ...selectedLand,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    };

    await update(ref(db, `lands/${selectedLand.id}`), updatedLand);
    setLands(lands.map(land => (land.id === selectedLand.id ? updatedLand : land)));
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1 id='property' className="text-4xl font-extrabold m-7">Properties</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {lands.map((land) => (
            <div key={land.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <LandItem land={land} deleteLand={deleteLand} editLand={() => editLand(land)} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Land</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsModalOpen(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
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
                    <input type="number" className="form-control" id="price" defaultValue={selectedLand.price} ref={priceRef} />
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
    </>
  );
};

export default LandList;
