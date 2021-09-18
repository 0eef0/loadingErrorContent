import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import '../styles/styles.css';
import logo from '../images/logo.png';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=898';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const [pkmn, setPkmn] = useState([]);

    const getPkmn = async () => {
      const response = await fetch(url);
      const pkmn = await response.json();
      setPkmn(pkmn.results);
    }

    useEffect(() => {
      getPkmn()
      .then(setIsLoading(false))
      .catch((err) => {
        console.log(err);
        setIsErr(true);
      })
    },[])

    if(isErr) {
        return (
        <div>
            <Error />
        </div>
        )
    }
    if(isLoading) {
        return (
            <Loading />
        )
    }

    const capitalize = (str) => {
        let temp = str.split(' ')
        for(let i = 0; i < temp.length; i++){
            temp[i] = temp[i][0].toUpperCase() + temp[i].substr(1);
        }
        return temp.join(' ')
    }

    return (
      <>
        <img src='https://www.wallpaperkiss.com/wimg/b/167-1674145_big.png' alt='background' id='background' />

        <div id="sidebar">
            <img src={logo} alt='logo' id="logo" />
            <ul>
                <li className="expandedItem">
                    <a href='#bulbasaur'><p>Kanto</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#chikorita'><p>Johto</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#treecko'><p>Hoenn</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#turtwig'><p>Sinnoh</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#victini'><p>Unova</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#chespin'><p>Kalos</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#rowlet'><p>Alola</p></a>
                </li>
                <li className="expandedItem">
                    <a href='#grookey'><p>Galar</p></a>
                </li>
                <li className="expandedItem">
                    <p onClick={() => {setIsLoading(true)}}>Loading</p>
                </li>
                <li className="expandedItem">
                    <p onClick={() => {setIsErr(true)}}>Error</p>
                </li>

                <li className="closedItem">1</li>
                <li className="closedItem">2</li>
                <li className="closedItem">3</li>
                <li className="closedItem">4</li>
                <li className="closedItem">5</li>
                <li className="closedItem">6</li>
                <li className="closedItem">7</li>
                <li className="closedItem">8</li>
                <li className="closedItem">L</li>
                <li className="closedItem">E</li>
            </ul>
        </div>
        <div id='content'>
          {
            pkmn.map((poke, index) => {
              return <div className='pokemon' key={index+1}>
                <a id={poke.name} />
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={poke.name} />
                <h1 key={index+1}>{`#${index+1} ${capitalize(poke.name.split('-')[0])}`}</h1>
              </div>
            })
          }
        </div>
    
    </>
    )
}

export default App
