import React from "react";


export default class DrawCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        // console.log(this.canvas.current)
        this.props.setCanva(this.canvas.current, this.canvas.current.getContext('2d'));
        console.log(1, this.canvas.current.getContext('2d'))
        let canvas = this.canvas.current
        let ctx = this.canvas.current.getContext('2d')

    }

    render() {
        return (
            <canvas ref={this.canvas} width='1000' height='500'>

            </canvas>
        );
    }

}

