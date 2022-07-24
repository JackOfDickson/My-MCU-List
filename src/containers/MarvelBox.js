import React, {useState, useEffect} from "react";

const MarvelBox = () => {

    const [marvelFilms, setMarvelFilms] = useState([])
    const [marvelShows, setMarvelShows] = useState([])

    const useEffect(() => {
        getMarvelFilms()
        getMarvelShows()
    }, [])

    const getMarvelFilms = function() {
        fetch()
        .then(response => response.json())
        .then(films => setMarvelFilms(films))
    }

    // const getMarvelShows = function() {
    //     fetch()
    //     .then(response => response.json())
    //     .then(shows => setMarvelShows(shows))
    // }

return (
    <div>
        <p>Marvel Box</p>
    </div>
)


}

export default MarvelBox