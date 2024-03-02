
"use client"

import {create} from 'zustand';


const useCarouselStore = create((set) => ({
  carouselData: [],
  fetchCarouselData: async () => {
    try {
      const response = await fetch('http://localhost:3001/get-caleg');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      set({ carouselData: data });
    } catch (error) {
      console.error('Error fetching carousel data:', error);
    }
  }
}));

export default useCarouselStore;
