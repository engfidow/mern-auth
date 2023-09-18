import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-slate-200 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to="/">
                <h1 className="font-bold">Auth App</h1>
            </Link>
            <ul className="flex gap-4">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/sign-in">
                        Sing In
                    </Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header