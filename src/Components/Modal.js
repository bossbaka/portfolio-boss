import React from "react";
import ModalImg from "./ModalImg";

export default function Modal({
  heading,
  description,
  isBox,
  isActive,
  handleModal,
  type,
}) {
  const properties = ModalImg[type];
  
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
            <img
              src={properties ? properties.src : null}
              alt={properties ? properties.alt : null}
            />
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
