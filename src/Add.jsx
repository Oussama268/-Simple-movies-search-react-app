import {useState} from "react"



const Add = () => {

    const [pc,setPc] = useState({name : "" ,cpu : '' ,gpu : '' ,ram :'',storage: ''})
    const [pcs,setPcs] = useState([])





    return(
        <div>
            <div>
                PC Name : <input type="text" value={pc.name} onchange={(e) => {setPc({...pc,name : e.target.value})}} /><br />
                Cpu : <input type="text" value={pc.cpu} onchange={(e) => {setPc({...pc,cpu : e.target.value})}}/><br />
                Gpu : <input type="text" value={pc.gpu} onchange={(e) => {setPc({...pc,gpu : e.target.value})}}/><br />
                Ram : <input type="text" value={pc.ram} onchange={(e) => {setPc({...pc,ram : e.target.value})}}/><br />
                Storage : <input type="text" value={pc.storage} onchange={(e) => {setPc({...pc,storage : e.target.value})}}/><br />
                <button type="button" onclick={() => {setPcs([...pcs,pc])}}>Add PC</button>
            </div>

            <table border={'2px'}>
                <tr>
                    <th>PC NAME</th>
                    <th>CPU</th>
                    <th>GPU</th>
                    <th>RAM</th>
                    <th>STORAGE</th>
                </tr>
                {
                    
                    pcs.map( pc => 
                        
                            <tr>
                                <td>{pc.name}</td>
                                <td>{pc.cpu}</td>
                                <td>{pc.gpu}</td>
                                <td>{pc.ram}</td>
                                <td>{pc.storage}</td>
                            </tr>
                        
                    )
                }
            </table>
            
        </div>
    )
}

export default Add