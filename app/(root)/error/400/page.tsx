"use client";
import * as React from "react"
import Image from "next/image";
import BackButton from "@/components/shared/BackButton/BackButton";

export default function error400() {
    return (
      <div className="grid grid-cols-12 justify-center items-center space-y-12 p-5 w-full h-full">
        <div className="col-span-12 items-center mx-auto w-[50%] h-[50%] flex flex-col justify-center items-center">
          <Image 
            src="/assets/images/400.png" 
            alt="error400"  
            layout="intrinsic" 
            objectFit="cover" 
            priority
            width={500}
            height={500}
          />
          <BackButton message={'Volver al inicio'}/>
        </div>
      </div>
    );
}
  