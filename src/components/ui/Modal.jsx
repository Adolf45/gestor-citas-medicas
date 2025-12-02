import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const Modal = ({ title, buttonText, children,url }) => {
  const [isOpen, setIsOpen] = useState(false);
function AcceptDonation () {
    if(url) window.open(url)
    setIsOpen(!isOpen)
}
  const openModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Botón para abrir */}
      <button
        onClick={openModal}
        className="p-2 hover:bg-gray-200 rounded-2xl cursor-pointer">
        {buttonText}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className=" overflow-y-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-fit flex flex-col items-center  relative p-6 rounded-2xl shadow-lg bg-white dark:bg-slate-900 dark:text-gray-100 transition-all"
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              <FaTimes size={18} className="text-gray-500" />
            </button>

            {/* Título */}
            {title && (
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                {title}
              </h2>
            )}

            {/* Contenido */}
            <div className="w-lg max-md:w-full max-h-fit">{children}</div>
          <button
        onClick={AcceptDonation}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition my-3
        cursor-pointer"
      >
        Aceptar
      </button>
          </div>
        </div>
      )}
    </>
  );
};