import React from 'react'
import logo from '../../../public/logo.png'
export default function Sidebar() {
    return (
        < >
            <div className="sidebar" data-background-color="dark">
                <div className="sidebar-logo pt-2">
                    {/* Logo Header */}
                    <div className="logo-header" data-background-color="dark">
                        <a href="index.html" className="logo">
                            <img src={logo} alt="navbar brand" className="navbar-brand rounded-circle" height={50} />
                            <span className='mx-2 text-primary'>Spear Academy</span>
                        </a>

                        <button className="topbar-toggler more">
                            <i className="gg-more-vertical-alt" />
                        </button>
                    </div>
                    {/* End Logo Header */}
                </div>
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <ul className="nav nav-secondary">
                            <li className="nav-item active">
                                <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                    <i className="fa-solid fa-chalkboard-user"></i>
                                    <p>Supervisors</p>
                                </a>

                            </li>
                            <li className="nav-item  ">
                                <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                    <i className="fa-solid fa-school"></i>
                                    <p>Courses</p>
                                </a>

                            </li>
                            <li className="nav-item  ">
                                <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <p>Students</p>
                                </a>

                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </ >
    )
}
