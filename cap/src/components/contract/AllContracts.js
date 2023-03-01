import {useEffect, useState} from "react";
import axios from "axios";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Contract from "./Contract";



const AllContracts = () => {
    const [allContracts, setAllContracts] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3001/contracts/all-contracts")
            .then(res => {
                setAllContracts(res.data)
                console.log(res.data)
            })

    }, [])

    return(
        <div className="flex flex-col items-center mt-9 ">
            {allContracts.map(contract=> {
                return (
                    <div className="max-w-md py-4 px-8 bg-blue-50 shadow-lg rounded-lg my-10">
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">{contract.DENOMINATION}</h2>
                            <p className="mt-2 text-gray-600 mb-4">{contract.SIEGE_SOCIAL} </p>
                        </div>
                        <PDFDownloadLink document={<Contract contractId ={contract.id} />} fileName="Contract.pdf">
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading document...' : 'Telecharger!'
                            }
                        </PDFDownloadLink>

                    </div>
                )
            })}
        </div>
    )
}

export default AllContracts;