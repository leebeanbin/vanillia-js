const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const  colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//pixel modifier에 size를 주지 않으면 코드를 위와 같이 짜도 실행이 되지 않는다.

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;


function stopPainting(event){
    painting = false;
}

function startPainting(){
    painting = true;
}

function mousedrag(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        //path는 선을 의미한다.
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
        /*beginPath라는 것으로 그리는 것에 시작점을 만들면
        moveTo(x,y)라는 함수를 통해 x,y라는 path가 시작된 지점으로
        이동하고 클릭해서 움직이면 lineTo(x,y)라는 함수를 통해서
        라인을 그리려고 하는데 stroke라는 함수를 사용해서 라인을 만들고
        그려주는 것이다! 그리고 이 함수들은 마우스를 움직이는 내내 
        발생한다. 그리고 lineTo라는 함수가 직선을 긋다가 다른 곳으로
        움직이면 그 전의 path값과 이어주는 역할도 동시에 한다!*/
    }
}

function onMouseDown(event){
    painting = true;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.taget.value;
    ctx.lineWidth = size;

}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";

    }else{
        filling = true;
        mode.innerText = "Paint"
    }

}

function handelCanvasClick(event){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
    
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
    //link.click() 이 클릭을 못하게 클릭한것을 거짓으로 만든다.
}

if(canvas){
    canvas.addEventListener("mousemove",mousedrag);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click", handelCanvasClick);
    canvas.addEventListener("contextmenu",handleCM);
    // right click을 하면 나오는 메뉴를 contextmenu라고 하는데 이걸 preventDefault로 안나오게 막아 놓은 것임.
    can
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );

if(range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click",handleSaveClick);
}

    //Array.from은 object로 부터 array를 만든다. forEach 함수는 주어진
    //함수에 대해서 요소 각각에 적용하게 끔 만든다. colors라는 array안에 
    // 색상들의 elements들이 있는데 forEach문을 통해서 그 각각의 array에다가
    // addEventListener함수를 적용할 수 있는 것이다.
