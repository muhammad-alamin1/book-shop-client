import React from "react";
import { useHistory } from "react-router-dom";

export default function Search({ searchQuery, setSearchQuery }) {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };
    return (
        <div className="search-product">
            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
                className="d-flex py-5"
            >
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search</span>
                </label>
                <input
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                    className="form-control"
                />
                <button type="submit" className="btn btn-outline-success ms-3">
                    Search
                </button>
            </form>
        </div>
    );
}
