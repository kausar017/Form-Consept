import { createContext } from "react";
import Dad from "../Dad/Dad";
import Uncale from "../Uncale/Uncale";
import Unty from "../Unty/Unty";
import './GrandFa.css'


const GrandFa = () => {

    const AssetContext = createContext('gold');



    return (
        <div className="grandfa">
            <div>
                <h1 className="text-center">Grand Father</h1>
                <AssetContext.Provider value="gold">
                    <section className="flex flex-row items-center justify-center text-center">
                        <Dad></Dad>
                        <Uncale></Uncale>
                        <Unty></Unty>
                    </section>
                </AssetContext.Provider>
            </div>
        </div>
    );
};

export default GrandFa;