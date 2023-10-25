import Link from "next/link";


export default function Footer() {
    return (
        <>
            <div className="  py-10 border-t flex px-10 justify-around flex-wrap gap-10">
                <div className="">
                    <h3 className="text-lg font-bold">Frnoro.</h3>
                    <p className="text-grey text-sm my-10 font-semibold leading-4">400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA</p>
                </div>
                <div>
                    <ul className="font-semibold flex flex-col gap-2">
                        <li className="text-grey mb-6">Links</li>
                        <li><Link className="hover:text-grey font-semibold" href='/'>Home</Link></li>
                        <li><Link className="hover:text-grey font-semibold" href='/Shop'>Shop</Link></li>
                        <li><Link className="hover:text-grey font-semibold" href='/About'>About</Link></li>
                        <li><Link className="hover:text-grey font-semibold" href='./Contact'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="font-semibold flex flex-col gap-2">
                        <li className="text-grey mb-6">Help</li>
                        <li><Link className="hover:text-grey font-semibold" href='#'>Payment Options</Link></li>
                        <li><Link className="hover:text-grey font-semibold" href='#'>Returns</Link></li>
                        <li><Link className="hover:text-grey font-semibold" href='#'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold text-grey mb-10">Newsletter</p>
                    <form action="" method="post">
                        <input className="border-b-2 text-sm  border-black focus:outline-none" placeholder="Enter your email Address" type="text" />
                        <button className="border-b-2 text-sm  border-black mx-2 font-semibold" type="submit">SUBSCRIBE</button>
                    </form>

                </div>

            </div>
            <div className="mx-20  py-4 border-t">
                <p className="text-grey text-center sm:text-left">2023 furino. All rights reverved &copy;</p>
            </div>
        </>
    )
}
