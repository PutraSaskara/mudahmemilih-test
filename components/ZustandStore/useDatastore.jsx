"use client";

import { create } from "zustand";
import useAuthStore from "../ZustandStore/authStore";
import API_ENDPOINTS from "@/config";

const useDataStore = create((set) => ({
  // deklarasikan state
  data: [],
  selectedProvinsi: "PILIH PROVINSIMU",
  selectedKabKota: "",
  searchParam: "",
  selectedNama: [],
  kecamatan: "",
  namaKecamatan: "",
  selectedKecamatanData: "",


  // state fetchdata useeffect
  fetchData: () => {
    console.log("Fetching data using the token...");

    const token = useAuthStore.getState().token;
    console.log(`token: ${token}`);
    const { searchParam } = useDataStore.getState();

    if (!token) {
      console.error("No token found, cannot fetch data.");
      return;
    }

    const apiUrl = `${API_ENDPOINTS.searchDapils}?search=${searchParam}`;

    console.log("Fetching data from:", apiUrl);

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Received response with status:", response.status);

        if (!response.ok) {
          throw new Error(
            "Data fetching failed with status: " + response.status
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received successfully:", data.data);
        set({ data: data.data });
      })
      .catch((error) => {
        console.error("Error occurred during data fetching:", error);
      });
  },

  // Method to set the selected province
  setSelectedProvinsi: (provinsi) => {
    set({ selectedProvinsi: provinsi });
  },

  // Method to get data filtered by selected province
  getFilteredData: () => {
    const { data, selectedProvinsi } = useDataStore.getState();
    if (!data || !selectedProvinsi) return [];

    return data.filter((item) => item.provinsi === selectedProvinsi);
  },

  // stateSearchParam
  setSearchParam: (param) => {
    console.log("Setting searchParam:", param);
    set({ searchParam: param });
  },
  // Method to set the selected kab/kota
  setSelectedKabKota: (kabKota) => {
    set({ selectedKabKota: kabKota });
  },

  // Method to set the selected nama
  setSelectedNama: (nama) => {
    set({ selectedNama: nama });
  },

  setKecamatan: (kecamatan) => {
    set({ kecamatan });
  },

  setNamaKecamatan: (namaKecamatan) => set({ namaKecamatan }),

  setSelectedKecamatanData: (data) => set({ selectedKecamatanData: data }),
}));

export default useDataStore;
