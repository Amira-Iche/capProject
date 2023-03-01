import {useEffect,useState} from "react";
import axios from "axios";
import {  Document, Page,Text,View, StyleSheet } from '@react-pdf/renderer';


const Contract = ({contractId}) => {
    const [contractInfo, setContractInfo] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:3001/contracts/${contractId}`)
            .then(res => {
                setContractInfo(res.data)
                console.log('contractInfo',res.data)
            })

    }, [])

    const styles = StyleSheet.create({
        page: {display : 'flex',flexDirection: 'column',alignItems: 'center' ,marginTop:30},
        title:{fontSize:14,textAlign: 'center'},
        bgTitle: { fontSize: 30 ,textAlign: 'center' },
        bgDiv: {backgroundColor: 'rgba(209 213 219)', width: '66%', marginTop: 40 , marginBottom: 40, paddingRight: 30, paddingLeft: 30, paddingTop:20,paddingBottom:20},
        pUnderline : {textDecoration: 'underline',textAlign: 'center',fontSize: 16},
        boldTitle : {fontWeight: 'extrabold',fontSize:15,padding: 20}
    });


    return(
        <Document>
            <Page size="A4" style={styles.page}>
            <Text style={styles.bgTitle}>STATUTS </Text>
            <View style={styles.bgDiv}>
            <Text style={styles.bgTitle}> {contractInfo.DENOMINATION}</Text>
            </View>

            <Text style={styles.pUnderline}>Société par Action Simplifiée Unipersonnelle</Text>
            <Text style={styles.boldTitle}>au capital social de {contractInfo.SOCIAL_TYPE} euros</Text>

                <View style={styles.bgDiv}>
                <Text style={styles.bgTitle}>SIGLE : {contractInfo.SIGLE} </Text>
                </View>

            <Text style={styles.boldTitle}> Siège Social:</Text>
            <Text style={styles.title}>
                {contractInfo.SIEGE_SOCIAL}

            </Text>

            <Text style={styles.boldTitle}>RCS au Greffe de {contractInfo.GREFFE}</Text>

            <Text style={styles.title}>STATUTS CONSTITUTIFS SASU <Text style={styles.boldTitle}> {contractInfo.DENOMINATION}</Text>  </Text>


            </Page>
        </Document>
    )
}


export default Contract;