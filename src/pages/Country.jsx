import { useEffect, useState, useTransition } from "react"
import {getCountryData} from "../API/PostApi"
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";

export const Country = ()=>{

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        startTransition(async()=>{
            const data = await getCountryData();
            setCountries(data.data);
        })
    },[])

    if(isPending) return <Loader />;
    console.log(countries);
    return <section className="country-section">
        <ul className="grid grid-three-cols">
            {
                countries.map((curCountry, index)=>{
                    return <CountryCard country={curCountry} key={index}/>
                })
            }
        </ul>
    </section>
} 