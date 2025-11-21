"use client";

import { useLocate } from "../hooks/useLocate";
import { useTime } from "../hooks/useTime";
// import ReactCountryFlag from "react-country-flag";
import { Globe, Loader } from "feather-icons-react";

export default function Card() {
  const { data, loading } = useLocate();
  const time = useTime();

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="opacity-80 border-b  rounded-xl p-5 shadow-inner shadow-green-500/90 text-shadow-lg text-shadow-green-500/20
    bg-radial from-green-500/30 to-transparent hover:text-shadow-green-500/30 transition-all duration-700"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-center gap-3">
          <div>
            <Globe size={50} />
          </div>
          <div className="">
            <h2 className="text-xl tracking-wide">Your Ip Address</h2>
            <h1 className="text-2xl font-black">{data?.query}</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          {/* {data && (
            <ReactCountryFlag
              countryCode={data.countryCode}
              style={{
                fontSize: "2.5em",
                lineHeight: "2.5em",
                opacity: 0.8,
              }}
              svg
            />
          )} */}
          <h1 className="">{data?.country}</h1>
          <h1 className="">{data?.regionName}</h1>
          <h1 className="">{data?.zip}</h1>
        </div>
        <h1 className="text-xl tracking-widest text-center">{time}</h1>
        <div className="text-center">
          <h1>{data?.isp}</h1>
        </div>
        <div className="text-center text-sm">
          {data?.proxy || data?.hosting ? (
            <h1 className="text-green-500 text-shadow-lg text-shadow-green-500/20 hover:text-shadow-green-500/40 transition-all duration-400">You are protected.</h1>
          ) : (
            <h1 className="text-red-600 text-shadow-lg text-shadow-red-500/20 hover:text-shadow-red-500/40 transition-all duration-400">
              You are not protected.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
