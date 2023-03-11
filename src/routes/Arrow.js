import DrawCanvas from '../component/DrawCanvas'
import Canvashandler from '../utils/Canvahandler';
import Circle from '../utils/Circle';
import '../stylsheet/arrow.css'

const Arrow = () => {
    let nbTouch = 0;
    let click = 0;
    let nbCible = 50;
    let startTime;
    let canvaObj = null;


    //initializing 
    function printCircles() {
        for (let i = 0; i < nbCible; i++) {
            let c = new Circle({ ctx: canvaObj.ctx, cnvW: canvaObj.canvas.width, cnvH: canvaObj.canvas.height });
            c.setRandomPosition();
            canvaObj.addObject(c);
        }
        canvaObj.print();
    }

    // //start new game
    function newGame() {
        if (canvaObj.drawL.length)
            return
        nbTouch = 0;
        click = 0;
        document.getElementById('result').textContent = ''
        printCircles()
    }

    // //onclick do that
    function clickObject(event) {

        event.stopPropagation()
        if (!click) {
            startTime = Date.now();
        }
        click++;
        nbTouch += canvaObj.deletClickedObject({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY })
        canvaObj.print();
        if (canvaObj.drawL.length == 0) {
            const totalTime = Date.now() - startTime
            document.getElementById('result').textContent = totalTime / 1000
        }
    }
    // canvaObj.canvas.addEventListener('click', clickObject, false);
    // document.getElementById('resetButton').addEventListener('click', resetGame, false);


    function resetGame() {
        newGame();
    }
    //

    function setCanva(canvas, ctx) {
        canvaObj = new Canvashandler(canvas, ctx)
        newGame();
    }

    return (
        <div>
            <div id='canvadiv'>
                <DrawCanvas setCanva={setCanva} onClick={clickObject} />
            </div>
            <div className="option">
                <input onClick={resetGame} type="button" value='reset' className='greenButton' id="resetButton" />
            </div>
            <div id='result'>
            </div>
        </div>
    )
}
export default Arrow;