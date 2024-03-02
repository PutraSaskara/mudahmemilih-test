import Hero1 from "../../../components/profilepage/Hero1";
import Nav from "@/components/profilepage/nav";
import VisiMisi from "../../../components/profilepage/VisiMisi";
import SiapaSaya2 from "../../../components/profilepage/SiapaSaya2";
import FavoriteButton from "@/components/profilepage/FavoriteButton";

async function fetchCalegData(slug) {
  const apiUrl = `http://server.mudahmemilih.com/api/v2/calegs/${slug}`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function generateMetadata({ params }, parent) {
  try {
    const apiData = await fetchCalegData(params.slug);
    const calegData = apiData?.data[0];

    // const { attributes } = apiData?.data || {};
    const title =
      "MudahMemilih-Caleg 2024 " + calegData?.nama || "MudahMemilih Caleg";
    const imageUrl =
      `https://server.mudahmemilih.com/storage/images/calegs/${calegData.img_caleg}` ||
      "";
    const description =
      `${calegData?.nama} adalah Caleg DPR/DPRD 2024 dari partai ${calegData.nama_partai} untuk daerah pemilihan dapil ${calegData.nama_dapil}` ||
      "";
    const keywords = `caleg 2024, ${calegData?.nama}, daerah pemilihan ${calegData.nama_dapil},caleg partai ${calegData.nama_partai}`;

    const previousImages = (await parent)?.openGraph?.images || [];

    return {
      title,
      description,
      keywords,
      openGraph: {
        images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      title: "Default Title",
      openGraph: {
        images: [],
      },
    };
  }
}

async function Page({ params }) {
  const apiData = await fetchCalegData(params.slug);

  const calegData = apiData?.data[0];
  console.log("ini caleg data", calegData);

  console.log("ini API DATA = ", params);

  // i want to store the "params", in handleCLickFavorite in localstorage

  return (
    <div>
      <Hero1
        name={calegData.nama}
        quotes={calegData.kab_kota}
        imgBenner={"/bg-baru.png"}
        imgProfle={`https://server.mudahmemilih.com/storage/images/calegs/${calegData.img_caleg}`}
        email={calegData.email}
        ig={"http://www.instagram.com/"}
        fb={"http://www.facebook.com"}
        noUrut={calegData.no_urut}
        dapil={calegData.nama_dapil}
        imgPartai={"/No_image.png"}
        namaPartai={calegData.nama_partai}
        alt={calegData.nama}
        favorit={calegData}
      />
      {/* <div className="md:flex hidden flex-col justify-center items-center mx-auto">
        <FavoriteButton params={calegData} />
      </div> */}
      <Nav
        visi={
          <VisiMisi visi={calegData.visi_misi} misi={calegData.visi_misi} />
        }
        siapa={
          <SiapaSaya2
            nama={calegData.nama}
            asal={calegData.kab_kota}
            partai={calegData.nama_partai}
            daerah={calegData.nama_dapil}
          />
        }
        eventStyle={
          <div className="mb-[200px] w-full relative">
            <h1>Maaf belum ada event yang tersedia.</h1>
          </div>
        }
      />
    </div>
  );
}

export default Page;
