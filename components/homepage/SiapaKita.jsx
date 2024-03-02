import React from "react";
import SellingPoint from "./SellingPoint";

const SiapaKita = () => {
  return (
    <section className="bg-white my-4 lg:mx-20 mx-10 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center mx-auto">
          {/* left content */}

          <div className=" ml-4 mr-10">
            <h2 className="lg:text-3xl text-2xl font-semibold mb-6 font-sans">
              Apasih bedanya{" "}
              <span className="text-primary mr-2">mudahmemilih</span>
              dibanding yang lain?
            </h2>
            <p className="text-gray-700 text-left max-w-2xl mb-8 font-sans">
            Informasi caleg yang kalian cari lebih terarah karena adanya filter lokasi untuk memudahkan kalian mengenal caleg di daerah kalian. Ga perlu pusing nyari info kesana sini, cukup disini aja udah paket komplit!
            </p>
          </div>

          {/* right content */}
          <div className="  flex flex-row justify-center">
            <SellingPoint />
          </div>
          {/* selling point komponent */}
        </div>
      </div>
    </section>
  );
};

export default SiapaKita;
