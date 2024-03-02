"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useAuthStore from "../ZustandStore/authStore";
import Loading from "../Loading";
import ImageCarousel2 from "../searchpage/ImageCarousel2";

const AutoPlaySlider = () => {
  const [calegs, setCalegs] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {  
      setIsLoading(true); // Start loading
      fetchCalegs();
    }
  }, [token]);

  const fetchCalegs = () => {
    fetch(
      "https://server.mudahmemilih.com/api/v2/calegs?filter[featuring]=2",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let items = Array.isArray(data) ? data : data.data;
        if (items) {
          shuffleArray(items);
          setCalegs(items.slice(0, 12));
        } else {
          console.error("Data is not in expected format:", data);
        }
        setIsLoading(false); // Stop loading after data is set
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Stop loading on error
      });
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints if needed
    ],
  };

  console.log('data corosel',  calegs)

  return (
    <>
      <div className="my-4">
        <h2 className="flex text-center flex-col font-sans text-[36px]">
          Tentukan Kandidat Pilihanmu
        </h2>
        <p className="text-center text-abu mx-2 font-sans text-[16px]">
          Yuk, ajak caleg favoritmu ke panggung perubahan!
        </p>
      </div>
      {isLoading ? (
        <div className="py-[100px]">
          <Loading />{" "}
        </div> // Loading indicator
      ) : (
        <Slider {...settings}>
          {calegs &&
            Array.isArray(calegs) &&
            calegs.map((item) => (
              <div key={item.id}>
                <ImageCarousel2
                  src={
                    `https://server.mudahmemilih.com/storage/images/calegs/${item.attributes.img_caleg}`
                  }
                  alt={item.attributes.nama}
                  href={`/calegs/${item.id}`}
                  title={item.attributes.title}
                  dapil={item.attributes.nama_dapil}
                  name={item.attributes.nama}
                  logoPartai={"/No_image.png"}
                  partai={item.attributes.nama_partai}
                  content={item.attributes.nama}
                />
              </div>
            ))}
        </Slider>
      )}
    </>
  );
};

export default AutoPlaySlider;
