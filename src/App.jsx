import React, { useState } from 'react'
import { ListView } from './components/ListView'
import HeaderView from './components/HeaderView'
import FooterView from './components/FooterView'
import './App.css'
import HistoryView from './components/HistoryView'

export default function App() {

    const [searchHistory, setSearchHistory] = useState([]);

    const addToSearchHistory = (term) => {
        setSearchHistory(prevHistory => [...prevHistory, term]);
    };

    const clearSearchHistory = () => {
        setSearchHistory([])
    }

    return (
        <>
            <div className='app'>
                <HeaderView />
                <div className="container py-4">
                    <div className="row gy-3">
                        <HistoryView
                            searchHistory={searchHistory}
                            clearSearchHistory={clearSearchHistory}
                        />
                        <ListView
                            searchHistory={searchHistory}
                            addToSearchHistory={addToSearchHistory}
                        />
                    </div>
                </div>
                <FooterView />
            </div>

        </>
    )
}
