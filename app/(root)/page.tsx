import React from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="Todos os videos" subHeader="Biblioteca" />

      {dummyCards.map((card, index) => (
        <VideoCard key={index} {...card} />
      ))}
    </main>
  );
};

export default Page;
