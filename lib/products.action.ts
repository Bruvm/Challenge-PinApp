"use server"
import { API_BASE_URL } from "@/api";
import { redirect } from "next/navigation";

async function handleFetchErrors(response: Response) {
  if (!response.ok) {
    if (response.status === 400) {
      redirect("/400");
    } else if (response.status === 500) {
      redirect("/500");
    }
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
}

export async function getSearchProduct(query: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);

      await handleFetchErrors(response);

      const products = await response.json();
      const filteredProducts = products.filter((product: { name: string; sku: string }) =>
        product.name.toLowerCase().includes(query.toLowerCase()) || 
        product.sku.toLowerCase().includes(query.toLowerCase())
      );
  
      return filteredProducts.length > 0 ? filteredProducts : [];
    } catch (error) {
      console.error("Error", error);
      return []
    }
  }
  
  
  export async function getProductBySku(sku: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/products?sku=${sku}`);
        await handleFetchErrors(response);
        return await response.json();
      } catch (error) {
        console.error("Error", error);
        return []
      }
  }