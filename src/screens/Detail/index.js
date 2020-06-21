import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {doGet} from '../../helpers/ApiHelper';

const Detail = () => {
    const [person, setPerson] = useState(null);
    const {id} = useParams();
   
    useEffect(() => {
        doGet(`people/${id}`).then(setPerson);
    }, [id]);
    if (!person) { return (<h1>Loading...</h1>) }
    console.log('*** Detail.useParams', id );
    return <h1>{person.name}</h1>
}

export default Detail;