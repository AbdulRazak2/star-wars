import React, { useEffect, useState } from 'react';

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
    }, [])

    const getCharacter = (charId) => {

        fetch(`https://swapi.tech/api/people/${charId}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data.result)
                console.log(character);
                })
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
                                            <button onClick={() => getCharacter(charac?.uid)} className="text-white" >Details</button>
                                        </span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">65
                    <div>
                        {
                            character &&
                            (<div>
                                <h3 className="border border-primary rounded p-2">{character?.properties?.name}</h3>
                                <p>Gender: {character?.properties?.gender}</p>
                                <p>Homeworld: {character?.properties?.homeworld}</p>
                                <p>Skin color: {character?.properties?.skin_color}</p>
                                <p>Date of Birth: {character?.properties?.birth_year}</p>
                                <p>Height: {character?.properties?.height}</p>
                                
                                
                                {// <ul className="list-group">
                                //     {
                                //         character.films.map((film, i) => {
                                //             return <li key={i} className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                                //                 <Film film={film} />
                                //             </li>
                                //         })
                                //     }
                                // </ul>
                            }
                            </div>
                            ) 
                            // : (
                            //     <p>Loading.....</p>
                            // )
                        }
                    </div>
                </div>
            </div>
        )
    }


export default Characters;