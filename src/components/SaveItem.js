import React from 'react'
import firebase from '../firebase'
import SaveIcon from '@material-ui/icons/Save';
import "../buttonItem.css"

function handleSave(e, newItem){
    console.log("------ newItem: ----- ", newItem.newItem)
    console.log("------  ID ------", newItem.newItem.id)
    e.preventDefault()

    console.log("Trying to save: ", newItem.newItem.id)
    firebase
        .firestore()
        .collection('item')
        .doc(newItem.newItem.id)
        .update({
            name: newItem.newItem.name,
            description: newItem.newItem.description,
            price: newItem.newItem.price,
            weight: newItem.newItem.weight,
            weightType: newItem.newItem.weightType
        })
        .then(function() {
            console.log("Item ", newItem.newItem.id, " saved!!")
            console.log("--newItem--\n", newItem.newItem)
        }).catch(function(error) {
            console.error("Error saving item: ", error)
        })
}

function SaveItem(newItem, id)  {
    
    return(
        <form onSubmit={(e) => handleSave(e, newItem)}>
            <button className="astext">
                <SaveIcon></SaveIcon>
            </button>
        </form>
    )
}

export default SaveItem