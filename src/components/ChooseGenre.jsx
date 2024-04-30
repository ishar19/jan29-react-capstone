import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function ChooseGenre() {
    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [error, setError] = useState(null);

    const genre = [
        {
            id: 1,
            name: "Action",
            bg: "#FF5209"
        },
        {
            id: 2,
            name: "Drama",
            bg: "#D7A4FF"
        },
        {
            id: 3,
            name: "Romance",
            bg: "#11B800"
        },
        {
            id: 4,
            name: "Thriller",
            bg: "#84C2FF"
        },
        {
            id: 5,
            name: "Western",
            bg: "#902500"
        },
        {
            id: 6,
            name: "Horror",
            bg: "#7358FF"
        },
        {
            id: 7,
            name: "Fantasy",
            bg: "#FF4ADE"
        },
        {
            id: 8,
            name: "Music",
            bg: "#E61E32"
        },
        {
            id: 9,
            name: "Adventure",
            bg: "#6CD061"
        },
    ]

    function handleChooseGenre(genreId) {
        const isSelected = selectedGenre.includes(genreId);
        if (isSelected) {
            setSelectedGenre(prevSelectedGenre => prevSelectedGenre.filter(id => id !== genreId));
        } else {
            setSelectedGenre(prevSelectedGenre => [...prevSelectedGenre, genreId]);
        }
    }

    function handleRemoveGenre(genreId) {
        setSelectedGenre(prevSelectedGenre => prevSelectedGenre.filter(id => id !== genreId));
    }

    function handleGoNext() {
        if (selectedGenre.length >= 3) {
            localStorage.setItem("genre", JSON.stringify(genre));
            localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
            navigate("/movies/browse");
        } else {
            setError("Minimum 3 categories required.");
        }
    }

    useEffect(() => {
        if (selectedGenre.length >= 3) setError(null);
    }, [selectedGenre]);


    return (
        <div className="h-screen bg-black flex flex-col">
            <div className="flex flex-row h-full">
                <div className="w-full flex justify-center items-center">
                    <div className="w-full max-w-sm">
                        <img src="/images/logo.png" alt="" width={150} />
                        <h1 className="text-6xl text-white font-semibold my-12">Choose your entertainment category</h1>
                        {selectedGenre.map((genreId) => {
                            const findGenre = genre.find(genre => genre.id === genreId);
                            if (findGenre) {
                                return (
                                    <button key={findGenre.id} className="rounded-3xl bg-[#148A08] text-white py-1 px-4 focus:outline-none m-2">
                                        {findGenre.name}&emsp;
                                        <span className="text-[#085C00]" onClick={() => handleRemoveGenre(findGenre.id)}>X</span>
                                    </button>
                                );
                            }
                            return null;
                        })}

                        {error &&
                            <p className="text-[#FF0000] flex items-center mt-5">
                                <svg width="22" height="17" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4607 1.17524C19.2557 0.818091 18.9601 0.52136 18.6037 0.31501C18.2473 0.108661 17.8428 0 17.4309 0C17.0191 0 16.6146 0.108661 16.2582 0.31501C15.9018 0.52136 15.6062 0.818091 15.4011 1.17524L1.1988 25.3402C0.252252 26.9516 1.38728 29 3.22859 29H31.6312C33.4725 29 34.6096 26.9495 33.661 25.3402L19.4607 1.17524ZM17.4268 8.28781C18.5349 8.28781 19.4027 9.24471 19.2909 10.3487L18.566 17.6124C18.5416 17.8978 18.411 18.1636 18.2001 18.3573C17.9892 18.551 17.7132 18.6585 17.4268 18.6585C17.1404 18.6585 16.8644 18.551 16.6535 18.3573C16.4426 18.1636 16.312 17.8978 16.2876 17.6124L15.5627 10.3487C15.5367 10.0882 15.5655 9.82513 15.6473 9.57645C15.7291 9.32778 15.8621 9.099 16.0377 8.90485C16.2133 8.7107 16.4277 8.55549 16.6669 8.44922C16.9062 8.34294 17.165 8.28796 17.4268 8.28781ZM17.4309 20.7151C17.9803 20.7151 18.5071 20.9333 18.8955 21.3218C19.2839 21.7102 19.5022 22.237 19.5022 22.7863C19.5022 23.3357 19.2839 23.8625 18.8955 24.2509C18.5071 24.6393 17.9803 24.8576 17.4309 24.8576C16.8816 24.8576 16.3548 24.6393 15.9664 24.2509C15.5779 23.8625 15.3597 23.3357 15.3597 22.7863C15.3597 22.237 15.5779 21.7102 15.9664 21.3218C16.3548 20.9333 16.8816 20.7151 17.4309 20.7151Z" fill="#FF0000" />
                                </svg>&nbsp;
                                <span>{error}</span>
                            </p>
                        }
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="w-full max-w-lg">
                        <div className="grid grid-cols-3 gap-6 text-white text-lg text-medium">
                            {genre.map((genre) => {
                                return (
                                    <div className={`${selectedGenre.includes(genre.id) && 'border border-4 border-[#11B800]'} rounded-xl p-2`} style={{ background: genre.bg }} onClick={() => handleChooseGenre(genre.id)} key={genre.id}>
                                        <p className="mb-3">{genre.name}</p>
                                        <img className="" src={`/images/movies/${genre.name}.png`} alt={genre.name} />
                                    </div>
                                )
                            })}
                        </div>
                        <button className="rounded-3xl bg-[#148A08] text-white py-1 px-4 focus:outline-none float-right mt-6" onClick={() => handleGoNext()}>Next Page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGenre