// Write your Character component here
import React from 'react'
import styled from 'styled-components'
//start the styling component

const StyledDiv = styled.div`
.data {
    display:flex;
    flex-direction:column;
    justify-content: space-around;
}
p {
    margin:0;
    padding:0;
}
`
const data = (props) => { 
    const {data} = props 
    
    
    return  (
        <StyledDiv>
        <div class="name">
            <h1>{data.name}</h1>
         </div>
        <div class="data"> 
            <p>Birth year: {data.birth_year}</p>
            <p>Gender: {data.gender}</p>
            <p>Mass: {data.mass}kg</p>
            <p>Eye color: {data.eye_color}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
        </div>
        </StyledDiv>
    
    
    
    )
    }
    export default data 