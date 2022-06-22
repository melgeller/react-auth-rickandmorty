import React, {useState, useEffect, createContext} from "react";
import  axios from "axios";


export const RMContext = createContext();
const BASEURL = "https://rickandmortyapi.com/api"

export const RMContextProvider = (
    {children}
) => {
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const getCharacters = async()=>{
            const charactersApi = await axios.get(`${BASEURL}/character`);
            setCharacters(charactersApi.data.results);
            console.log(charactersApi);
        };
        getCharacters()
    }, []); 

    useEffect(()=>{
        const getPlanets = async()=>{
            const planetsApi = await axios.get(`${BASEURL}/location`);
            setPlanets(planetsApi.data.results);
        };
        getPlanets()
    }, []);

    return (<RMContext.Provider value = {
        {characters, planets}}>
            {children}
        </RMContext.Provider>)



}