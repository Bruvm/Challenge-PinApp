"use server"
import { redirect } from "next/navigation";

export async function getSearchProduct(query: string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/json-server/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('RESPONSE::', response)
      const products = await response.json();
      console.log('products::', products)
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?sku=${sku}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const product = await response.json();
        if (!product || product.length === 0) {
          redirect("/error/404");
        }
        return product; 
      } catch (error) {
        console.error("Error", error);
        redirect("/error/500");
      }
  }
