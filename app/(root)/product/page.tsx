"use client";

import { getProductBySku } from "@/lib/products.action";
import { useEffect } from "react";

export default function ProductsPage () {
    const handleSearch = async () => {
      try {
        const response = await getProductBySku('P001');
          console.log('response', response)
      } catch (error) {
        console.error("Error", error);
      }
    };
  
    useEffect(() => {

      handleSearch()
  
    }, []);
  return null
}