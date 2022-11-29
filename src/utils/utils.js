
const data = require("../utils/switch.json");
const fontSize = ["10px","12px"]
const iconSize = ["22px", "30px"]

export const getSwitches = (width=3, height=3, idG=0)=>{
    console.log(width+"   ---  "+height);
    let swicthArray = []
    let id = idG;
    for(let i=0; i<width; i++)
        for(let j=0; j<height; j++){
            swicthArray.push({...data,...{"id":++id}});
        }
    
    return swicthArray
};

export const setIcon = (board, boardNumber, icon , fileName) => {
    let newSetup = []
    for(let i = 0; i<board.length ; i++)
    {
        if(i===boardNumber){
            let newBoard = []
            for(let j=0 ; j<board[i].length ; j++ ){
                if(icon.id == board[i][j].id){
                    const onlyTextSwitch = board[i][j]
                    newBoard.push({...onlyTextSwitch,...{"icon":fileName}})
                    continue
                }
                newBoard.push(board[i][j])
            }
            newSetup.push(newBoard);
            continue
        }
        newSetup.push(board[i])
    }
    return newSetup
}

export const textOnly = (board, boardNumber) => {
    console.log("Text Only");
    console.log(boardNumber,"*********************");
    let newSetup = []
    for(let i = 0; i<board.length ; i++)
    {
        if(i===boardNumber){
            console.log(i+"    ================================");
            console.log(board[i]);
            let newBoard = []
            for(let j=0 ; j<board[i].length ; j++ ){
                const onlyTextSwitch = board[i][j]
                let newIconStyle = {
                    "iconStyle":{
                        "width":onlyTextSwitch.iconStyle.width,
                        "height":onlyTextSwitch.iconStyle.height,
                        "display":"none"
                    }
                }
                newBoard.push({...onlyTextSwitch,...{"text":"text1"}, ...newIconStyle})
            }
            newSetup.push(newBoard);
            continue
        }
        newSetup.push(board[i])
    }
    console.log(newSetup);
    return newSetup
}

export const iconOnly = (board, boardNumber) => {
    console.log("Icon Only");    
    console.log(boardNumber,"*********************");


    let newSetup = []
    for(let i = 0; i<board.length ; i++)
    {
        if(i===boardNumber){
            let newBoard = []
            for(let j=0 ; j<board[i].length ; j++ ){
                const onlyTextSwitch = board[i][j]
                onlyTextSwitch.iconStyle['display'] = "block"
                onlyTextSwitch["text"] = ""
                newBoard.push({...onlyTextSwitch})
            }
            newSetup.push(newBoard);
            continue
        }
        newSetup.push(board[i])
    }
    return newSetup
}

export const iconAndText= (board, boardNumber) => {
    console.log("Icon and Text");
    console.log(boardNumber,"*********************");

    let newSetup = []
    for(let i = 0; i<board.length ; i++)
    {
        if(i===boardNumber){
            let newBoard = []
            for(let j=0 ; j<board[i].length ; j++ ){
                const onlyTextSwitch = board[i][j]
                onlyTextSwitch.iconStyle.display = "block"
                newBoard.push({...onlyTextSwitch,...{"text":"text1"}})
            }
            newSetup.push(newBoard);
            continue
        }
        newSetup.push(board[i])
    }
    return newSetup
}

export const createDesign = (board, design) => {
    let newBoardDesign = []
    for(let i=0 ; i < board.length; i++){
        if(i === design.boardNumber){
            const newD = getDesign(design.design);
            newBoardDesign.push( (newD == null ? board[i] : newD));
            continue;
        }
        newBoardDesign.push(board[i]);
    }

    return newBoardDesign
}

export const setFontSize = (board, boardNumber, size, iconText) => {
    console.log("__________________________________");
    console.log(board);
    console.log(boardNumber);
    console.log(size);
    console.log(iconText);
    let newBoardDesign = []
    for(let i=0 ; i < board.length; i++){
        if(i === boardNumber){
            const newD = setSwitchIconSize(board[i], size, iconText);
            newBoardDesign.push( (newD == null ? board[i] : newD));
            continue;
        }
        newBoardDesign.push(board[i]);
    }
    console.log(newBoardDesign);
    console.log("__________________________________");
    return newBoardDesign
}


export const changeColor = (board ,boardNumber, id, color) => {
    let newSetup = []
    for(let i = 0; i<board.length ; i++)
    {
        
        if(i===boardNumber){
            let newBoard = []
            for(let j=0 ; j<board[i].length ; j++ ){
                if(board[i][j].id === id){
                    console.log({...board[i][j],...{"fill":color}});
                    newBoard.push({...board[i][j],...{"fill":color}})
                    continue
                }
                newBoard.push(board[i][j])
            }
            newSetup.push(newBoard);
            continue
        }
        newSetup.push(board[i])
    }

    return newSetup
}

export const changeText = (board ,boardNumber, id, text) => {
    let newSetup = []
    for(let i = 0; i<board.length ; i++)
    {   
        if(i===boardNumber){
            let newBoard = []
            for(let j=0 ; j<board[i].length ; j++ ){
                if(board[i][j].id === id){
                    newBoard.push({...board[i][j],...{"text":text}})
                    continue
                }
                newBoard.push(board[i][j])
            }
            newSetup.push(newBoard);
            continue
        }
        newSetup.push(board[i])
    }

    return newSetup
}



const setSwitchIconSize = (boardSide, size, iconText) => {
    let newBoardDesign = []
    for(let i =0 ; i < boardSide.length ; i++){
        
        if(boardSide[i].type == "BUTTON" && iconText===0){
            let newIconStyle = {
                iconStyle: {
                    width: (size==='M') ? iconSize[1] : iconSize[0],
                    height: (size==='M') ? iconSize[1] : iconSize[0],
                }
            }
            newBoardDesign.push({...boardSide[i], ...newIconStyle})
            continue
        }
        if(boardSide[i].type == "BUTTON" && iconText===1){
            let newfontStyle = {
                fontStyle: {
                    "font-size": (size==='M') ? fontSize[1] : fontSize[0],
                }
            }
            newBoardDesign.push({...boardSide[i], ...newfontStyle})
            continue
        }
        newBoardDesign.push(boardSide[i])
    }
    return newBoardDesign
}

const getDesign = (design) => {
    if(design === 'L9'){
        return getSwitches();
    }
    if(design === 'L12'){
        return getSwitches(3,4);
    }
    if(design === 'M1')
        return [ ...getSwitches(4,1), {type:"LCD"}, ...getSwitches(7,1, 5)]
    return null
}
