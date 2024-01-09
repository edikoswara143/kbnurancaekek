import React from "react";
import dataPosts from "@/components/banner/_lib/data";

function Banner() {
  return (
    <div className="flex flex-col laptop:flex-row items-center w-full justify-between space-x-0 laptop:space-x-4 space-y-4 laptop:space-y-0">
      <div className="flex w-full laptop:w-8/12 h-[500px] rounded-lg relative">
        <img
          className="relative inset-0 h-full w-full bg-cover object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="KBNU RANCAEKEK"
        />
        <div className="absolute bottom-0 w-full h-32 p-4 bg-black/35 items-start justify-center flex flex-col">
          <h3 className="font-bold text-slate-200 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-sm line-clamp-2 w-full text-slate-200 leading-relaxed tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            doloremque illum, porro laudantium assumenda dolores ducimus iusto
            dolor cumque culpa quae pariatur omnis obcaecati ut nulla animi quis
            facilis odit.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full laptop:w-4/12">
        {dataPosts.map((dataPost) => (
          <div key={dataPost._id}>
            <div className="flex items-center space-x-3 h-[87.2px] rounded-lg p-2 drop-shadow-lg bg-white/25">
              <div className="w-3/12 h-full flex relative">
                <div className="h-full w-full relative">
                  <img
                    className="relative inset-0 h-full w-full bg-cover object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="KBNU RANCAEKEK"
                  />
                </div>
              </div>
              <div className="w-9/12 flex flex-col">
                <span className="font-semibold line-clamp-1 text-slate-900 text-sm mb-1">
                  {dataPost.title}
                </span>
                <p className="tracking-wide line-clamp-2 text-xs font-normal">
                  {dataPost.content}
                </p>
                <span className="hidden tablet:flex text-xs font-light text-slate-500 pt-2">
                  <div className="font-bold">{dataPost.author}</div> -{" "}
                  {dataPost.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
