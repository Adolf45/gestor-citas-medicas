import React from 'react'
import { useState,useMemo } from 'react';

export const useSearchFilter = ({data}) => {
  const [searchDate, setSearchDate] = useState('');

  const filteredData = useMemo(()=> {
    if (!searchDate) return data;
    return data.filter((e) => e.namePatient.toLowerCase().includes(searchDate.toLocaleLowerCase()))
  }, [data, searchDate]);

  return {filteredData, searchDate, setSearchDate};
  
}
