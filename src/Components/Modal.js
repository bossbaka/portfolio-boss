import React, { useEffect } from "react";
import ModalImg from "./ModalImg";
import LazyLoad, { forceCheck } from "react-lazyload";

export default function Modal({
  heading,
  description,
  isBox,
  isActive,
  handleModal,
  type,
}) {
  const properties = ModalImg[type];
  useEffect(() => {
    forceCheck();
  });
  if (isBox) {
    return (
      <div className={`modal ${isActive}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            <h1>{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={handleModal}
        />
      </div>
    );
  }

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="image">
          <LazyLoad>
            <img
              src={properties ? properties.src : null}
              alt={properties ? properties.alt : null}
            />
          </LazyLoad>
        </div>
        <p className="desc">{properties ? properties.description : null}</p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleModal}
      />
    </div>
  );
}
