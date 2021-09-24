import React, { useEffect, useState } from 'react'
import { Pie} from 'react-chartjs-2'
import PropTypes from "prop-types";

interface dataProps{
    cases:number
    deaths:number
    recovers:number
}

export function PieChart(props:dataProps){


    const data = {
        labels:['cases','deaths','recovered'],
        datasets:[
            {label:'Global covid Information',
            backgroundColor:["#00BFFF","#FF7F50","#90EE90"],
            borderColor:"rgba(0,0,0,1)",
            borderWidth:2,
            data:[props.cases,props.deaths,props.recovers]
            }
        ]
    }

    const options ={
        plugins:{
            legends:{
                display:true,
                position: "top"

            },
            title:{
                text:"Number of Cases in the world ",
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