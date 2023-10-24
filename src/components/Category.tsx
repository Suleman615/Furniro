import CategoryCard from "./CategoryCard";


export default function Category() {
    return (
        <div className="pt-16 pb-5">
            <div className="text-center">
                <h3 className="text-md font-bold text-black">Brouse The Range</h3>
                <p className="text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 py-16">

                <CategoryCard />
                <CategoryCard />
                <CategoryCard />


            </div>
        </div>
    )
}
