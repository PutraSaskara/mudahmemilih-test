  "use client"
    import React, {useState, useEffect} from "react";
    import ImageCarousel2 from "../searchpage/ImageCarousel2.jsx"
    import useAuthStore from '../ZustandStore/authStore'


    function Dpr(params) {
      const [dprData, setDprData] = useState([]);
    const { token, initOnce } = useAuthStore();

    useEffect(() => {
      // Initialize the auth store to get the token
      initOnce();
    }, [initOnce]);

    useEffect(() => {
      if (token) {
        // Fetch data once the token is available
        fetchData();
      }
    }, [token]);

    const fetchData = () => {
      const calegKota = {params}; // Replace with actual city name or variable
      console.log('data params calegKota', calegKota)
      const url = `https://server.mudahmemilih.com/api/v2/calegs/search/${calegKota.params.params}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        // Handle your data here
        setDprData(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (Array.isArray(data)) {
          setDprData(data);
        } else {
          console.error('Data is not an array:', data);
          // Handle the case when data is not an array, e.g., set an empty array or a default value
          setDprData([]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    };

    console.log('data calegDPR', dprData)

      return (
        <div className="mt-[20px] h-[700px] mx-auto overflow-y-scroll scroll-smooth border-t-4  border-b-4  border-slate-500 mb-5">
          
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-5 pt-5">
          {Array.isArray(dprData) && dprData.map((item) => (
                  <div key={item.id}>
                    <ImageCarousel2
                    
                      src={`https://server.mudahmemilih.com/storage/images/calegs/${item.img_caleg}`}
                      alt={item.nama}
                      href={`/calegs/${item.slug}`}
                      title={item.title}
                      dapil={item.nama_dapil}
                      name={item.nama}
                      logoPartai={"/No_image.png"}
                      partai={item.nama_partai}
                      content={item.nama}
                      
                    />
                  </div>
                ))}
          </div>
        </div>
      );
    }

    export default Dpr;
