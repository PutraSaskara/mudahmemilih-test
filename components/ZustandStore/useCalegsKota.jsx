import {create} from 'zustand';
import useAuthStore from './authStore';

const useCalegsKota = create((set) => ({
    calegs: [],
    error: null,
  
    fetchCalegs: async () => {
      console.log("Fetching caleg data...");
  
      const { token } = useAuthStore.getState();
  
      if (!token) {
        console.error("No token found, cannot fetch caleg data.");
        set({ error: 'No authentication token found', calegs: [] });
        return;
      }
  
      const apiUrl = `https://server.mudahmemilih.com/api/v2/calegs?filter[kab_kota]=DENPASAR`;
      
      console.log("Fetching caleg data from:", apiUrl);
  
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        console.log("Received response with status:", response.status);
  
        if (!response.ok) {
          throw new Error("Caleg data fetching failed with status: " + response.status);
        }
  
        const data = await response.json();
        console.log("Caleg data received successfully:", data);
        set({ calegs: data, error: null });
      } catch (error) {
        console.error("Error occurred during caleg data fetching:", error);
        set({ error: error.message, calegs: [] });
      }
    },
  }));
  
  export default useCalegsKota;
  
