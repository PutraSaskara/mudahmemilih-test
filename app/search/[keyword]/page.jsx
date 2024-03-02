import { decodeURIComponent } from 'globalthis/implementation';
import CalegSarch from "../../../components/searchpage/CalegSarch";


function page(param) {
  console.log(param)
  return (
    <div className="p-2">
      <h1>Pencarian untuk {decodeURIComponent(param.params.keyword)}</h1>
      <section>
      <button className="mt-10 font-bold text-[20px]">Daftar Caleg</button>
      <CalegSarch params={param.params.keyword} />
      </section>
    </div>
  );
}

export default page;
