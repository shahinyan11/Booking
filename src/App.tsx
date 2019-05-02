import React, { Component } from 'react'
import './App.scss'
import { Header } from './components/header/header'
import Popup from './components/popup/popup'
import Timesheet from './components/timesheet/timesheet'
import { ObservableService } from './service/observable.service'
import { $V } from './variable'

class App extends Component {

    componentDidMount(): void {
        window.addEventListener('scroll', () => {
            ObservableService.push($V.CORE_SCROLL, {
                y: window.scrollY,
                x: window.scrollX
            })
        })
    }

    render() {
        return (
            <div className="container">
                <main>
                    <Header/>
                    <div className="main-container">
                        <Timesheet/>
                    </div>
                </main>
                <Popup/>
            </div>
        )
    }
}

export default App
