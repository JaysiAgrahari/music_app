import React,{useEffect}from 'react'

export default function Navbar() {


    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                
                            
                            <form class="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="What do you want to listen?"  aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                    </div>
                </nav>
            </div>
        </>
    )
}
