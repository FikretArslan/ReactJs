import { Component } from "react";

export default class ClassTypeTest extends Component {
  constructor(props) { // props ları karşıladığımız yer
    
    // props lar extend edilen class ın constructor ına gönderilemden çalışmaz
    // super(props) ifadesi bu işi yapar
    super(props);

    // Burası state in oluşturulduğu yer. 
    // Function type daki useState e alternatif
    this.state = {
      hours: 10,
      seconds: 45,
    };
  }


  componentDidMount(){
    console.log("İlk girişte çalışır")
  }


  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>
          {this.state.hours}:{this.state.seconds}
        </h2>
        <button onClick={() => this.setState({ hours: 13 })}>Set Hours</button>
        <button onClick={() => this.setState({ seconds: 55 })}>
          Set Hours
        </button>
      </div>
    );
  }
}
