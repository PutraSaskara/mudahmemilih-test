"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCarousel2 from "../searchpage/ImageCarousel2.jsx";
import useAuthStore from "../ZustandStore/authStore";
import Loading from "../Loading.jsx";

function KotaSearch({params, id}) {
  const [calegData, setCalegData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      // Fetch data once the token is available
      fetchData();
    }
  }, [token, page]);

  const fetchData = () => {
    const calegKota = { params };
    id = {id}
    const value = id?.id; // Directly assign the value of id
    console.log("ini nilai value", value);
    // console.log("ini nilai calegKota", calegKota);
  
    // Check if value.id is defined before including it in the URL
    const calegTypeFilter = value !== undefined && value !== null ? `&filter[caleg_type]=${value}` : '';
  
    const url = `https://server.mudahmemilih.com/api/v2/calegs?filter[provinsi]=${calegKota.params}&page[number]=${page}&page[limit]=100${calegTypeFilter}`;
  
    console.log("ini url", url);
  
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setCalegData((prevData) => [...prevData, ...data.data]);
      setHasMore(data.data.length > 0); // Update hasMore
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setHasMore(false);
    });
  };
  

  
  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mt-[20px] w-full mx-auto border-t-4 border-b-4 border-slate-500 py-1">
      <InfiniteScroll
        height={700}
        dataLength={calegData.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<div className="absolute"><Loading /></div>}
        endMessage={<h1>Kamu Sudah Melihat Semua Data Caleg</h1>}
        className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-5"
      >
          {Array.isArray(calegData) &&
            calegData.map((item, index) => (
              <div key={index}>
                <ImageCarousel2
                  src={
                    `https://server.mudahmemilih.com/storage/images/calegs/${item.attributes.img_caleg}`
                  }
                  alt={item.attributes.nama}
                  href={`/calegs/${item.attributes.slug}`}
                  title={item.attributes.title}
                  dapil={item.attributes.nama_dapil}
                  name={item.attributes.nama}
                  logoPartai={"/No_image.png"}
                  partai={item.attributes.nama_partai}
                  content={item.attributes.nama}
                />
              </div>
            ))}
      </InfiniteScroll>
        </div>
  );
}

export default KotaSearch;
