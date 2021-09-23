import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Card, CardContent, CardHeader,Typography} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

export interface Countries{
    country: string;
    cases: number;
    todayCases: number;
    active:any;
    deaths:number;
    todayDeaths:any;
    recovered:number;
    critical:any;
}


function CountryDataFetch(){

    const [countries, setCountry] =useState<Countries[]>([])
    const [searchCountry, setSearchCountry] = useState("")


    useEffect(() => {
        axios.get<Countries[]>("https://coronavirus-19-api.herokuapp.com/countries" )
        .then(res =>
            {
                console.log(res)
                setCountry(res.data)
            })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return(
        <div style={{marginTop:50}}>
            <h2 style={{ fontSize:32}}>
                Coronavirus By Country
            </h2>
            <div>
            <TextField id="standard-basic" label="Search by Country" value={searchCountry} style={{width:400}} 
            onChange={(e)=>setSearchCountry(e.target.value)}/>
            </div>
            
            <div style={{maxHeight:400,overflowY:'scroll'}}>
            
                {countries.filter((val)=>{
                    if(searchCountry === ""){
                        return val
                    }else if(val.country.toLocaleLowerCase().includes(searchCountry.toLocaleLowerCase())){
                        return val
                    }
                }).map((row)=>(
                    <Card style={{width:1000, height:200,marginLeft:150,marginTop:100}}>
                    <CardHeader subheader="Global"  title={row.country} style={{color:"#008080"}}/>
                    
                    <CardContent >
                        <Typography variant="body2" color="textPrimary" >
                        Cases:{row.cases}| Today:{row.todayCases}|Active:{row.active}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                        Deaths:{row.deaths}| Today:{row.todayDeaths}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                        Recovered:{row.recovered}| Critical:{row.critical}
                        </Typography>
                    </CardContent>
                    </Card>

                ))}
                     
               
            </div>
        </div>
    )
}

export default CountryDataFetch