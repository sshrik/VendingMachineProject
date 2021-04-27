import React, {useState} from 'react';
import './VendingMachine.css'

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
            buttonClass1: "mint-button"
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
    }

    render() {
        return(
            <div className="drink-container">
                <span className="drink-shower-container">
                    <Drinks imageName="/res/drink0.png"/>
                    <Drinks imageName="/res/drink1.png"/>
                    <Drinks imageName="/res/drink2.png"/>
                    <Drinks imageName="/res/drink3.png"/>
                </span>
                <span className="button-space-container">
                    <ArrowNotifier />
                    <div className="button-space">
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
                <div className="empty-middle-container"/>
                <DrinkOutView />
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

function ArrowNotifier()    {
    return  (
        <div className="arrow-container">
            <img className="arrow-image" src="res/arrow.png"/>
            <p className="arrow-text">Click Here!</p>
        </div>
    );
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
