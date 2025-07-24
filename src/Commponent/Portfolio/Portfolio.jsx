import React, { useState } from 'react';
import Star from '../Star/Star';
import poert1 from '../../assets/imges/poert1.png';
import port2 from '../../assets/imges/port2.png';
import port3 from '../../assets/imges/port3.png';

export default function Portfolio() {
  const [zoomedImage, setZoomedImage] = useState(null);

  function zoomm(imageSrc) {
    setZoomedImage(imageSrc);
  }

  function closeZoom() {
    setZoomedImage(null);
  }

  return (
    <>
      <div className="vh-1 mt-6">
        <h1 className="text-center">PORTFOLIO COMPONENT</h1>
        <div className="text-center">
          <Star color="black" />
          <div className="container pt-3">
            <div className="row g-5">
          
              {[poert1, port2, port3,poert1, port2, port3].map((img, index) => (
                <div
                  key={index}
                  className="col-lg-4"
                  style={{ cursor: 'pointer' }}
                  onClick={() => zoomm(img)}
                >
                  <div className="image-container rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img} alt={`Portfolio ${index + 1}`} />
                    <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {zoomedImage && (
            <div
              className="modal d-block fade show"
              tabIndex={-1}
              style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
              onClick={closeZoom}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-danger">
                  <div className="modal-body text-center">
                    <img src={zoomedImage} alt="Zoomed" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
