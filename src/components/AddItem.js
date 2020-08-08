import React from 'react'
import firebase from '../firebase'
import AddIcon from '@material-ui/icons/Add';
import "../buttonItem.css"

function AddItem() {

    const createItem = (e) => {
        e.preventDefault();

        firebase
            .firestore()
            .collection('item')
            .add({
                name: '',
                description: '',
                price: '',
                weight: '',
                weightType: ''
            })
            .then((ref) => {
                console.log("Added item with id: ", ref.id)
            })
    }

    return(
        <form onSubmit={createItem} className="createFormButton">
            <button className="astext">
                <AddIcon></AddIcon>
            </button>
        </form>
    )
}

export default AddItem