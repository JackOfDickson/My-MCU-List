import React, {useState, useEffect} from "react";

const MarvelBox = () => {

    const [marvelFilms, setMarvelFilms] = useState([])
    // const [marvelShows, setMarvelShows] = useState([])

    useEffect(() => {
        getMarvelFilms()
        // getMarvelShows()
    }, [])

    const getMarvelFilms = function() {
        fetch("https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=40&columns=title%2Crelease_date%2Cphase&order=chronology%2CDESC")
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