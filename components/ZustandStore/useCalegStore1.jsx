import { create } from "zustand";
import useAuthStore from "./authStore"; // Assuming this is the correct path
import API_ENDPOINTS from "@/config";

const localStorageKey = 'calegStoreState';
let itemStorage = ''
if (typeof window !== 'undefined') {
  itemStorage = window.localStorage.getItem(localStorageKey)
}

const saveStateToLocalStorage = (config) => (set, get, api) => config((args) => {
  set(args);
  const state = get();
  if (typeof window !== 'undefined')
    window.localStorage.setItem(localStorageKey, JSON.stringify(state)); 
}, get, api);

// Step 2: Load initial state from localStorage
let initialState = {};
if (typeof window !== 'undefined') {
  try {
    const storedState = window.localStorage.getItem(localStorageKey);
    if (storedState) {
      initialState = JSON.parse(storedState);
    } else {
      initialState= {
 
        dataCaleg: [], // Renamed from 'calegs' to 'dataCaleg'
        calegType: null, // Dynamic state for caleg type
        dapilId: null, // Dynamic state for dapil ID
      
        // State for storing the selected DPR ID and Type
        DprId: null,
        DprType: null,
      
        // State for storing the selected DPRD Provinsi ID and Type
        DprdIdProvinsi: null,
        DprdTypeProvinsi: null,
      
        // State for storing the selected DPRD Kota ID and Type
        DprdIdKota: null,
        DprdTypeKota: null,
      
        // State for storing fetched data for DPRD Provinsi and Kota
        dataCalegForDprdProvinsi: [],
        dataCalegForDprdKota: [],
      
        isLoadingDpr: true,
        isLoadingDprdProvinsi: true,
        isLoadingDprdKota: true,
        // ... other initial states
      };
    }
  } catch (e) {
    console.error('Error reading initial state from localStorage:', e);
    // Optionally set a default initial state here if parsing fails
  }
}


const useCalegStore = create(saveStateToLocalStorage((set,get) => ({
  ...initialState,
  // State for storing caleg data
 

  // fetchCalegs method
  fetchCalegs: async () => {
    set({ isLoadingDpr: true }); // Set loading state to true at the beginning

    const { token } = useAuthStore.getState();
    const { DprId, DprType } = get(); // Use get() to access current state

    if (!token) {
      console.error("No token found, cannot fetch caleg data.");
      set({ isLoadingDpr: false }); // Set loading to false if no token
      return;
    }

    const apiUrl = `${API_ENDPOINTS.searchCalegs}?filter[caleg_type]=${DprType}&filter[dapil_id]=${DprId}`;
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
        throw new Error(
          "Caleg data fetching failed with status: " + response.status
        );
      }

      const dataCaleg = await response.json();
      console.log("Caleg data received successfully:", dataCaleg);
      set({ dataCaleg, isLoadingDpr: false }); // Update state with data and set loading to false
    } catch (error) {
      console.error("Error occurred during caleg data fetching:", error);
      set({ isLoadingDpr: false }); // Set loading to false in case of error
    }
  },

  // Method to fetch caleg data for DPRD Provinsi
  // fetchCalegsForDprdProvinsi method
  fetchCalegsForDprdProvinsi: async () => {
    set({ isLoadingDprdProvinsi: true }); // Set loading state to true at the beginning

    const { token } = useAuthStore.getState();
    const { DprdIdProvinsi, DprdTypeProvinsi } = get(); // Use get() to access current state

    if (!token) {
      console.error(
        "No token found, cannot fetch caleg data for DPRD Provinsi."
      );
      set({ isLoadingDprdProvinsi: false }); // Set loading to false if no token
      return;
    }

    const apiUrl = `${API_ENDPOINTS.searchCalegs}?filter[caleg_type]=${DprdTypeProvinsi}&filter[dapil_id]=${DprdIdProvinsi}`;
    console.log("Fetching caleg data for DPRD Provinsi from:", apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          "Caleg data fetching for DPRD Provinsi failed with status: " +
            response.status
        );
      }

      const dataCalegForDprdProvinsi = await response.json();
      console.log(
        "DPRD Provinsi data received successfully:",
        dataCalegForDprdProvinsi
      );
      set({ dataCalegForDprdProvinsi, isLoadingDprdProvinsi: false }); // Update state with data and set loading to false
    } catch (error) {
      console.error(
        "Error occurred during DPRD Provinsi data fetching:",
        error
      );
      set({ isLoadingDprdProvinsi: false }); // Set loading to false in case of error
    }
  },

  // fetchCalegsForDprdKota method
  fetchCalegsForDprdKota: async () => {
    set({ isLoadingDprdKota: true }); // Set loading state to true at the beginning

    const { token } = useAuthStore.getState();
    const { DprdIdKota, DprdTypeKota } = get(); // Use get() to access current state

    if (!token) {
      console.error("No token found, cannot fetch caleg data for DPRD Kota.");
      set({ isLoadingDprdKota: false }); // Set loading to false if no token
      return;
    }

    const apiUrl = `${API_ENDPOINTS.searchCalegs}?filter[caleg_type]=${DprdTypeKota}&filter[dapil_id]=${DprdIdKota}`;
    console.log("Fetching caleg data for DPRD Kota from:", apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          "Caleg data fetching for DPRD Kota failed with status: " +
            response.status
        );
      }

      const dataCalegForDprdKota = await response.json();
      console.log(
        "DPRD Kota data received successfully:",
        dataCalegForDprdKota
      );
      set({ dataCalegForDprdKota, isLoadingDprdKota: false }); // Update state with data and set loading to false
    } catch (error) {
      console.error("Error occurred during DPRD Kota data fetching:", error);
      set({ isLoadingDprdKota: false }); // Set loading to false in case of error
    }
  },
  // Method to set caleg type
  setCalegType: (type) => set({ calegType: type }),

  // Method to set dapil ID
  setDapilId: (id) => set({ dapilId: id }),

  // Actions to set the selected DPR ID and Type
  setDprId: (id) => set({ DprId: id }),
  setDprType: (type) => set({ DprType: type }),

  // Separate actions for setting DPRD Provinsi ID and Type
  setDprdIdProvinsi: (id) => set({ DprdIdProvinsi: id }),
  setDprdTypeProvinsi: (type) => set({ DprdTypeProvinsi: type }),

  // Separate actions for setting DPRD Kota ID and Type
  setDprdIdKota: (id) => set({ DprdIdKota: id }),
  setDprdTypeKota: (type) => set({ DprdTypeKota: type }),

  // New methods to reset loading state
  resetLoadingDpr: () => set({ isLoadingDpr: true }),
  resetLoadingDprdProvinsi: () => set({ isLoadingDprdProvinsi: true }),
  resetLoadingDprdKota: () => set({ isLoadingDprdKota: true }),
})));

export default useCalegStore;
