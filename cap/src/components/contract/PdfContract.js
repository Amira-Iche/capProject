import {Link} from "react-router-dom";
import Contract from "./Contract";
import {Text} from "@react-pdf/renderer";

const PdfContract = () => {


    return(
        <div id='divToPrint' className="flex flex-col items-center ">
            <Text>
                <hr className="w-3/6 h-px bg-gray-200 border-0 dark:bg-gray-700 mt-6"></hr>
                <h2 className="text-5xl my-6 font-bold">STATUTS</h2>
                <hr className="w-3/6 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className="bg-gray-300 my-8 px-8 py-2 w-4/6">
                    <h1 className="text-4xl text-center font-bold">
                        test
                    </h1>
                </div>

                <p className="text-center underline text-lg">Société par Action Simplifiée Unipersonnelle</p> <br/> <span className="font-bold no-underline text-lg"> au capital social de test euros</span>
            </Text>

            <div className="bg-gray-300 my-6 px-8 py-2 w-4/6">
                <h1 className="text-4xl text-center font-bold">SIGLE : test </h1>
            </div>
            <span className="font-semibold py-2"> Siège Social:</span>
            <p className="text-center">
                test

            </p>

            <h3 className="font-semibold text-lg my-6">RCS au Greffe de test</h3>
            <hr className="w-5/6 h-px my-8  border-2 border-solid border-gray-500 "></hr>


    <div className="flex justify-around ">
        <p className="text-left text-xs font-medium mb-4">STATUTS CONSTITUTIFS SASU  test </p>

    </div>
        </div>
    )
}

export default PdfContract;