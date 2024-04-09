import React, { useEffect, useState } from 'react';

export const ListView = ({ addToSearchHistory, searchHistory }) => {
    const [gifsList, setGifsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Programmer');

    useEffect(() => {
        const apiKey = "RzSrFbm1ZcGxNa4BKl0iVstUQrG7llul";
        const limit = 12;

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${searchTerm}`)
            .then(response => response.json())
            .then(json => json.data)
            .then(data => {
                setGifsList(data);
            });
    }, [searchHistory]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (searchTerm.trim() !== '' && searchTerm.trim() !== 'Programmer') {
                addToSearchHistory(searchTerm);
            }
        }
    }

    return (
        <>
            <div className="col">
                <div className="row row-cols-1 g-4">
                    <div className="col">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Buscar GIFs"
                            onChange={handleSearchInputChange}
                            onKeyDown={handleSearchInputKeyDown}
                        />
                    </div>

                    <div className="col">
                        <div className="container text-center">
                            <div className="row g-4">
                                {gifsList.map(gif => (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={gif.id}>
                                        <div className="card">
                                            <img className="card-img-top" src={gif.images.original.url} alt={gif.title} />
                                            <div className="card-body">
                                                {gif.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
