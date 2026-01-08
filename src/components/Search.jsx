import React from 'react';

export default function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="my-3 search">
            <div>
                <button className="px-1 py-2 searchBtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <input
                    type="text"
                    className="py-2"
                    placeholder="Search through thousands of movies"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    );
}
