import React from "react";


export default class DrawCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        this.props.setCanva(this.canvas.current, this.canvas.current.getContext('2d'));
    }

    render() {
        return (
            <canvas ref={this.canvas} width='1000' height='500' onClick={this.props.onClick}>

            </canvas>
        );
    }

}

