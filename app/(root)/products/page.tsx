"use client";

import { getProductBySku } from "@/lib/products.action";
import { useEffect } from "react";

export default function ProductsPage () {
    const handleSearch = async () => {
      try {
        let response
          response = await getProductBySku('P001');
          console.log('response')
      } catch (error) {
        console.error("Error", error);
      }
    };
  
    useEffect(() => {

      handleSearch()
  
    }, []);
  return null
}

