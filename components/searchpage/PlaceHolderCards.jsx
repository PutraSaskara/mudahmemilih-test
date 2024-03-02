import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

const PlaceHolder = () => {
  return (
    <div className="mx-4 my-2 w-fit rounded-3xl overflow-hidden bg-slate-400">
      <PlaceholderLoading shape="rect" width={230} height={340} />
    </div>
  );
};

const PlaceHolderGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
      {Array.from({ length: 8 }, (_, index) => (
        <PlaceHolder key={index} />
      ))}
    </div>
  );
};

export default PlaceHolderGrid;
