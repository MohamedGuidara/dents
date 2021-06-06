import React, { useState } from 'react'
import dsicg from './Lesdents/11.png';
import dsicd from './Lesdents/21.png';
import dsilg from './Lesdents/12.png';
import dsild from './Lesdents/22.png';
import dscg from './Lesdents/13.png';
import dscd from './Lesdents/23.png';
import dsppg from './Lesdents/14.png';
import dsppd from './Lesdents/24.png';
import dsspg from './Lesdents/15.png';
import dsspd from './Lesdents/25.png';
import dspmg from './Lesdents/16.png';
import dspmd from './Lesdents/26.png';
import dssmg from './Lesdents/17.png';
import dssmd from './Lesdents/27.png';
import dstmg from './Lesdents/18.png';
import dstmd from './Lesdents/28.png';
import ditmg from './Lesdents/48.png';
import ditmd from './Lesdents/38.png';
import dismg from './Lesdents/47.png';
import dismd from './Lesdents/37.png';
import dipmg from './Lesdents/46.png';
import dipmd from './Lesdents/36.png';
import dispg from './Lesdents/45.png';
import dispd from './Lesdents/35.png';
import dippg from './Lesdents/44.png';
import dippd from './Lesdents/34.png';
import dicg from './Lesdents/43.png';
import dicd from './Lesdents/33.png';
import diilg from './Lesdents/42.png';
import diild from './Lesdents/32.png';
import diicg from './Lesdents/41.png';
import diicd from './Lesdents/31.png';
const Dents = () => {
    const [ldsicg, setLdiscg] = useState(false)
    const [ldsicd, setLdiscd] = useState(false)
    const [ldsilg, setLdsilg] = useState(false)
    const [ldsild, setLdsild] = useState(false)
    const [ldscg,  setLdscg] = useState(false)
    const [ldscd,  setLdscd] = useState(false)
    const [ldsppg, setLdsppg] = useState(false)
    const [ldsppd, setLdsppd] = useState(false)
    const [ldsspg, setLdsspg] = useState(false)
    const [ldsspd, setLdsspd] = useState(false)
    const [ldspmg, setLdspmg] = useState(false)
    const [ldspmd, setLdspmd] = useState(false)
    const [ldssmg, setLdssmg] = useState(false)
    const [ldssmd, setLdssmd] = useState(false)
    const [ldstmg, setLdstmg] = useState(false)
    const [ldstmd, setLdstmd] = useState(false)
    const [lditmg, setLditmg] = useState(false)
    const [lditmd, setLditmd] = useState(false)
    const [ldismg, setLdismg] = useState(false)
    const [ldismd, setLdismd] = useState(false)
    const [ldipmg, setLdipmg] = useState(false)
    const [ldipmd, setLdipmd] = useState(false)
    const [ldispg, setLdispg] = useState(false)
    const [ldispd, setLdispd] = useState(false)
    const [ldippg, setLdippg] = useState(false)
    const [ldippd, setLdippd] = useState(false)
    const [ldicg,  setLdicg] = useState(false)
    const [ldicd,  setLdicd] = useState(false)
    const [ldiilg, setLdiilg] = useState(false)
    const [ldiild, setLdiild] = useState(false)
    const [ldiicg, setLdiicg] = useState(false)
    const [ldiicd, setLdiicd] = useState(false)
    //const handletoggle = () => setLdiscg(!ldiscd)
    
    const imageClick = (set,get) => {
        set(!get)
    }
    return (
        <div className="rrrrr">
        <div className="list_dents" >
            <div className="dent">
                    
            <div className="dent_sup_incisive_centrale" >
            <img src={dsicg} className="dent_sup_incisive_centrale_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdiscg,ldsicg)} id={ldsicg? "done" : "ddd"}   /> 
            <img src={dsicd} className="dent_sup_incisive_centrale_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdiscd,ldsicd)} id={ldsicd? "done" : "ddd"}    />
            </div>

            <div className="dent_sup_incisive_laterale" >
            <img src={dsilg} className="dent_sup_incisive_laterale_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdsilg,ldsilg)} id={ldsilg? "done" : "ddd"}    />
            <img src={dsild} className="dent_sup_incisive_laterale_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdsild,ldsild)} id={ldsild? "done" : "ddd"}     />
            </div>

            <div className="dent_sup_canine" >
            <img src={dscg} className="dent_sup_canine_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdscg,ldscg)} id={ldscg? "done" : "ddd"} />
            <img src={dscd} className="dent_sup_canine_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdscd,ldscd)} id={ldscd? "done" : "ddd"} />
            </div>

            <div className="dent_sup_premiere_premolere" >
            <img src={dsppg} className="dent_sup_premiere_premolere_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdsppg,ldsppg)} id={ldsppg? "done" : "ddd"} />
            <img src={dsppd} className="dent_sup_premiere_premolere_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdsppd,ldsppd)} id={ldsppd? "done" : "ddd"} />
            </div>

            <div className="dent_sup_seconde_premolere" >
            <img src={dsspg} className="dent_sup_seconde_premolere_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdsspg,ldsspg)} id={ldsspg? "done" : "ddd"} />
            <img src={dsspd} className="dent_sup_seconde_premolere_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdsspd,ldsspd)} id={ldsspd? "done" : "ddd"} />
            </div>

            <div className="dent_sup_premiere_molaire" >
            <img src={dspmg} className="dent_sup_premiere_molaire_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdspmg,ldspmg)} id={ldspmg? "done" : "ddd"} />
            <img src={dspmd} className="dent_sup_premiere_molaire_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdspmd,ldspmd)} id={ldspmd? "done" : "ddd"} />
            </div>

            <div className="dent_sup_seconde_molaire" >
            <img src={dssmg} className="dent_sup_seconde_molaire_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdssmg,ldssmg)} id={ldssmg? "done" : "ddd"} />
            <img src={dssmd} className="dent_sup_seconde_molaire_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdssmd,ldssmd)} id={ldssmd? "done" : "ddd"} />
            </div>

            <div className="dent_sup_troisieme_molaire" >
            <img src={dstmg} className="dent_sup_troisieme_molaire_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdstmg,ldstmg)} id={ldstmg? "done" : "ddd"} />
            <img src={dstmd} className="dent_sup_troisieme_molaire_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdstmd,ldstmd)} id={ldstmd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_troisieme_molaire" >
            <img src={ditmg} className="dent_inf_troisieme_molaire_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLditmg,lditmg)} id={lditmg? "done" : "ddd"} />
            <img src={ditmd} className="dent_inf_troisieme_molaire_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLditmd,lditmd)} id={lditmd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_seconde_molaire" >
            <img src={dismg} className="dent_inf_seconde_molaire_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdismg,ldismg)} id={ldismg? "done" : "ddd"} />
            <img src={dismd} className="dent_inf_seconde_molaire_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdismd,ldismd)} id={ldismd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_premiere_molaire" >
            <img src={dipmg} className="dent_inf_premiere_molaire_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdipmg,ldipmg)} id={ldipmg? "done" : "ddd"} />
            <img src={dipmd} className="dent_inf_premiere_molaire_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdipmd,ldipmd)} id={ldipmd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_seconde_premolere" >
            <img src={dispg} className="dent_inf_seconde_premolere_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdispg,ldispg)} id={ldispg? "done" : "ddd"} />
            <img src={dispd} className="dent_inf_seconde_premolere_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdispd,ldispd)} id={ldispd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_premiere_premolere" >
            <img src={dippg} className="dent_inf_premiere_premolere_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdippg,ldippg)} id={ldippg? "done" : "ddd"} />
            <img src={dippd} className="dent_inf_premiere_premolere_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdippd,ldippd)} id={ldippd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_canine" >
            <img src={dicg} className="dent_inf_canine_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdicg,ldicg)} id={ldicg? "done" : "ddd"} />
            <img src={dicd} className="dent_inf_canine_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdicd,ldicd)} id={ldicd? "done" : "ddd"} />
            </div>

            <div className="dent_inf_incisive_laterale" >
            <img src={diilg} className="dent_inf_incisive_laterale_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdiilg,ldiilg)} id={ldiilg? "done" : "ddd"} />
            <img src={diild} className="dent_inf_incisive_laterale_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdiild,ldiild)} id={ldiild? "done" : "ddd"} />
            </div>

            <div className="dent_inf_incisive_centrale" >
            <img src={diicg} className="dent_inf_incisive_centrale_g" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdiicg,ldiicg)} id={ldiicg? "done" : "ddd"} /> 
            <img src={diicd} className="dent_inf_incisive_centrale_d" alt="logo" style={{width:40,height:40}} onClick={()=>imageClick(setLdiicd,ldiicd)} id={ldiicd? "done" : "ddd"} />
            </div>
            </div>
        </div>
        </div>
    )
}

export default Dents
