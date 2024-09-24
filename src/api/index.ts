import { fetchFurnitureProps } from "@/types";

export async function FetchFurniture({ limit }: fetchFurnitureProps) {
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST as string,
  };

  // const response = await fetch(`https://kohls.p.rapidapi.com/products/list?limit=${limit}`, { headers: headers });
  // return response.json();
}
