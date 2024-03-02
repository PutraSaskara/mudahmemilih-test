"use client";

import React, { useState, useEffect, useMemo } from "react";
import useDataStore from "@/components/ZustandStore/useDatastore";
import SearchComponent from "@/components/searchpage/SearchComponent";
import DprCards from "../../components/searchpage/Dpr";
import DprdCards from "../../components/searchpage/Dprd";
import useCalegStore from "@/components/ZustandStore/useCalegStore";
import DprdKotaCards from "@/components/searchpage/DprdKota";
import PlaceHolderCards from "@/components/searchpage/PlaceHolderCards";
import Nav2 from "@/components/searchpage/Nav2";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function Page() {
  const { data, fetchData, searchParam, selectedProvinsi } = useDataStore();
  const {
    fetchCalegs,
    setCalegType,
    setDapilId,
    dataCaleg,
    DprId,
    DprType,
    DprdIdProvinsi,
    DprdTypeProvinsi,
    DprdIdKota,
    DprdTypeKota,
    setDprId,
    setDprdIdProvinsi,
    setDprType,
    setDprdTypeProvinsi,
    setDprdIdKota,
    setDprdTypeKota,
    dataCalegForDprdProvinsi,
    dataCalegForDprdKota,
    fetchCalegsForDprdProvinsi,
    fetchCalegsForDprdKota, // State variable holding caleg data
    isLoadingDpr,
    isLoadingDprdProvinsi,
    isLoadingDprdKota
  } = useCalegStore();

  const [isDprFetched, setIsDprFetched] = useState(false);
  const [isDprdProvinsiFetched, setIsDprdProvinsiFetched] = useState(false);

  // useMemo hook to filter data for DPR (Dewan Perwakilan Rakyat)
  const Dpr = useMemo(
    () => data.filter((item) => item.dapil_type === 1),
    [data] //
  );

  // useMemo hook to filter data for DPRD Provinsi
  const DprdProvinsi = useMemo(
    () => data.filter((item) => item.dapil_type === 2),
    [data]
  );

  // useMemo hook to filter data for DPRD Kota
  const DprdKota = useMemo(
    () => data.filter((item) => item.dapil_type === 3),
    [data] // Dependency array
    // for useMemo
  );

  useEffect(() => {
    const fetchDataSequentially = async () => {
      // Set DPR ID and Type
      if (Dpr.length > 0) {
        const dprId = Dpr[0].id;
        const dprType = Dpr[0].dapil_type;
        setDprId(dprId);
        setDprType(dprType);
        console.log("DPR ID:", dprId, "DPR Type:", dprType);
      }

      // Fetch data for DPR
      if (DprId !== undefined && DprType !== undefined) {
        await fetchCalegs();
        setIsDprFetched(true);
      }

      // Set DPRD Provinsi ID and Type
      if (DprdProvinsi.length > 0) {
        const dprdProvinsiId = DprdProvinsi[0].id;
        const dprdProvinsiType = DprdProvinsi[0].dapil_type;
        setDprdIdProvinsi(dprdProvinsiId);
        setDprdTypeProvinsi(dprdProvinsiType);
        console.log(
          "DPRD Provinsi ID:",
          dprdProvinsiId,
          "DPRD Provinsi Type:",
          dprdProvinsiType
        );
      }

      // Fetch data for DPRD Provinsi
      if (
        isDprFetched &&
        DprdIdProvinsi !== undefined &&
        DprdTypeProvinsi !== undefined
      ) {
        await fetchCalegsForDprdProvinsi(DprdIdProvinsi, DprdTypeProvinsi);
        setIsDprdProvinsiFetched(true);
      }

      // Set DPRD Kota ID and Type
      if (DprdKota.length > 0) {
        const dprdKotaId = DprdKota[0].id;
        const dprdKotaType = DprdKota[0].dapil_type;
        setDprdIdKota(dprdKotaId);
        setDprdTypeKota(dprdKotaType);
        console.log(
          "DPRD Kota ID:",
          dprdKotaId,
          "DPRD Kota Type:",
          dprdKotaType
        );
      }

      // Fetch data for DPRD Kota
      if (
        isDprdProvinsiFetched &&
        DprdIdKota !== undefined &&
        DprdTypeKota !== undefined
      ) {
        await fetchCalegsForDprdKota(DprdIdKota, DprdTypeKota);
      }
    };

    fetchDataSequentially();
  }, [
    Dpr,
    DprdKota,
    DprdProvinsi,
    DprId,
    DprType,
    isDprFetched,
    DprdIdProvinsi,
    DprdTypeProvinsi,
    isDprdProvinsiFetched,
    DprdIdKota,
    DprdTypeKota,
    fetchCalegs,
    fetchCalegsForDprdProvinsi,
    fetchCalegsForDprdKota,
  ]);

  // Fetching data for DPR
  useEffect(() => {
    if (DprId !== undefined && DprType !== undefined) {
      setCalegType(DprType);
      setDapilId(DprId);
      fetchCalegs();
      setIsDprFetched(true); // Set flag to true when fetch completes
    }
  }, [DprId, DprType, setCalegType, setDapilId, fetchCalegs]);

  // Fetching data for DPRD Provinsi - depends on DPR data being fetched
  useEffect(() => {
    if (
      isDprFetched &&
      DprdIdProvinsi !== undefined &&
      DprdTypeProvinsi !== undefined
    ) {
      fetchCalegsForDprdProvinsi(DprdIdProvinsi, DprdTypeProvinsi);
      setIsDprdProvinsiFetched(true); // Set flag to true when fetch completes
    }
  }, [
    isDprFetched,
    DprdIdProvinsi,
    DprdTypeProvinsi,
    fetchCalegsForDprdProvinsi,
  ]);

  // Fetching data for DPRD Kota - depends on DPRD Provinsi data being fetched
  useEffect(() => {
    if (
      isDprdProvinsiFetched &&
      DprdIdKota !== undefined &&
      DprdTypeKota !== undefined
    ) {
      fetchCalegsForDprdKota(DprdIdKota, DprdTypeKota);
    }
  }, [isDprdProvinsiFetched, DprdIdKota, DprdTypeKota, fetchCalegsForDprdKota]);

  // useEffect hook to log dataCaleg when it changes
  // useEffect(() => {
  //   console.log("Data Caleg:", dataCaleg);
  // }, [dataCaleg]); // Dependency array for useEffect

  return (
    <div className="mt-32">
      <div className="mx-2">
        {/* <SearchComponent /> */}
        <Link href={"/searchPage"} className="flex justify-start items-center">
          <IoIosArrowBack size={30} className="text-primary" />
          <h4>Kembali</h4>
        </Link>
        <Nav2
          isLoadingDpr={isLoadingDpr}
          isLoadingDprdProvinsi={isLoadingDprdProvinsi}
          isLoadingDprdKota={isLoadingDprdKota}
          prop1={<DprCards calegData={dataCaleg.data} />}
          prop2={<DprdCards calegData={dataCalegForDprdProvinsi.data} />}
          prop3={<DprdKotaCards calegData={dataCalegForDprdKota.data} />}
        ></Nav2>
      </div>
    </div>
  );
}

export default Page;
