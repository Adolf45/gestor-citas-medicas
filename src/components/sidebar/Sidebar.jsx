import { useState } from "react";
import { SidebarsButton } from "./SidebarButton";

export function Sidebar({container,title}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SidebarsButton open={open} setOpen={setOpen} button={1}/>

      <div
        className={`fixed overflow-y-auto top-0 left-0 h-dvh bg-gray-200 dark:text-gray-100 dark:bg-gray-800/50 text-white sm:w-sm w-full transform ${
          open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
      <SidebarsButton open={open} setOpen={setOpen} button={2}/>

        <div className="flex items-center justify-center gap-1 p-4 text-2xl font-bold dark:border-gray-800 w-full h-30">
          <img src="/logo.webp" alt="Logo de gestor de citas medicas" className='w-4/5 object-cover'/>{title}
        </div>
        {container}
      </div>

      {/* Fondo oscuro al abrir */}
      {open && (
        <div
          className="fixed inset-0 bg-[#0f0f0fa0]  z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}