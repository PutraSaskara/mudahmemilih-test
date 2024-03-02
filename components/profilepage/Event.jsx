
import React from "react";
import EventStyle from "./EventStyle"

function Event() {
  return (
    <div className="mt-20">
        <h1 className="text-center text-3xl font-bold">Event</h1>
      <EventStyle image={"/prabowo.jpeg"} alt="Prabowo" name="Prabowo" title="Acara Bersih-Bersih Bersama di Kompleks Kampung Citayem" description="Melihat akan musim hujan makan bapak Prabowo menghimbau masyarakat kampung citayem bersih-bersih sendiri" date="10 Desember 2023"/>
      <EventStyle image={"/anis.jpg"} alt="Anis" name="Anis" title="Acara Makan Bersama Masyarakat Rohingnya" description="Melihat kurangnya pemerintah memperhatikan masyarakat rohingnya, terutma dalam hal pangan. Maka Anis akan mengadakan makan-makan di rumahnya sendiri"/>
      <EventStyle image={"/ganjar.jpg"} alt="Ganjar" name="Ganjar" title="Sambutan Pelepasan Ikan Sapu-Sapu" description="Melihat banyaknya msyarakat memerlukan ikan, maka d adakan pelepasan ikan sapu sapu di bendungan"/>

    </div>
  );
}

export default Event;
