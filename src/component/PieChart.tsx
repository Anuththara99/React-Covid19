import React, { useEffect, useState } from 'react'
import { Pie} from 'react-chartjs-2'

interface dataProps{
    cases:number
    deaths:number
    recovers:number
}

const PieChart:React.FC<dataProps> = ({cases,deaths,recovers})=>{

    //get data from GlobalDataFetch component
    const [getCase,setCase] = useState<number>(0);
    const [getDeaths,setDeaths] = useState<number>(0);
    const [getRecovers,setRecovers] = useState<number>(0);


    useEffect(()=>{
        setCase(cases)
        setDeaths(deaths)
        setRecovers(recovers)
    },[cases,deaths,recovers])

    const data = {
        lables:["cases","deaths","recovered"],
        datasets:[
            {lable:'Global covid Information',
            backgroundColor:["#00BFFF","#FF7F50","#90EE90"],
            borderColor:"rgba(0,0,0,1)",
            borderWidth:2,
            data:[getCase,getDeaths,getRecovers]
            }
        ]
    }

    const options ={
        plugins:{
            legend:{
                display:true,
            },
            title:{
                text:"Covid Cases ",
                display:true,
                fonstSize:true
            }
        }

    }

    return(

        <div style={{width:400,height:400,marginLeft:500,marginBottom:80}} >
            <h2> Global Covid Chart</h2>
             <Pie data={data}  options={options}/>
        </div>
       
       
    )
}



export default PieChart;