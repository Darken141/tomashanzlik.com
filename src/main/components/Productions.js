import React from "react"

import "./productions.css";

class Productions extends React.Component {
    constructor(){
        super();
        this.state = {
            isClicked: false
        }
    }

    handleClick = () =>{
        if(!this.state.isClicked){
            this.setState({isClicked: true});
        } else {
            this.setState({isClicked: false});
        }
    }

    render(){
        return (
            <section id="productions">
                <div>
                    <div className="row">
                        <div className="box production1" onClick={this.handleClick}>
                            <h1>Hanzlik.sk</h1>
                            <div className="content">
                                <p>Hlavná a zároveň všeobecne zameraná produkcia na tvorenie videoklipov, reklamných videi, aftermovie's a podobne zameraných videí. </p>
                                <a rel="noopener noreferrer" href="http://www.hanzlik.sk" target="_blank">Prejsť na web!</a>
                            </div>
                        </div>
                        <div className="box production2" onClick={this.handleClick}>
                            <h1>Svadobná produkcia</h1>
                            <div className="content">
                                <p>Produkcia zameraná na tvorbu profesionálnych svadobných videí. Produkcia disponuje rozsiahlym tímom kameramanov.</p>
                                <a rel="noopener noreferrer" href="http://www.svadobnaprodukcia.sk/ " target="_blank">Prejsť na web!</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="box production3" onClick={this.handleClick}>
                            <h1>Stužková produkcia</h1>
                            <div className="content">
                                <p>Produkcia zameraná na tvorbu profesionálnych videí zo Stužkových slávností. Produkcia poskytuje rôzne balíčky pre študentov. </p>
                                <a rel="noopener noreferrer" href="http://www.hanzlik.sk" target="_blank">Prejsť na web!</a>
                            </div>
                        </div>
                        <div className="box production4" onClick={this.handleClick}>
                            <h1>Visuals for sale</h1>
                            <div className="content">
                                <p>Produkcia zameraná na tvorbu a predaj vizuálov a "one take" videoklipov. </p>
                                <a rel="noopener noreferrer" href="https://www.instagram.com/visualsforsale/?fbclid=IwAR1EA4kAXCKIMJn5bSt72v7vwMDu0FjxFtQNi9XhHk1myfT_RWf6gIp3qv4" target="_blank">Prejsť na web!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Productions;