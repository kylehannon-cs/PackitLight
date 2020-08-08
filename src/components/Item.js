import React, { useState } from 'react'

// Components
import SaveItem from "./SaveItem"
import RemoveItem from "./RemoveItem"

// CSS
import "../buttonItem.css"



function Item(props) {
    const [name, setName] = useState(props.props.name)
    const [description, setDesc] = useState(props.props.description)
    const [price, setPrice] = useState(props.props.price)
    const [weight, setWeight] = useState(props.props.weight)
    const [weightType, setWeightType] = useState(props.props.weightType)
    const id = props.props.id
    
    console.log("Maping item: ", props)
    return(
    
        <div key={props.props.id} align="center">
                    
            <input 
                type="text"
                name={name}
                value={name}
                className="nooutline"
                onChange={(e) => setName(e.target.value)}
                
            />
            <input 
                type="text"
                name={description}
                value={description}
                className="nooutline"
                onChange={(e) => setDesc(e.target.value)}
            />
            <label>  $</label>
            <input 
                type="number"
                name={price}
                value={price}
                className="nooutline"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input 
                type="number"
                name={weight}
                value={weight}
                className="nooutline"
                onChange={(e) => setWeight(e.target.value)}
            />
            <input
                type="text"
                name={weightType}
                value={weightType}
                className="nooutline"
                onChange={(e) => setWeightType(e.target.value)}
            />

            <SaveItem newItem={{id, name, description, price, weight, weightType}}/>
            <RemoveItem id={props.props.id}/>
        </div>
    )
}

export default Item