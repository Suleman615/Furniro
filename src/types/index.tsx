export interface CartItem {
    id: string,
    image: string,
    title: string,
    quantity: number
}
export interface fetchFurnitureProps {
    limit: number,
    offset: number,
    keyword: string
}

export interface productDetailProps {
    ID: string,
    title: string,
    colors: Array<String>
    srcImage: string
    stars: number
    statusCode: number

}