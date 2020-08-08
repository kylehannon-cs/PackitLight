import React, { useState , useEffect } from 'react'
import firebase from '../firebase'

// Components
import Item from "./Item"
import Additem from "./AddItem"

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

function useItems() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('item')
            .onSnapshot((snapshot) => {
                const newItems = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setItems(newItems)
            })
            return () => unsubscribe()
    }, [])
    return items
}

function List() {

    const items = useItems()

    return(
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Weight</TableCell>
                            <TableCell align="center">kg/lbs/oz/g</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            {
                items.map((item, idx) => {
                    let idVal = item.id

                    return(
                        <div key={idVal}>
                            <Item props={item} />
                        </div>
                    )
                })
            }
            <Additem />
        </div>
    )
}

export default List