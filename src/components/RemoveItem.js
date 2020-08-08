import React from 'react'
import firebase from '../firebase'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//import Icon from '@material-ui/core/Icon';
import "../buttonItem.css"

function handleRemove(e, id) {
    e.preventDefault();
    console.log("Trying to remove: ", id.id)
    firebase
        .firestore()
        .collection('item')
        .doc(id.id)
        .delete()
        .then(function() {
            console.log("Item successfully deleted", id)
        }).catch(function(error) {
            console.error("Error removing item: ", error)
        })
}
function RemoveItem(id) {
    

    return(
        <form onSubmit={(e) => handleRemove(e, id)}>
            <button className="astext">
                <DeleteOutlineIcon></DeleteOutlineIcon>
            </button>
        </form>
    )
}

export default RemoveItem