import './VendingMachine.css'

function AnswerView() {
    return(
        <div className="problem-container">
            <div className="center-class">
            <p className="problem-text">What`s your</p>
            <p className="problem-text">problem?</p>
            </div>
        </div>
    )
}

function VendingMachine() {

    return(
        <div className="vending-machine-container">
            <span className="vending-machine-body">
                <div className="vending-machine-head"/>
                <AnswerView />

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

function VendingMachineApp() {
    return (
        <div className="main-container">
            <VendingMachine />
        </div>
    );
}

export default VendingMachineApp;
