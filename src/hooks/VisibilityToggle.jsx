import React from 'react'
import { useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export const VisibilityToggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const type = isVisible ? 'text' : 'password';

    const icon = isVisible ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />;

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

  return {toggleVisibility,type,icon}
}
