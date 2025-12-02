import React from 'react'
import { useState } from 'react';
export const NoteField = ({data}) => {
    const [textarea, setTextarea] = useState(data);
  return (
    <div className="flex flex-col">
          <label htmlFor="notePatient">Notas adicionales</label>
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            name="notePatient"
            id="notePatient"
            rows={5}
            placeholder="Introduce Notas adicionales"
            className="p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-0 mt-2"
            required
          ></textarea>
        </div>
  )
}
