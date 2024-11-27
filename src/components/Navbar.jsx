import { Button } from "./Button"

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center font-semibold fixed top-4 right-10 lg:right-16 left-10 lg:left-16">
            <div>
                <img src="logo.png" alt="logo" className="w-44"/>
            </div>

            <ul className="flex lg:gap-14 gap-8">
                <li> <a href="">Home</a> </li>
                <li> <a href="">AboutUs</a> </li>
                <li> <a href="">Roadmap</a> </li>
                <li> <a href="">FAQs</a> </li>
                <li> <a href="">Contact Us</a> </li>
            </ul>

            <div>
                <Button label='Connect Wallet' type='filled'/>

            </div>
        </div>
    )
}