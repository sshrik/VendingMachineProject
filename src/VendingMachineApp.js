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

function DrinkView() {
    return(
        <div className="drink-container">
            <span className="drink-shower-container">
                <Drinks imageName="/res/drink0.png"/>
                <Drinks imageName="/res/drink1.png"/>
                <Drinks imageName="/res/drink2.png"/>
                <Drinks imageName="/res/drink3.png"/>
            </span>
            <span className="button-space-container">
                <div className="button-space"></div>
                <div className="bill-space"></div>
            </span>
        </div>
    )
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

function VendingMachineApp() {
    return (
        <div className="main-container">
            <VendingMachine />
            <Copyright />
        </div>
    );
}

export default VendingMachineApp;
