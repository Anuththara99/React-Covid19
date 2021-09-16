import React, {useState,useEffect} from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardMedia, Tab ,Tabs, Typography} from '@material-ui/core';

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
    return(
        <div>
            <h2 style={{ fontSize:32}}>
                Global Coronavirus Information
            </h2>
            <div style={{marginLeft:150,marginTop:100,paddingLeft:10}}>
            <Card style={{width:300, height:200,float:'left'}}>
                <CardHeader subheader="Global" title="Coronavirus Cases"/>
                <CardContent >
                    <Typography variant="h6" color="primary"  >
                        {globalData.cases}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{width:300, height:200,float:'left'}}>
                <CardHeader subheader="Global" title="Deaths"/>
                <CardContent >
                    <Typography variant="h6" color="primary">
                   {globalData.deaths}
                    </Typography>
                </CardContent >
            </Card>
            <Card style={{width:300, height:200}}>
                <CardHeader subheader="Global" title="Recovered"/>
                <CardContent >
                    <Typography variant="h6" color="primary">
                    {globalData.recovered}
                    </Typography>
                </CardContent >
            </Card>
            </div>
               
           
          
           
        </div>
            
        
    )
}

export default GlobalDataFetch