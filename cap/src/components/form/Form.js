import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form = () => {

    const navigate = useNavigate();

    const [denomination, setDenomination] = useState("");
    const [sigle, setSigle] = useState("");
    const [siegeSocial, setSiegeSocial] = useState("");
    const [capitalSocial, setCapitalSocial] = useState(0);
    const [greffe, setGreffe] = useState("");

    const dataInfo = {
        DENOMINATION : denomination,
        SIGLE : sigle,
        SIEGE_SOCIAL :siegeSocial,
        SOCIAL_TYPE : capitalSocial,
        GREFFE :greffe

    }


    const SubmitForm = async (e) => {
        e.preventDefault();
        try{
            const response = await  axios.post("http://localhost:3001/contracts/submit", dataInfo)
            navigate("/allcontracts")
            console.log(response)
        }
        catch(e) {
            console.log(e,'error')
        }




    }


    return (
                <section className=" py-1 bg-blueGray-50">
                    <div className="w-full lg:w-8/12 px-4 mx-auto mt-10">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-blueGray-700 text-xl font-bold uppercase">
                                       Fiche d'identification et d'information societes
                                    </h6>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Information Entreprise
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                                    Denomination
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    value={denomination}
                                                    onChange={(e) => setDenomination(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                                    SIGLE
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    value={sigle}
                                                    onChange={(e) => setSigle(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                                    SIEGE SOCIAL
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    value={siegeSocial}
                                                    onChange={(e) => setSiegeSocial(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                                    CAPITAL SOCIAL TYPE AP
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    value={capitalSocial}
                                                    onChange={(e) => setCapitalSocial(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mt-6 border-b-1 border-blueGray-300"/>
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            AUTRES INFORMATION
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                                        GREFFE DE COMMERCE
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        value={greffe}
                                                        onChange={(e) => setGreffe(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/*<div className="w-full lg:w-4/12 px-4">*/}
                                            {/*    <div className="relative w-full mb-3">*/}
                                            {/*        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">*/}
                                            {/*            City*/}
                                            {/*        </label>*/}
                                            {/*        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York"/>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="w-full lg:w-4/12 px-4">*/}
                                            {/*    <div className="relative w-full mb-3">*/}
                                            {/*        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">*/}
                                            {/*            Country*/}
                                            {/*        </label>*/}
                                            {/*        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States"/>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="w-full lg:w-4/12 px-4">*/}
                                            {/*    <div className="relative w-full mb-3">*/}
                                            {/*        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">*/}
                                            {/*            Postal Code*/}
                                            {/*        </label>*/}
                                            {/*        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code"/>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>

                                    <button className= "border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                            onClick={SubmitForm}
                                    >
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                        <footer className="relative  pt-8 pb-6 mt-2">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                                            <p  className="text-blueGray-500 hover:text-gray-800" >CAP ENTREPRISES 93</p> .
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
        )

}


export default Form;