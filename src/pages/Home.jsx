import React, { Component } from "react"
import { connect } from "react-redux"
import {
    counterUp,
    counterDown,
    counterReset,
    counterSetValue,
    counterSetInitial
} from "../redux/reducers/counterReducer"


class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            counterTune: 0            
        }
        // bindeos
        this.aumentar = this.aumentar.bind(this)
        this.disminuir = this.disminuir.bind(this)
        this.resetear = this.resetear.bind(this)
        this.handlerChangeCounter = this.handlerChangeCounter.bind(this)
        this.setCounterValue = this.setCounterValue.bind(this)
        this.setCustomInitial = this.setCustomInitial.bind(this)
       
    }

    aumentar() {
        this.props.countUp() // countUp nombre dado a action en dispatch
    }

    disminuir() {
        this.props.countDown() // countDown nombre dado a action en dispatch
    }

    resetear() {
        this.props.countReset()
    }
  
    handlerChangeCounter(event) {
        
        this.setState({ // captura evento input
            counterTune: event.target.value
        })
        
    }

    setCounterValue() { // cambia counterTune de Home
        this.props.setValue(this.state.counterTune)
    }
  
    setCustomInitial() {
        this.props.setInitial(this.state.counterTune)
    }
  
    render() {
        return (
            <>
                <div>
                    <h1>Home</h1>

                    <button onClick={this.aumentar}>Aumentar</button>
                    <button onClick={this.disminuir}>Disminuir</button>
                    <button onClick={this.resetear}>Resetear</button>
                </div>
                <div>
                    <input 
                        type="number"
                        placeholder="Ingresar número"
                        onChange={this.handlerChangeCounter}
                    />
                    <button onClick={this.setCounterValue}>Set</button>
                    <button onClick={this.setCustomInitial}>Initial</button>
                </div>
                <div>
                    <h5>
                        Estado del contador: {this.props.counterReducer.value ? this.props.counterReducer.value : 0 }
                    </h5>
                </div>
            </>
        )
  }
}

// "DISPATCHEAR": envía actions para que las filtre el Reducer
const mapDispatchToProps = (dispatch) => {
    return {
        // nombre action(arbitraria): ()=> dispatch(funcion en Reducer ())
        countUp: () => dispatch(counterUp()),
        countDown: () => dispatch(counterDown()),
        countReset: () => dispatch(counterReset()),
        setValue: (newValue) => dispatch(counterSetValue(newValue)),
        setInitial: (newInitial) => dispatch(counterSetInitial(newInitial))

    }
}

// envía estado
const mapStateToProps = (state) => {
    return {
        // reducer: state.reducer
        counterReducer: state.counterReducer
    }
}

// export default Home
// export con connect(states, dispatch-actions)(componente)
export default connect(mapStateToProps, mapDispatchToProps)(Home)



