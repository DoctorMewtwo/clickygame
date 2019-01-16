import React, { Component } from "react";

class Heading extends Component {
    state = {
        score = 0,
        correct = false,
        topScore = 0
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if(event.target.correct)
        {
            this.setState({
                correct : event.target.correct,
                score : this.state.score + 1
            });
            
            if(this.state.score > this.state.topScore)
            {
                this.setState({
                    topScore : score
                });
            }
        }
        else
        {
            this.setState({
                correct : event.target.correct,
                score : 0,
            });
        }

    }

    render() {
        return (
            <nav className = "navbar">
                <ul>
                    <li className = "brand">
                        <a href = "/">Clicky Game </a>
                    </li>
                    <li>
                        {this.state.correct ? "You guessed correctly" : "You guessed wrong"}
                    </li>

                    <li>
                        Score : {this.state.score} | Top Score: {this.state.topScore}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Heading;