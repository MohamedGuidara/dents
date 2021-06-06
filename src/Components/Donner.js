import React, { useState } from 'react'
import PPA from './PPA'
import './Donner.css'
import PF from './PF'
import PT from './PT'


const Donner = () => {
    var currentDate = new Date()
    console.log(currentDate)
var day = String(currentDate.getDate()).padStart(2, '0')

var month = String(currentDate.getMonth() + 1).padStart(2, '0')
var year = currentDate.getFullYear()
var hour =currentDate.getHours()
var min = currentDate.getMinutes()
console.log(day)
console.log(month)
console.log(year)
    

const [surplan, setSurplan] = useState(false)
const [surdent, setSurdent] = useState(false)
const travail = [setSurdent,setSurplan]
const travailToggle = (s) => {
    travail.map((el)=>el===s ? el(!false): el(!true))
    
}


const [ppa, setPpa] = useState(false)
const [pf, setPf] = useState(false)
const [pt, setPt] = useState(false)
const [got, setGot] = useState(false)
const typeApp =[setPf, setGot, setPpa, setPt] 
const typeToggle = (s) => {
    typeApp.map((el)=>el===s? el(!false): el(!true))
    
}


const [a1, setA1] = useState(false)
const [a2, setA2] = useState(false)
const [a3, setA3] = useState(false)
const [a33, setA33] = useState(false)
const [a4, setA4] = useState(false)
const [b1, setB1] = useState(false)
const [b2, setB2] = useState(false)
const [b3, setB3] = useState(false)
const [b4, setB4] = useState(false)
const [c1, setC1] = useState(false)
const [c2, setC2] = useState(false)
const [c3, setC3] = useState(false)
const [c4, setC4] = useState(false)
const [d2, setD2] = useState(false)
const [d3, setD3] = useState(false)
const [d4, setD4] = useState(false)
const teinte = [setA1, setA2, setA3, setA33, setA4, setB1, setB2, setB3, setB4,setC1, setC2, setC3, setC4, setD2, setD3, setD4]
const teinteToggle = (s) => {
    teinte.map((el)=>el===s? el(!false): el(!true))
    
}

    return (
        <div>
            <h1>Fiche De Prothése</h1>
            <div className="date" >
                <label><h5>Date :</h5></label>
                <h5 style={{fontSize:25}} >{`${day}/${month}/${year} ${"    "}${hour}:${min}`}</h5>
                
            </div>
            <div className="nom_patient" >
                <label><h5>Nom De Patient :</h5></label>
                <input type="text" />
            </div>
            <div className="nom_patient" >
                <label><h5> Prothésiste :</h5></label>
                <input type="text" />
            </div>
            <div className="" >
                <label><h5> Travail :</h5></label>
                <button onClick={()=>travailToggle(setSurdent)} id={surdent? "don" : "ddd"} >sur dent</button>
                <button onClick={()=>travailToggle(setSurplan)} id={surplan? "don" : "ddd"} >sur plan</button>
            </div>
            <div className="" >
                <label><h5> Type d'appareillage :</h5></label>
                <button onClick={()=>typeToggle(setPpa)} id={ppa? "don" : "ddd"}>PPA</button>
                <button onClick={()=>typeToggle(setPf)} id={pf? "don" : "ddd"}>PF</button>
                <button onClick={()=>typeToggle(setPt)} id={pt? "don" : "ddd"}>PT</button>
                <button onClick={()=>typeToggle(setGot)} id={got? "don" : "ddd"}>gouttiere percicée</button>
            </div>
            
            <div>
                {/* {typeApp.map((el, i)=> el===true && i===0 ? <PF/> :el===true && i===2 ?<PPA/> :el===true && i===3 ? <PT/>:<PT/>)} */}
                {pt===true ? <PT/>: ppa===true ? <PPA/> : pf===true ? <PF /> : null}
            </div>
            
            <div>
            <label><h5> Teinte :</h5></label>
                <button onClick={()=>teinteToggle(setA1)} id={a1? "don" : "ddd"}>A1</button>
                <button onClick={()=>teinteToggle(setA2)} id={a2? "don" : "ddd"}>A2</button>
                <button onClick={()=>teinteToggle(setA3)} id={a3? "don" : "ddd"}>A3</button>
                <button onClick={()=>teinteToggle(setA33)} id={a33? "don" : "ddd"}>A3.5</button>
                <button onClick={()=>teinteToggle(setA4)} id={a4? "don" : "ddd"}>A4</button>
                <button onClick={()=>teinteToggle(setB1)} id={b1? "don" : "ddd"}>B1</button>
                <button onClick={()=>teinteToggle(setB2)} id={b2? "don" : "ddd"}>B2</button>
                <button onClick={()=>teinteToggle(setB3)} id={b3? "don" : "ddd"}>B3</button>
                <button onClick={()=>teinteToggle(setB4)} id={b4? "don" : "ddd"}>B4</button>
                <button onClick={()=>teinteToggle(setC1)} id={c1? "don" : "ddd"}>C1</button>
                <button onClick={()=>teinteToggle(setC2)} id={c2? "don" : "ddd"}>C2</button>
                <button onClick={()=>teinteToggle(setC3)} id={c3? "don" : "ddd"}>C3</button>
                <button onClick={()=>teinteToggle(setC4)} id={c4? "don" : "ddd"}>C4</button>
                <button onClick={()=>teinteToggle(setD2)} id={d2? "don" : "ddd"}>D2</button>
                <button onClick={()=>teinteToggle(setD3)} id={d3? "don" : "ddd"}>D3</button>
                <button onClick={()=>teinteToggle(setD4)} id={d4? "don" : "ddd"}>D4</button>
            </div>
            <div>
            <label><h2>Nature des travaux :</h2></label>
                <textarea name="nom"  style={{width:550,height:100,fontSize:17 }} rows="4" cols="40" placeholder="Nature des travaux:" ></textarea>
            </div> 
            <div>
            <label><h2>Observation :</h2></label>
                <textarea name="nom"  style={{width:550,height:100,fontSize:17 }} rows="4" cols="40" placeholder="Observation:" ></textarea>
            </div>
            
            <div>
            <input type="file" />
            </div>
        </div>
    )
}

export default Donner
