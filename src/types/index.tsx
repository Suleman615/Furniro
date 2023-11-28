import { Url } from "next/dist/shared/lib/router/router"

export interface fetchFurnitureProps {
    limit: number,
    offset: number,
    keyword: string
}

export interface productDetailProps {
    ID: number,
    title: string,
    colors: Array<String>
    srcImage: string
    stars: number
    statusCode: number

}