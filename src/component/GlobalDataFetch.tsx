import React, {useState,useEffect} from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardMedia, Tab ,Tabs, Typography} from '@material-ui/core';
import PieChart from './PieChart'
import { DecimationAlgorithm } from "chart.js";

export interface GlobalData{
    cases: number;
    deaths: number;
    recovered:number;
}

function GlobalDataFetch(){

    
    const [globalData, setGlobalData] =useState<GlobalData>({cases:0,deaths:0,recovered:0})
    useEffect(() => {
        axios.get<GlobalData>("https://coronavirus-19-api.herokuapp.com/all" )
        .then(res =>
            {
                console.log(res)
                setGlobalData(res.data)
            })
        .catch(err =>{
            console.log(err)
        })
    },[])

    const [cases,setCase] = useState<number>(0)
    const [deaths,setDeaths] = useState<number>(0)
    const [recovers,setRecovers] = useState<number>(0)

    useEffect(()=>{
        setCase(globalData.cases)
        setDeaths(globalData.deaths)
        setRecovers(globalData.recovered)
    },[globalData.cases,globalData.deaths,globalData.recovered])


    return(
        <div>
            <h2 style={{ fontSize:32}}>
                Global Coronavirus Information
            </h2>
            {/* Global covid Information cards */}
            <div style={{marginLeft:150,marginTop:100,paddingLeft:10}}>
            <Card style={{width:300, height:200,float:'left'}}>
                {/* Cases Card */}
                <CardHeader subheader="Global" title="Coronavirus Cases"/>
                <CardContent >
                    <Typography variant="h6" color="primary"  >
                        {globalData.cases}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{width:300, height:200,float:'left'}}>
                {/* Deaths Card */}
                <CardHeader subheader="Global" title="Deaths"/>
                <CardContent >
                    <Typography variant="h6" color="primary">
                   {globalData.deaths}
                    </Typography>
                </CardContent >
            </Card>
            <Card style={{width:300, height:200}}>
                {/* Recoverd Crads */}
                <CardHeader subheader="Global" title="Recovered"/>
                <CardContent >
                    <Typography variant="h6" color="primary">
                    {globalData.recovered}
                    </Typography>
                </CardContent >
            </Card>
            </div>
            {/* Pie chart */}
            <div>
            <PieChart cases={cases} deaths={deaths} recovers={recovers}/>
            </div>
               
           
          
           
        </div>
            
        
    )
}

export default GlobalDataFetch