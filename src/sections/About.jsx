export const About = () => {
    return (
        <div className="px-16 lg:px-28 bg-[#061523] min-h-screen min-w-full overflow-hidden text-white ">

            {/* comparision */}
            <div>
                <Comparision />
            </div>


            {/* features */}
            <div></div>
        </div>
    )
}

const Comparision = () => {
    return (
        <div>
            {/* <h1>Why MoonEX</h1> */}
            <h1>Why MoonEx?</h1>
            <div className="bg-[rgba(39,62,75,0.36)] rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.9px]   ">
                <table className="w-full">
                    <thead>
                        <tr className="flex justify-between items-center">
                            <th className="text-[#E4B40D]">Comparision</th>
                            <th><img className="w-32" src="logo.png" alt="" /></th>
                            <th><img className="w-32"  src="Uniswap_Logo.png" alt="" /></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="flex gap-4 justify-between  items-center">
                            <td>1. Point no one</td>
                            <td><img src="coolicon.png" alt="" /></td>
                            <td><img src="close_small.png" alt="" /></td>
                        </tr>
                        <tr className="flex gap-4">
                            <td>1. Point no one</td>
                            <td>Row 1, Col 2</td>
                            <td>Row 1, Col 3</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}