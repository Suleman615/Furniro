import { fetchFurnitureProps } from "@/types"

export async function FetchFurniture({ limit }: fetchFurnitureProps) {
  const headers = {
    'X-RapidAPI-Key': '2056ad5e48msh9d45e10931e9297p1471b9jsna680b87e2511',
    'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
  }

  // const response = await fetch(`https://kohls.p.rapidapi.com/products/list?limit=${limit}`, { headers: headers })
  // return response.json()

}
