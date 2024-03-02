// store.js or a similar file
"use client"

import { create } from 'zustand';

const useDapilStoreBaru = create((set) => ({
    dapils: [],
    
    selectedProvinsi: null, // State for the selected provinsi
  
    fetchDapils: async () => {
      try {
        const response = await fetch("http://localhost:3001/dapil");
        const data = await response.json();
        set({ dapils: data });
      } catch (error) {
        console.error("Fetching error:", error);
      }
    },
  
    // Method to update the selectedProvinsi with console logging
    setSelectedProvinsi: (provinsi) => {
      console.log("Selected Provinsi:", provinsi); // Log the selected provinsi
      set({ selectedProvinsi: provinsi });
    },
  }));
  
  export default useDapilStoreBaru;