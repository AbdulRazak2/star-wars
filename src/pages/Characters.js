import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

export const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState({})

    useEffect(() => {
        const url = `https://swapi.tech/api/people`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                console.log(characters);
            })
    }, [characters])

    const getCharacter = (charId) => {

        fetch(`https://swapi.tech/api/people/${charId}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data.result)
                console.log(character);
                })
    }

    let active = 1;
let items = [];
for (let number = 0; number <= 9; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
   

        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card text-white bg-dark mb-3" >
                        <div className="card-header text-center">Characters</div>
                        <ul className="list-group bg-dark">
                            {
                                characters.map((charac, i) => {
                                    return <li key={i} className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                                        {charac?.name}
                                        
                                        <span className="badge badge-primary badge-pill" >
                                            <button onClick={() => getCharacter(charac?.uid)} className="text-dark">Details</button>
                                        </span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        {
                            character &&
                            (<div  className="border border-primary rounded p-2">
                                <h3>{character?.properties?.name}</h3>
                                <p>{character?.properties?.gender}</p>
                                <p>{character?.properties?.homeworld}</p>
                                <p>{character?.properties?.skin_color}</p>
                                <p>{character?.properties?.birth_year}</p>
                                <p>{character?.properties?.height}</p>
                                
                                
                                
                            </div>
                            ) 
                            // : (
                            //     <p>Loading.....</p>
                            // )
                        }
                    </div>
                </div>
                <Pagination size="sm">{items}</Pagination>
            </div>
        )
    }


export default Characters;