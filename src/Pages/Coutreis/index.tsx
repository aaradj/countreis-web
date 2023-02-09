import { useState } from "react";
interface CountereisProps{
    countereisData:Array<object> | [] | undefined;
}
const Coutereis = ({countereisData}:CountereisProps) => {
    const [showC,setShowC] = useState(99);
    const handleClick = () => {
        if(showC === 99){
            setShowC(199)
        }else if (showC === 199){
            setShowC(249)
        }else if(showC === 249){
            setShowC(99)
        }
    }
    return (
        <div>
            {
                countereisData?.map((item:any, length)=>{
                    const {name,region,population,flags,capital}:any= item
                    console.log(item, length)
                    if(length <= showC){
                        return(
                            <div key={length}>
                                <img src={flags.png} alt={`${name.common} flag`} />
                                <h3>{name.common}</h3>
                                <p>Population: {population}</p>
                                <p>Region: {region}</p>
                                <p>Capital: {capital}</p>
                                <button onClick={handleClick}>{showC === 249 ? "close" : "show more"}</button>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export default Coutereis;