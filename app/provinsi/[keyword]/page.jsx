"use client"
import { useSearchParams } from 'next/navigation';
import { decodeURIComponent } from 'globalthis/implementation';
import KotaSearch from "../../../components/search/KotaSearch";

function mapIdToValue(id) {
  switch (id) {
    case "dpr":
      return "1";
    case "dprd-provinsi":
      return "2";
    case "dprd-kota":
      return "3";
    default:
      return id;
  }
}


function Page(param) {
  const searchParams = useSearchParams()
  let id = searchParams.get("id")
  console.log(param)
  console.log("ini id", id)

  id = mapIdToValue(id);
  return (
    <div className="p-2 mt-[100px]">
      <section >
      <h1 className="mt-10 font-bold text-[20px]">Daftar Caleg Provinsi {decodeURIComponent(param.params.keyword)}</h1>
      <KotaSearch params={param.params.keyword} id={id}/>
      </section>
    </div>
  );
}

export default Page;
