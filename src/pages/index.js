import React from "react"

import './index.css'

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = { running: false }
    }

    play = (e) => {
        e.preventDefault()
        const audio = document.getElementById("audio")        
        this.state.running ? audio.pause() : audio.play()
        this.setState({running: !this.state.running })
    }

    render() {
        return (
            <div className="container">
                <img className="image" src="https://i.imgur.com/sMPBu6M.png" alt="" onClick={this.play} />
                <audio
                    id="audio"
                    src="https://raw.githubusercontent.com/tayupov/joerbrit/master/src/pages/adore.mp3">
                </audio>
            </div>
        )
    }
}
