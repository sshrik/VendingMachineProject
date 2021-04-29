import React, {useState} from 'react';
import './VendingMachine.css';

function AnswerView() {
    return(
        <div className="problem-container">
            <div className="center-class">
            <p className="problem-text">What`s your</p>
            <p className="problem-text">problem?</p>
            </div>
        </div>
    );
}

function Drinks(props) {
    return(
        <div>
            <img className="drink-image" src={props.imageName}/>
            <div className="price-container">
                <p className="drink-price">1,000</p>
            </div>
        </div>
    );
}

class DrinkView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClass0: "orange-button",
            buttonClass1: "mint-button",
            visible: "not-visible",
            randomDrink: null
        }
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.buttonClass0 == "orange-button") {
                this.setState({
                    buttonClass0: "mint-button",
                    buttonClass1: "orange-button"
                });
            }
            else {
                this.setState({
                    buttonClass0: "orange-button",
                    buttonClass1: "mint-button"
                });
            }
        }, 300);
        setInterval(() => {
            this.setState({visible: "visible"})
        }, 3000);
    }

    genRandomDrink() {
        this.setState({randomDrink: <RandomDrink />})
    }

    render() {
        return(
            <div className="drink-view-container">
                <div className="drink-container">
                    <span className="drink-shower-container">
                        <Drinks imageName="/res/drink0.png"/>
                        <Drinks imageName="/res/drink1.png"/>
                        <Drinks imageName="/res/drink2.png"/>
                        <Drinks imageName="/res/drink3.png"/>
                    </span>
                    <span className="button-space-container">
                        <ArrowNotifier visibleClass={this.state.visible} />
                        <div className="button-space" 
                            onClick={() => {
                                this.genRandomDrink();
                            }}
                        >
                            <div className="button-row-space">
                                <BlinkButton blinkButtonClass={this.state.buttonClass0}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass1}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass0}/>
                            </div>
                            <div className="button-row-space">
                                <BlinkButton blinkButtonClass={this.state.buttonClass1}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass0}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass1}/>
                            </div>
                            <div className="button-row-space">
                                <BlinkButton blinkButtonClass={this.state.buttonClass0}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass1}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass0}/>
                            </div>
                            <div className="button-row-space">
                                <BlinkButton blinkButtonClass={this.state.buttonClass1}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass0}/>
                                <BlinkButton blinkButtonClass={this.state.buttonClass1}/>
                            </div>
                        </div>
                        <div className="bill-space"></div>
                    </span>
                </div>
                <div className="empty-middle-container"/>
                <DrinkOutView randomDrink={this.state.randomDrink}/>
            </div>
        );
    }
}

function BlinkButton(props) {
    return(
        <div className={props.blinkButtonClass}>
        </div>
    );
}

class DrinkOutView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="drink-out-container">
                {this.props.randomDrink}
            </div>
        )
    }
}

function VendingMachine() {
    return(
        <div className="vending-machine-container">
            <span className="vending-machine-body">
                <div className="vending-machine-head"/>
                <AnswerView />
                <DrinkView />
            </span>
            <span className="vending-machine-foot-container">
                <VendingMachineFoot />
                <VendingMachineFoot />
            </span>
        </div>
    )
}


function VendingMachineFoot() {
    return(
        <div className="vending-machine-foot" />
    )
}

function Copyright() {
    return(
        <p className="copyright">ⓒCopyright 귀여운꼬마기린</p>
    )
}

function ArrowNotifier(props)    {
    return  (
        <div className={props.visibleClass}>
            <img className="arrow-image" src="res/arrow.png"/>
            <p className="arrow-text">Click Here!</p>
        </div>
    );
}

class RandomDrink extends React.Component {
    constructor(props) {
        super(props);
        let imageList = ["/res/drink0.png", "/res/drink1.png", "/res/drink2.png", "/res/drink3.png"];
        let randomIndex = Math.floor(Math.random() * 4);
        // random index 따라 생성되는 위치를 다르게 하고싶음.
        this.state = {
            imageName: imageList[randomIndex]
        }
    }

    render() {
        return(
            <div className="random-drink-container">
                <img className="random-drink-img" src={this.state.imageName} />
            </div>
        )
    }
}

function VendingMachineApp() {
    return (
        <div className="main-container">
            <VendingMachine />
            <Copyright />
        </div>
    );
}

export default VendingMachineApp;
