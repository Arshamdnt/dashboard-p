import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

export default function App() {

    
    let router = useRoutes(routes)
    const isDark = useSelector((state) => state.theme.isDark);
;
    return (
        <>
        
        <Topbar />
        <div className={isDark ?'container dark-mode' : 'container'}>
            <Sidebar />
            {router}
        </div>
        
        
        
            
        </>
    )
}


