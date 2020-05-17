// TODO:
// 1. Fix eraser tool to be like pen tool ✔
// 2. add drop down for all different types of automation ✔
// 3. add ability to move cells with arrow keys!!! ✔
// 4. store in database not localStorage ✔
// 5. realtime updates, multiple users ✔
// 6. optimise datastream
// 7. copy and paste between instances
// 8. comments?
// 9. Circles

function Editor(canvas, gridCanvas, toolCanvas) {
    this.canvas = canvas;
    this.gridCanvas = gridCanvas;
    this.toolCanvas = toolCanvas;

    this.cW = canvas.width;
    this.cH = canvas.height;
    this.urlKey = "-M7JgrqxHKQZZ-0tIovS";

    function setupCanvas(canvas) {
        // Get the device pixel ratio, falling back to 1.
        var dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        var rect = canvas.getBoundingClientRect();
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);
        return ctx;
    }

    this.ctx = setupCanvas(this.canvas);
    this.gridCtx = setupCanvas(this.gridCanvas);
    this.toolCtx = setupCanvas(this.toolCanvas);

    this.gridType = 1;

    this.loading_offshoot = loading_offshoot;

    this.gridLineWidth = 0.3;
    this.mouseGridPos = [0, 0];
    this.mouseIsDown = false;
    this.currentTool = 'pen';
    this.prevTool = '';
    this.symbol = 't';
    this.collisions = ' /tT#oO'
    // this.randomFillPercent = 90;

    this.saveCoords = [0, 0, 0, 0]; //x1,y1,x2,y2
    this.saveStage = 0;
    this.marqueeCoords = [0, 0, 0, 0]; //x1,y1,x2,y2
    this.marqueeStage = 1;
    this.marqueePixelArray = [];
    this.moveCoords = [0, 0, 0, 0]; //x1,y1,x2,y2
    this.moveStage = 1;
    this.movePixelArray = [];
    this.origMouseGridPos = [0, 0];
    this.moveToolSelectedPos = [0, 0]

    this.boxCoords = [0, 0, 0, 0]; //x1,y1,x2,y2
    this.boxStage = 1;

    this.penColor = "14fdce";
    this.backgroundColor = "111111";
    this.gridColor = "14fdce";
    this.gridWidth = 60;
    this.gridHeight = 30;
    this.pixelSize = Math.floor(window.innerWidth / this.gridWidth);


    this.historyArray = [];
    this.shouldGetUpdates = true;

    this.time_elapsed = 0;
    setInterval(
        $.proxy(function() {
            this.time_elapsed++
        }, this),
        1000);

    // load google font == VT323
    WebFontConfig = {
        google: { families: ['VT323'] },
    };
    (function(){
        var wf = document.createElement("script");
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
        wf.async = 'true';
        document.head.appendChild(wf);
    })();




    //Build pixel array
    this.pixelArray = new Array(this.gridWidth); //[x][y]
    for (var i = 0; i < this.pixelArray.length; i++) {
        this.pixelArray[i] = new Array(this.gridHeight);
        for (var j = 0; j < this.pixelArray[i].length; j++) {
            this.pixelArray[i][j] = [String(Math.floor(Math.random()*10)) + String(Math.floor(Math.random()*10)) + String(Math.floor(Math.random()*10)), '']
            // this.pixelArray[i][j][0] = this.backgroundColor;
        }
    }

    this.tempArray = new Array(this.gridWidth); //[x][y]
    for (var i = 0; i < this.tempArray.length; i++) {
        this.tempArray[i] = new Array(this.gridHeight);
        for (var j = 0; j < this.tempArray[i].length; j++) {
            this.tempArray[i][j] = '0';
        }
    }

    this.zoom = zoom;

    function zoom(dir) {
        if (dir == 'out') {


        } else if (dir == 'in') {

        } else {
            // console.log("Zoom dir not recognised.")
        }
    }

    /*======================
            RENDERING
      ======================*/
    this.renderAll = renderAll;

    function renderAll() {
        //Clear pixel canvas:
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.cW, this.cH);

        this.renderPixelArray();
        this.renderGrid();
        this.renderCursor();
        this.renderTools(); //##? just added this
    }
    this.renderPixelArray = renderPixelArray;

    function renderPixelArray() {
        for (var i = 0; i < this.pixelArray.length; i++) {
            for (var j = 0; j < this.pixelArray[i].length; j++) {
                this.ctx.clearRect(i * this.pixelSize, j * this.pixelSize, this.pixelSize, this.pixelSize);
            }
        }
        for (var i = 0; i < this.pixelArray.length; i++) {
            for (var j = 0; j < this.pixelArray[i].length; j++) {
                this.renderBottom([i, j], this.pixelArray[i][j][0], undefined, this.pixelArray[i][j][1]);
            }
        }
        for (var i = 0; i < this.pixelArray.length; i++) {
            for (var j = 0; j < this.pixelArray[i].length; j++) {
                this.renderPixel([i, j], this.pixelArray[i][j][0], undefined, this.pixelArray[i][j][1]);
            }
        }
    }
    this.renderGrid = renderGrid;

    function renderGrid() {
        this.gridCtx.setLineDash([this.pixelSize/2]);
        this.gridCtx.lineDashOffset = (this.pixelSize / 4);
        this.gridCtx.beginPath();
        this.gridCtx.clearRect(0, 0, this.cW, this.cH);
        for (var x = 0; x <= this.cW; x += this.pixelSize) {
            this.gridCtx.moveTo(x, 0);
            this.gridCtx.lineTo(x, this.cH);
        }
        for (var y = 0; y <= this.cH; y += this.pixelSize) {
            this.gridCtx.moveTo(0, y);
            this.gridCtx.lineTo(this.cW, y);
        }
        this.gridCtx.strokeStyle = "#" + this.gridColor;
        this.gridCtx.lineWidth = this.gridLineWidth;
        this.gridCtx.stroke();
    }

    this.renderCursor = renderCursor;

    function renderCursor() {
        if (this.currentTool == 'pen') {
            this.renderToolPixel(this.mouseGridPos, this.penColor, undefined, this.symbol);
        } else if (this.currentTool == 'eraser' || this.currentTool == 'eyedropper') {
            this.toolCtx.clearRect(this.mouseGridPos[0] * this.pixelSize + 1, this.mouseGridPos[1] * this.pixelSize + 1, this.pixelSize - 2, this.pixelSize - 2);
            this.toolCtx.beginPath();
            this.toolCtx.rect(this.mouseGridPos[0] * this.pixelSize + 1, this.mouseGridPos[1] * this.pixelSize + 1, this.pixelSize - 2, this.pixelSize - 2);
            this.toolCtx.lineWidth = 2;
            this.toolCtx.strokeStyle = '#14fdce';
            this.toolCtx.stroke();
        } else if (this.currentTool == 'bucket') {
            this.toolCtx.fillStyle = "#" + this.penColor;
            this.toolCtx.fillRect(this.mouseGridPos[0] * this.pixelSize + 0.25 * this.pixelSize, this.mouseGridPos[1] * this.pixelSize + 0.25 * this.pixelSize, 0.5 * this.pixelSize, 0.5 * this.pixelSize);
        } else if (this.currentTool == 'move'&& this.moveStage == 2) {
            // console.log(this.movePixelArray)
            this.renderToolPixel(this.mouseGridPos, this.movePixelArray[0][0][0], undefined, this.movePixelArray[0][0][1]);
            // if (this.movePixelArray[0][0][1] != null) {
            //     this.toolCtx.fillText(this.movePixelArray[0][0][1], (this.mouseGridPos[0] * this.pixelSize) + (this.pixelSize /4), ((this.mouseGridPos[1] * this.pixelSize) + this.pixelSize) - this.pixelSize/16);
            // } else {

            // }
        }
    }

    this.renderTools = renderTools;

    function renderTools() {
        this.toolCtx.beginPath();
        this.toolCtx.clearRect(0, 0, this.cW, this.cH);
        //render 'save' marquee
        if (this.currentTool == 'save' && this.saveStage == 3) {
            this.toolCtx.rect(this.saveCoords[0] * this.pixelSize, this.saveCoords[1] * this.pixelSize, this.saveCoords[2] * this.pixelSize - this.saveCoords[0] * this.pixelSize, this.saveCoords[3] * this.pixelSize - this.saveCoords[1] * this.pixelSize);
            if (!this.toolCtx.setLineDash) {
                this.toolCtx.setLineDash = function() {}
            } else this.toolCtx.setLineDash([5]);
            this.toolCtx.lineWidth = 3;
            this.toolCtx.strokeStyle = '#031e11';
            this.toolCtx.stroke();
        }
        //render marqueed pixels
        if (this.currentTool == 'marquee' && (this.marqueeStage == 5 || this.marqueeStage == 6)) { //##
            for (var i = 0; i < this.marqueePixelArray.length; i++) {
                for (var j = 0; j < this.marqueePixelArray[i].length; j++) {
                    this.renderToolPixel([i + this.marqueeCoords[0], j + this.marqueeCoords[1]], this.marqueePixelArray[i][j][0], undefined, this.marqueePixelArray[i][j][1]);
                }
            }
        }
        //render marquee
        if (this.currentTool == 'marquee' && (this.marqueeStage > 1  && this.marqueeStage < 7)) {
            this.toolCtx.rect(this.marqueeCoords[0] * this.pixelSize, this.marqueeCoords[1] * this.pixelSize, this.marqueeCoords[2] * this.pixelSize - this.marqueeCoords[0] * this.pixelSize, this.marqueeCoords[3] * this.pixelSize - this.marqueeCoords[1] * this.pixelSize);
            if (!this.toolCtx.setLineDash) {
                this.toolCtx.setLineDash = function() {}
            } else this.toolCtx.setLineDash([5]);
            this.toolCtx.lineWidth = 3;
            this.toolCtx.strokeStyle = '#031e11';
            this.toolCtx.stroke();
        }
        if (this.currentTool == 'box' && this.boxStage > 1) {
            this.toolCtx.rect(this.boxCoords[0] * this.pixelSize, this.boxCoords[1] * this.pixelSize, this.boxCoords[2] * this.pixelSize - this.boxCoords[0] * this.pixelSize, this.boxCoords[3] * this.pixelSize - this.boxCoords[1] * this.pixelSize);
            if (!this.toolCtx.setLineDash) {
                this.toolCtx.setLineDash = function() {}
            } else this.toolCtx.setLineDash([5]);
            this.toolCtx.lineWidth = 3;
            this.toolCtx.strokeStyle = '#031e11';
            this.toolCtx.stroke();
        }
    }

    //just render it (not changing the pixel array)
    this.renderPixel = renderPixel;
    function renderPixel(pos, color, forceClear, symbol=null) {
        if (color == this.backgroundColor) { //zero means blank (transparent) so clear the pixel
            this.ctx.clearRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
        } else if (color !== -1) {
            this.ctx.fillStyle = "#" + color;
            this.ctx.shadowBlur = 0;
            this.ctx.shadowColor = "#" + color;
            this.ctx.font = this.fontSize + "px VT323";
            if (symbol == null || symbol == ' ') {
                this.ctx.fillRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
            } else {
                this.renderSymbol(this.ctx, pos, this.penColor, symbol);
            }
        } else if (forceClear === true) { //i.e. it is -1, now chekc if we need to clear
            this.ctx.clearRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
        } else {
            // console.log("Error in renderPixel 1")
        }
    }

    this.renderBottom = renderBottom;
    function renderBottom(pos, color, forceClear, symbol=null) {
        if (color == this.backgroundColor) { //zero means blank (transparent) so clear the pixel
            // this.ctx.clearRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
        } else if (color !== -1) {
            this.ctx.fillStyle = "#26754e";
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = "#26754e";
            this.ctx.font = this.fontSize+"px VT323";
            if (symbol == null) {
                this.ctx.fillRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
            } else {
                this.renderSymbol(this.ctx, pos, this.penColor, symbol);
            }
        } else if (forceClear === true) { //i.e. it is -1, now chekc if we need to clear
            this.ctx.clearRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
        } else {
            // console.log("Error in renderBottom 1")
        }
    }

    //just render it (not changing the pixel array)
    this.renderToolPixel = renderToolPixel;

    function renderToolPixel(pos, color, forceClear, symbol) {
        if (color !== -1) {
            this.toolCtx.fillStyle = "#" + color;
            if (symbol == null || symbol == '') {
                // this.ctx.clearRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
                this.toolCtx.fillStyle = "#" + this.backgroundColor;
                this.toolCtx.fillRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
            } else if(symbol == ' ') {
                this.toolCtx.fillStyle = "#" + this.penColor;
                this.toolCtx.fillRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
            } else {
                this.toolCtx.shadowBlur = 0;
                this.toolCtx.font = this.fontSize + "px VT323";
                this.renderSymbol(this.toolCtx, pos, this.penColor, symbol);
            }
        } else if (forceClear === true) { //i.e. it is -1, now chekc if we need to clear
            this.toolCtx.clearRect(pos[0] * this.pixelSize, pos[1] * this.pixelSize, this.pixelSize, this.pixelSize);
        }
    }
    this.fontSize = this.pixelSize * 1.25;
    this.renderSymbol = renderSymbol;
    function renderSymbol(ctx, pos, color, symbol) {
        if (',;_gjpqy'.includes(symbol)) {
            ctx.fillText(symbol, pos[0] * this.pixelSize + (this.pixelSize/2) - (this.fontSize*0.2), pos[1] * this.pixelSize + (this.pixelSize) - (this.pixelSize/2) + (this.fontSize*0.3) - (this.fontSize*0.15));
        } else {
            ctx.fillText(symbol, pos[0] * this.pixelSize + (this.pixelSize/2) - (this.fontSize*0.2), pos[1] * this.pixelSize + (this.pixelSize) - (this.pixelSize/2) + (this.fontSize*0.3) );
        }
    }

    /*================================
              GENERAL FUNTIONS
      ================================*/

    this.getPixelsFromArray = getPixelsFromArray;

    function getPixelsFromArray(coords) {
        var arrayTo = new Array(coords[2] - coords[0]);
        for (var i = 0; i < arrayTo.length; i++) arrayTo[i] = new Array(coords[3] - coords[1]);
        for (var x = coords[0]; x >= coords[0] && x < coords[2]; x++) {
            for (var y = coords[1]; y >= coords[1] && y < coords[3]; y++) {
                arrayTo[x - coords[0]][y - coords[1]] = this.pixelArray[x][y];
                // console.log(arrayTo[x][y]);
            }
        }
        return arrayTo;
    }



    //change the pixel array and render it:
    this.drawPixel = drawPixel;

    function drawPixel(pos, color, symbol) {
        if (this.pixelArray[pos[0]][pos[1]]) {
            this.pixelArray[pos[0]][pos[1]] = [this.backgroundColor, ''];
            this.pixelArray[pos[0]][pos[1]] = [color, symbol];
            this.renderPixel(pos, color, undefined, symbol);
            this.sendPixel(pos);
        };
    }

    this.drawTempPixel = drawTempPixel;

    function drawTempPixel(pos, color, symbol) {
        this.tempArray[pos[0]][pos[1]] = symbol;
    }

    this.changeTool = changeTool;

    function changeTool(tool) {
        // console.log("changeTool(): "+tool)
        this.prevTool = this.currentTool;
        this.currentTool = tool;

        //reset 'process' tools
        if (this.currentTool !== 'marquee') {
            this.marqueeStage = 1;
        } //accidently started at 1 for this
        if (this.currentTool !== 'box') {
            this.boxStage = 1;
        } //accidently started at 1 for this
        if (this.currentTool !== 'move') {
            this.moveStage = 1;
        } //accidently started at 1 for this
        if (this.currentTool !== 'save') {
            this.saveStage = 0;
        }

        $('.menu-bar .item div.tint').hide();
        $('.menu-bar .' + tool + '-button div.tint').show();

        this.renderTools();
        this.renderCursor();
    }
    this.erasePixel = erasePixel;

    function erasePixel(pos) {
        this.drawPixel(pos, this.backgroundColor, '')
        // this.pixelArray[pos[0]][pos[1]] = [this.backgroundColor, ''];
        // this.renderPixel(pos, this.backgroundColor, undefined, '');
    }

    this.getColorAtPos = getColorAtPos;

    function getColorAtPos(pos) {
        if (this.pixelArray[pos[0]][pos[1]]) {
            if (this.pixelArray[pos[0]][pos[1]] === this.backgroundColor) return "ffffff";
            else return this.pixelArray[pos[0]][pos[1]][0];
        } else {
            return -1; //outside of canvas
        }
    }

    this.getSymbolAtPos = getSymbolAtPos;
    function getSymbolAtPos(pos) {
        if (this.pixelArray[pos[0]][pos[1]]) {
            return this.pixelArray[pos[0]][pos[1]][1];
        } else {
            return -1; //outside of canvas
        }
    }

    this.getDugPercentage = getDugPercentage;

    function getDugPercentage() {
        return $('#dug-percent').val() / 100;
    }

    this.getCollisions = getCollisions;
    function getCollisions() {
        return $('#collisions').val();
    }

    this.getFillPercentage = getFillPercentage;
    function getFillPercentage() {
        return $('#fill-percent').val() / 100;
    }
    this.getCellCycles = getCellCycles;
    function getCellCycles() {
        return $('#cell-cycles').val();
    }
    this.getFillOutline = getFillOutline;
    function getFillOutline() {
        return $('#fill-outline').is(':checked');
    }
    this.getFillAvoid = getFillAvoid;
    function getFillAvoid() {
        return $('#fill-avoid').is(':checked');
    }

    this.getFillClear = getFillClear;
    function getFillClear() {
        return $('#fill-clear').is(':checked');
    }



    this.clearAllPixels = clearAllPixels;

    function clearAllPixels(send=true) {
        for (var i = 0; i < this.pixelArray.length; i++) {
            for (var j = 0; j < this.pixelArray[i].length; j++) {
                this.pixelArray[i][j] = [this.backgroundColor, ''];
                // this.erasePixel([i, j]);
            }
        }
        if (send) {
            this.sendAllPixels();
            this.renderAll();
        }
    }

    this.sendPixel = sendPixel;
    function sendPixel(pos) {
        var updates = {};
        updates['/maps/' + this.urlKey + '/' + pos[0] + '/' + pos[1]] = this.pixelArray[pos[0]][pos[1]];
        firebase.database().ref().update(updates);
    }

    this.sendAllPixels = sendAllPixels;
    function sendAllPixels() {
        console.log('SENDING ALL PIXELS')
        var updates = {};
        updates['maps/' + this.urlKey] = JSON.parse(JSON.stringify(this.pixelArray));
        firebase.database().ref().update(updates);
    };

    this.digPixel = digPixel;

    function digPixel(x, y, value) {
        editor.drawTempPixel([x, y], editor.penColor, value);
    }

    this.randomFill = randomFill;
    function randomFill() {
        this.pushPixelsToHistoryArray();
        if (this.getFillAvoid()) {
            for (var i = 0; i < this.pixelArray.length; i++) {
                for (var j = 0; j < this.pixelArray[i].length; j++) {
                    var roll = Math.random();
                    if (roll < this.getFillPercentage() && this.pixelArray[i][j][1] == '') {
                        this.pixelArray[i][j] = [this.penColor, this.symbol]
                    }
                }
            }
        } else {
            for (var i = 0; i < this.pixelArray.length; i++) {
                for (var j = 0; j < this.pixelArray[i].length; j++) {
                    var roll = Math.random();
                    if (roll < this.getFillPercentage()) {
                        this.pixelArray[i][j] = [this.penColor, this.symbol]
                    }
                }
            }
        }
        this.sendAllPixels();
        this.renderAll();
    }

    this.dungeonFill = dungeonFill;
    function dungeonFill() {
        for (var i = 0; i < this.tempArray.length; i++) {
            for (var j = 0; j < this.tempArray[i].length; j++) {
                this.tempArray[i][j] = '0';
            }
        }
        this.pushPixelsToHistoryArray();

        var h = Math.floor($(document).height() / this.pixelSize);
        var w = Math.floor($(document).width() / this.pixelSize);

        if (w >= this.pixelArray.length) {
            w = (this.pixelArray.length -1)
        }
        if (h >= this.pixelArray[0].length) {
            h = (this.pixelArray[0].length -1)
        }

        ROT.RNG.setSeed(Math.random() * 1000);
        var map = new ROT.Map.Digger(w, h, {dugPercentage: this.getFillPercentage()});
        map.create(editor.digPixel);

        // console.log(this.tempArray)
        if (this.getFillClear()) {
            this.clearAllPixels(false);
        }

        if (this.getFillAvoid()) {
            for (var i = 0; i < this.tempArray.length; i++) {
                for (var j = 0; j < this.tempArray[i].length; j++) {
                    var outline = this.getFillOutline();
                    // this.drawPixel([i, j], this.penColor, this.tempArray[i][j]);
                    if (this.tempArray[i][j] == '1') {
                        if (outline) {
                            if (
                                (i < this.tempArray.length - 1 && this.tempArray[i + 1][j] == '') ||
                                (i < this.tempArray.length - 1 && j < this.tempArray[i].length - 1 && this.tempArray[i + 1][j + 1] == '') ||
                                (j < this.tempArray[i].length && this.tempArray[i][j + 1] == '') ||
                                (i > 0 && this.tempArray[i - 1][j] == '') ||
                                (i > 0 && j > 0 && this.tempArray[i - 1][j - 1] == '') ||
                                (j > 0 && this.tempArray[i][j - 1] == '') ||
                                (i > 0 && j < this.tempArray[i].length - 1 && this.tempArray[i - 1][j + 1] == '') ||
                                (i < this.tempArray.length - 1 && j > 0 && this.tempArray[i + 1][j - 1] == '')
                            )
                            {
                                if (this.pixelArray[i][j][1] == '') {
                                    this.pixelArray[i][j] = [this.penColor, this.symbol];
                                    // this.drawPixel([i, j], this.penColor, this.symbol);
                                }
                            }
                        } else {
                            if (this.pixelArray[i][j][1] == '') {
                                this.pixelArray[i][j] = [this.penColor, this.symbol];
                                // this.drawPixel([i, j], this.penColor, this.symbol);
                            }
                        }
                    }
                }
            }
        } else {
            for (var i = 0; i < this.tempArray.length; i++) {
                for (var j = 0; j < this.tempArray[i].length; j++) {
                    var outline = this.getFillOutline();
                    // this.drawPixel([i, j], this.penColor, this.tempArray[i][j]);
                    if (this.tempArray[i][j] == '1') {
                        if (outline) {
                            if (
                                (i < this.tempArray.length - 1 && this.tempArray[i + 1][j] == '') ||
                                (i < this.tempArray.length - 1 && j < this.tempArray[i].length - 1 && this.tempArray[i + 1][j + 1] == '') ||
                                (j < this.tempArray[i].length && this.tempArray[i][j + 1] == '') ||
                                (i > 0 && this.tempArray[i - 1][j] == '') ||
                                (i > 0 && j > 0 && this.tempArray[i - 1][j - 1] == '') ||
                                (j > 0 && this.tempArray[i][j - 1] == '') ||
                                (i > 0 && j < this.tempArray[i].length - 1 && this.tempArray[i - 1][j + 1] == '') ||
                                (i < this.tempArray.length - 1 && j > 0 && this.tempArray[i + 1][j - 1] == '')
                            )
                            {
                                this.pixelArray[i][j] = [this.penColor, this.symbol];
                                // this.drawPixel([i, j], this.penColor, this.symbol);
                            }
                        } else {
                            this.pixelArray[i][j] = [this.penColor, this.symbol];
                                // this.drawPixel([i, j], this.penColor, this.symbol);
                        }
                    }
                }
            }
        }

        var drawDoor = function (x, y) {
            editor.pixelArray[x][y] = [this.penColor, "/"];
            // editor.drawPixel([x, y], editor.penColor, "/");
        }

        var rooms = map.getRooms();
        for (var i = 0; i < rooms.length; i++) {
            var room = rooms[i];
            room.getDoors(drawDoor);
        }
        this.sendAllPixels();
        this.renderAll();
    }

    this.cellFill = cellFill;
    function cellFill() {
        this.pushPixelsToHistoryArray();
        for (var i = 0; i < this.tempArray.length; i++) {
            for (var j = 0; j < this.tempArray[i].length; j++) {
                this.tempArray[i][j] = '0';
            }
        }

        var h = Math.floor($(document).height() / this.pixelSize);
        var w = Math.floor($(document).width() / this.pixelSize);

        if (w >= this.pixelArray.length) {
            w = (this.pixelArray.length -1)
        }
        if (h >= this.pixelArray[0].length) {
            h = (this.pixelArray[0].length -1)
        }

        // console.log('w: '+w + " " + this.pixelArray.length)
        // console.log('h: '+h + " " + this.pixelArray[0].length)

        var map = new ROT.Map.Cellular(w, h);

        /* cells with 1/2 probability */
        map.randomize(this.getFillPercentage());

        /* generate and show four generations */
        for (var i=0; i<this.getCellCycles(); i++) {
            // var display = new ROT.Display({width:w, height:h, fontSize:4});
            // SHOW(display.getContainer());
            map.create(editor.digPixel);
        }
        map.connect(editor.digPixel)

        // console.log(this.tempArray)
        if (editor.getFillClear()) {
            this.clearAllPixels(false);
        }
        if (this.getFillAvoid()) {
            for (var i = 0; i < this.tempArray.length; i++) {
                for (var j = 0; j < this.tempArray[i].length; j++) {
                    var outline = this.getFillOutline();
                    // this.drawPixel([i, j], this.penColor, this.tempArray[i][j]);
                    if (this.tempArray[i][j] == '1') {
                        if (outline) {
                            if (
                                (i < this.tempArray.length - 1 && this.tempArray[i + 1][j] == '') ||
                                (i < this.tempArray.length - 1 && j < this.tempArray[i].length - 1 && this.tempArray[i + 1][j + 1] == '') ||
                                (j < this.tempArray[i].length && this.tempArray[i][j + 1] == '') ||
                                (i > 0 && this.tempArray[i - 1][j] == '') ||
                                (i > 0 && j > 0 && this.tempArray[i - 1][j - 1] == '') ||
                                (j > 0 && this.tempArray[i][j - 1] == '') ||
                                (i > 0 && j < this.tempArray[i].length - 1 && this.tempArray[i - 1][j + 1] == '') ||
                                (i < this.tempArray.length - 1 && j > 0 && this.tempArray[i + 1][j - 1] == '')
                            )
                            {
                                if (this.pixelArray[i][j][1] == '') {
                                    this.pixelArray[i][j] = [this.penColor, this.symbol];
                                    // this.drawPixel([i, j], this.penColor, this.symbol);
                                }
                            }
                        } else {
                            if (this.pixelArray[i][j][1] == '') {
                                // this.drawPixel([i, j], this.penColor, this.symbol);
                                this.pixelArray[i][j] = [this.penColor, this.symbol];
                            }
                        }
                    }
                }
            }
        } else {
            for (var i = 0; i < this.tempArray.length; i++) {
                for (var j = 0; j < this.tempArray[i].length; j++) {
                    var outline = this.getFillOutline();
                    // this.drawPixel([i, j], this.penColor, this.tempArray[i][j]);
                    if (this.tempArray[i][j] == '1') {
                        if (outline) {
                            if (
                                (i < this.tempArray.length - 1 && this.tempArray[i + 1][j] == '') ||
                                (i < this.tempArray.length - 1 && j < this.tempArray[i].length - 1 && this.tempArray[i + 1][j + 1] == '') ||
                                (j < this.tempArray[i].length && this.tempArray[i][j + 1] == '') ||
                                (i > 0 && this.tempArray[i - 1][j] == '') ||
                                (i > 0 && j > 0 && this.tempArray[i - 1][j - 1] == '') ||
                                (j > 0 && this.tempArray[i][j - 1] == '') ||
                                (i > 0 && j < this.tempArray[i].length - 1 && this.tempArray[i - 1][j + 1] == '') ||
                                (i < this.tempArray.length - 1 && j > 0 && this.tempArray[i + 1][j - 1] == '')
                            )
                            {
                                this.pixelArray[i][j] = [this.penColor, this.symbol];
                                // this.drawPixel([i, j], this.penColor, this.symbol);
                            }
                        } else {
                            this.pixelArray[i][j] = [this.penColor, this.symbol];
                            // this.drawPixel([i, j], this.penColor, this.symbol);
                        }
                    }
                }
            }
        }
        this.sendAllPixels();
        this.renderAll();
    }



    this.toggleGrid = toggleGrid;

    function toggleGrid() {
        if (this.gridType == 1) {
            $(this.gridCanvas).hide();
            this.gridType = 2;
        } else if (this.gridType == 2) {
            $(this.gridCanvas).show();
            this.gridType = 1;
        }
    }

    this.cancelFill = false;
    this.fillingInProgress = false;
    this.bucketFill = bucketFill;

    function bucketFill(pos, targetColor, fillColor, targetSymbol) {
        if (targetColor == fillColor) {
            // console.log("Target color == fill color");
            return;
        }
        if (!this.fillingInProgress) {
            // console.log("Beginning fill");
            this.fillingInProgress = true;
            this.pushPixelsToHistoryArray();
            var que = [];
            que.push(pos);
            var node;

            function fillLoop(symbol) {
                if (editor.cancelFill === true) {
                    editor.cancelFill = false;
                    editor.fillingInProgress = false;
                    return;
                }
                var loopCount = 0;
                while (que.length > 0) {
                    node = que[que.length - 1];
                    que.pop();
                    if (editor.getColorAtPos(node) === targetColor && editor.getSymbolAtPos(node) === targetSymbol) {
                        // console.log(symbol)
                        editor.pixelArray[node[0]][node[1]] = [fillColor, symbol];
                        que.push([node[0] + 1, node[1]]);
                        que.push([node[0] - 1, node[1]]);
                        que.push([node[0], node[1] + 1]);
                        que.push([node[0], node[1] - 1]);
                    }
                    loopCount++;
                    if (loopCount > 10000) {
                        if (editor.cancelFill === true) {
                            editor.cancelFill = false;
                            editor.fillingInProgress = false;
                            return;
                        }
                        setTimeout(fillLoop, 100);
                        // editor.renderAll();
                        break;
                    } else {
                        editor.cancelFill = true;
                    }
                }
                if (que.length <= 0) editor.fillingInProgress = false;
                editor.sendAllPixels();
                editor.renderAll();
            }
            fillLoop(this.symbol);

        } else
          console.log("Please wait for previous fill to complete.");
    }
    this.moveTool = moveTool

    function moveTool() {
        // console.log(this.moveStage)
        switch (this.moveStage) {
            case 1: //user just selected tool
                this.changeTool('move');
                this.moveStage = 2;
                break;
            case 2: //user moused down at first postion
                //this.renderTools();
                this.moveToolSelectedPos = [this.mouseGridPos[0], this.mouseGridPos[1]];
                this.moveCoords[0] = this.mouseGridPos[0];
                this.moveCoords[1] = this.mouseGridPos[1];
                this.moveCoords[2] = this.mouseGridPos[0] + 1;
                this.moveCoords[3] = this.mouseGridPos[1] + 1;

                this.movePixelArray = this.getPixelsFromArray(this.moveCoords);
                // console.log(this.movePixelArray);
                // this.renderTools();
                this.pushPixelsToHistoryArray();
                this.erasePixel(this.mouseGridPos);
                break;
            case 3: //user releases the mouse
                this.drawPixel(this.mouseGridPos, this.movePixelArray[0][0][0], this.movePixelArray[0][0][1]);
                this.moveStage = 1;
                break;
            default:
                // console.log("Error: Marquee tool stage not recognised.");
        }
    }

    /*======================
        PEN LINE TOOL
      ======================*/
    this.penToolCoords = [0, 0, 0, 0];
    this.penToolStage = -1;
    this.penTool = penTool;

    function penTool() {
        switch (this.penToolStage) {
            case 1: //user moused down at first postion
                this.penToolCoords[0] = this.mouseGridPos[0];
                this.penToolCoords[1] = this.mouseGridPos[1];
                this.penToolCoords[2] = this.mouseGridPos[0];
                this.penToolCoords[3] = this.mouseGridPos[1];
                this.penToolStage = 2;
                break;
            case 2: //user is moving mouse to second position TODO CALL AT EACH GIRD PIXEL NOT EACH SCREEN PIXEL
                tempCoords = [this.penToolCoords[2], this.penToolCoords[3], this.mouseGridPos[0], this.mouseGridPos[1]];
                // this.renderLine('tool', -1, this.penToolCoords); //clear old pen (from tool canvas)
                this.penToolCoords[2] = this.mouseGridPos[0];
                this.penToolCoords[3] = this.mouseGridPos[1];
                this.renderLine('main', this.penColor, tempCoords); //draw new line (on main canvas)
                break;
            case 3: //user let go of mouse at second position
                // CLOSE LOOP?
                // tempCoords = [this.penToolCoords[2], this.penToolCoords[3], this.mouseGridPos[0], this.mouseGridPos[1]];
                // this.penToolCoords[2] = this.mouseGridPos[0];
                // this.penToolCoords[3] = this.mouseGridPos[1];
                this.drawPixel(this.mouseGridPos, this.penColor, this.symbol)
                // this.renderLine('main', this.penColor, tempCoords); //draw FINAL pen on main canvas
                this.penToolStage = -1;
                break;
            default:
                // console.log("Error: straight line tool stage not recognised.");
        }
    }
    /*======================
        ERASER TOOL
      ======================*/
    this.eraserToolCoords = [0, 0, 0, 0];
    this.eraserToolStage = -1;
    this.eraserTool = eraserTool;

    function eraserTool() {
        switch (this.eraserToolStage) {
            case 1: //user moused down at first postion
                this.eraserToolCoords[0] = this.mouseGridPos[0];
                this.eraserToolCoords[1] = this.mouseGridPos[1];
                this.eraserToolCoords[2] = this.mouseGridPos[0];
                this.eraserToolCoords[3] = this.mouseGridPos[1];
                this.eraserToolStage = 2;
                break;
            case 2: //user is moving mouse to second position TODO CALL AT EACH GIRD PIXEL NOT EACH SCREEN PIXEL
                tempCoords = [this.eraserToolCoords[2], this.eraserToolCoords[3], this.mouseGridPos[0], this.mouseGridPos[1]];
                this.eraserToolCoords[2] = this.mouseGridPos[0];
                this.eraserToolCoords[3] = this.mouseGridPos[1];
                this.renderLine('main', -1, tempCoords); //draw new line (on main canvas)
                break;
            case 3: //user let go of mouse at second position
                // CLOSE LOOP?
                // tempCoords = [this.eraserToolCoords[2], this.eraserToolCoords[3], this.mouseGridPos[0], this.mouseGridPos[1]];
                // this.eraserToolCoords[2] = this.mouseGridPos[0];
                // this.eraserToolCoords[3] = this.mouseGridPos[1];
                this.drawPixel(this.mouseGridPos, -1, '')
                this.eraserToolStage = -1;
                break;
            default:
                // console.log("Error: eraser tool stage not recognised.");
        }
    }

    /*======================
        STRAIGHT LINE TOOL
      ======================*/
    this.lineToolCoords = [0, 0, 0, 0];
    this.lineToolStage = -1;
    this.lineTool = lineTool;

    function lineTool() {
        switch (this.lineToolStage) {
            case 1: //user moused down at first postion
                this.lineToolCoords[0] = this.mouseGridPos[0];
                this.lineToolCoords[1] = this.mouseGridPos[1];
                this.lineToolStage = 2;
                break;
            case 2: //user is moving mouse to second position TODO CALL AT EACH GIRD PIXEL NOT EACH SCREEN PIXEL
                this.renderLine('tool', -1, this.lineToolCoords); //clear old line (from tool canvas)
                this.lineToolCoords[2] = this.mouseGridPos[0];
                this.lineToolCoords[3] = this.mouseGridPos[1];
                this.renderLine('tool', this.penColor, this.lineToolCoords); //draw new line (on tool canvas)
                break;
            case 3: //user let go of mouse at second position
                this.lineToolCoords[2] = this.mouseGridPos[0];
                this.lineToolCoords[3] = this.mouseGridPos[1];
                this.renderLine('main', this.penColor, this.lineToolCoords); //draw FINAL line on main canvas
                this.lineToolStage = -1;
                break;
            default:
                // console.log("Error: straight line tool stage not recognised.");
        }
    }

    this.renderLine = renderLine;

    function renderLine(canvas, color, coords) {
        //canvas == 'tool' or 'main'
        var x0 = coords[0];
        var y0 = coords[1];
        var x1 = coords[2];
        var y1 = coords[3];
        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var sx = x0 < x1 ? 1 : -1;
        var sy = y0 < y1 ? 1 : -1;
        var err = dx - dy;

        var ray = [];
        while (x0 != x1 || y0 != y1) {
            if (canvas == 'tool') this.renderToolPixel([x0, y0], color, undefined, this.symbol);
            else if (canvas == 'main') this.drawPixel([x0, y0], color, this.symbol);
            var e2 = 2 * err;
            if (e2 > -dy) {
                err = err - dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err = err + dx;
                y0 += sy;
            }
        }
    }

    /*======================
              UNDO
      ======================*/
    this.pushPixelsToHistoryArray = pushPixelsToHistoryArray;

    function pushPixelsToHistoryArray() {
        this.historyArray.push(JSON.stringify(this.pixelArray));
        if (this.historyArray.length > 50) this.historyArray.shift(); //max of 50 undo states so memory doesn't go through the roof
    }
    this.undo = undo;

    function undo() {
        // stop filling:
        this.cancelFill = true;
        if (this.historyArray.length >= 1) {
            this.pixelArray = JSON.parse(this.historyArray[this.historyArray.length - 1]);
            this.historyArray.pop();
            this.sendAllPixels();
            this.renderAll();
        }
    }


    /*======================
          RESIZE CANVAS
      ======================*/
    this.resizeCanvas = resizeCanvas;

    function resizeCanvas() {
        this.pixelSize = Math.floor(window.innerWidth / this.gridWidth);
        this.fontSize = this.pixelSize * 1.25;
        //main:
        this.canvas.width = $(this.canvas).width();
        this.canvas.height = $(this.canvas).height();
        //grid:
        this.gridCanvas.width = $(this.gridCanvas).width();
        this.gridCanvas.height = $(this.gridCanvas).height();
        //tools:
        this.toolCanvas.width = $(this.toolCanvas).width();
        this.toolCanvas.height = $(this.toolCanvas).height();

        this.cW = this.canvas.width;
        this.cH = this.canvas.height;

        this.ctx = setupCanvas(this.canvas);
        this.gridCtx = setupCanvas(this.gridCanvas);
        this.toolCtx = setupCanvas(this.toolCanvas);

        this.renderAll();
        this.renderGrid();
    }
    $(window).resize($.proxy(this.resizeCanvas, this));


    /*======================
              CURSOR
      ======================*/
    $('canvas').mousemove($.proxy(function(e) {
        //Update position:
        var oldX = this.mouseGridPos[0];
        var oldY = this.mouseGridPos[1];
        var x = e.pageX - $(this.canvas).offset().left;
        var y = e.pageY - $(this.canvas).offset().top;
        this.mouseGridPos[0] = Math.floor(x / this.pixelSize);
        this.mouseGridPos[1] = Math.floor(y / this.pixelSize);

        //Re-render cursor:
        if (this.mouseGridPos[0] !== oldX || this.mouseGridPos[1] !== oldY) {
            //Fill in last one with pixelArray color and render cursor in new pos
            this.renderToolPixel([oldX, oldY], -1, true, this.symbol);
            this.renderTools();
            this.renderCursor();
        }

        //change cursor for 'move' during marquee
        if (this.currentTool == 'marquee') {
            if (this.mouseGridPos[0] >= this.marqueeCoords[0] &&
                this.mouseGridPos[1] >= this.marqueeCoords[1] &&
                this.mouseGridPos[0] < this.marqueeCoords[2] &&
                this.mouseGridPos[1] < this.marqueeCoords[3] &&
                this.marqueeStage == 4 || this.marqueeStage == 6) {
                $('body').css('cursor', 'move');
            } else {
                $('body').css('cursor', 'auto');
            }
        } else if ($('body').css('cursor') !== 'auto') $('body').css('cursor', 'auto');

        //Apply tool:
        if (this.mouseIsDown) {
            if (this.mouseGridPos[0] !== oldX || this.mouseGridPos[1] !== oldY) { //only if actual grid pos has changed
                switch (this.currentTool) {
                    case 'pen':
                        this.penTool();
                        // this.drawPixel(this.mouseGridPos, this.penColor, this.symbol);
                        break;
                    case 'eyedropper':
                        this.penColor = this.getColorAtPos(this.mouseGridPos);
                        $('#color-picker')[0].color.fromString(this.penColor)
                        break;
                    case 'eraser':
                        this.eraserTool();
                        // this.erasePixel(this.mouseGridPos);
                        break;
                    case 'save':
                        if (this.saveStage == 3) this.saveImage();
                        break;
                    case 'marquee':
                        if (this.marqueeStage == 3) this.marqueeTool();
                        if (this.marqueeStage == 6) this.marqueeTool(); //##
                        break;
                    case 'box':
                        if (this.boxStage == 3) this.boxTool();
                        if (this.boxStage == 6) this.boxTool(); //##
                        break;
                    case 'bucket':
                        break;
                    case 'line':
                        this.lineTool();
                        break;
                    default:
                        // console.log("Error: No tool selected.");
                }
            }
        }

    }, this));
    $('canvas').mousedown($.proxy(function(e) {
        if (e.which == 1) {
            switch (this.currentTool) {
                case 'pen':
                    // this.pushPixelsToHistoryArray();
                    // this.drawPixel(this.mouseGridPos, this.penColor, this.symbol);
                    // break;
                    this.pushPixelsToHistoryArray();
                    this.penToolStage = 1;
                    this.penTool();
                    break;
                case 'eyedropper':
                    //todo: put these two lines onto 'change color' method
                    this.penColor = this.getColorAtPos(this.mouseGridPos);
                    $('#color-picker')[0].color.fromString(this.penColor);
                    break;
                case 'eraser':
                    this.pushPixelsToHistoryArray();
                    this.eraserToolStage = 1;
                    this.eraserTool();
                    break;
                case 'save':
                    this.saveStage = 2;
                    this.saveImage();
                    break;
                case 'marquee':
                    if (this.marqueeStage == 1) {
                        this.marqueeStage = 2;
                        this.marqueeTool();
                    } else if (this.marqueeStage == 4) {
                        this.marqueeStage = 5;
                        this.marqueeTool();
                    } //##i.e. they moused down after they have selected an area
                    else if (this.marqueeStage == 5) {
                        this.marqueeTool();
                    }
                    break;
                case 'box':
                    if (this.boxStage == 1) {
                        this.boxStage = 2;
                        this.boxTool();
                    } else if (this.boxStage == 4) {
                        this.boxStage = 5;
                        this.boxTool();
                    } //##i.e. they moused down after they have selected an area
                    else if (this.boxStage == 5) {
                        this.boxTool();
                    }
                    break;
                case 'move':
                    if (this.moveStage == 1) {
                        this.moveStage = 2;
                        this.moveTool();
                    }
                    break;
                case 'bucket':
                    this.pushPixelsToHistoryArray();
                    this.bucketFill(this.mouseGridPos, this.getColorAtPos(this.mouseGridPos), this.penColor, this.getSymbolAtPos(this.mouseGridPos));
                    break;
                case 'line':
                    this.pushPixelsToHistoryArray();
                    this.lineToolStage = 1;
                    this.lineTool();
                    break;
                default:
                    console.log("Error: No tool selected.");
            }

            this.mouseIsDown = true;
        } else if (e.which == 3) {
            //todo: put these two lines onto 'change color' method
            this.penColor = this.getColorAtPos(this.mouseGridPos);
            this.symbol = this.getSymbolAtPos(this.mouseGridPos)
            $('#color-picker')[0].color.fromString(this.penColor);
            $('#symbol-picker').val(this.symbol);
        }
    }, this));
    $('canvas').mouseup($.proxy(function(e) {
        this.mouseIsDown = false;
        if (this.currentTool == 'save') {
            if (this.saveStage == 3) {
                this.saveStage = 4;
                this.saveImage();
            }
        } else if (this.currentTool == 'marquee') {
            if (this.marqueeStage == 3) {
                this.marqueeStage = 4;
                this.marqueeTool();
            }
            if (this.marqueeStage == 6) {
                this.marqueeStage = 5;
            } //##
        } else if (this.currentTool == 'box') {
            if (this.boxStage == 3) {
                this.boxStage = 4;
                this.boxTool();
            }
            if (this.boxStage == 6) {
                this.boxStage = 5;
            } //##
        } else if (this.currentTool == 'move') {
            if (this.moveStage == 2) {
                this.moveStage = 3
                this.moveTool();
            }
        } else if (this.currentTool == 'line') {
            if (this.lineToolStage == 2) {
                this.lineToolStage = 3;
                this.lineTool();
            }
        } else if (this.currentTool == 'pen') {
            if (this.penToolStage == 2) {
                this.penToolStage = 3;
                this.penTool();
            }
        } else if (this.currentTool == 'eraser') {
            if (this.eraserToolStage == 2) {
                this.eraserToolStage = 3;
                this.eraserTool();
            }
        } else if (this.currentTool == 'eyedropper') {
            if (this.prevTool == 'bucket') this.changeTool('bucket');
            else this.changeTool('pen');
        }
    }, this));
    $('canvas').mouseout($.proxy(function(e) {
        //when the mouse leaves the screen, remove the cursor:

        // this.renderPixel(this.mouseGridPos, this.pixelArray[this.mouseGridPos[0]][this.mouseGridPos[1]])
    }, this));


    /*======================
           OTHER EVENTS
      ======================*/

    //INITIALISE
    $(document).ready($.proxy(
        function() {
            this.resizeCanvas();
            this.renderAll();
            this.renderGrid();
        }, this));

    $('canvas').mousedown(function(e) {
        e.preventDefault();
    });

    //disable context menu
    //$('body').on('contextmenu', 'canvas', function(e){ return false; });

    // //SHORTCUTS
    // $(document).keypress(function(e) {
    //     var c = String.fromCharCode(e.which).toLowerCase()
    //     switch (c) {
    //         case '=':
    //             editor.fontSize = editor.fontSize + 1;
    //             break;
    //         case '-':
    //             editor.fontSize = editor.fontSize - 1;
    //             break;
    //         default:
    //             break;
    //     }
    // });

    //Mouse leaves window
    $(window).mouseleave(function() {
        this.mouseIsDown = false;
    });

    /* CTRL+__ events */
    $(window).bind('keydown', $.proxy(function(event) {
        if (event.ctrlKey || event.metaKey) {
            if (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189') {
                event.preventDefault();
            } else {
                switch (String.fromCharCode(event.which).toLowerCase()) {
                    case 'z':
                        event.preventDefault();
                        this.undo();
                        break;
                    case 'c':
                        event.preventDefault();
                        if (this.marqueeStage == 4) {
                            this.getCopiedText();
                        }
                    case 'v':
                        event.preventDefault();
                        this.setCopiedText();
                        break;
                    default:
                        break;
                }
            }
        } else if(this.currentTool == 'move'){
            switch (event.which) {
                case 37: //left
                    // console.log('left');
                    if (this.moveToolSelectedPos[0] > 0 && (!(this.getCollisions().includes(this.getSymbolAtPos([this.moveToolSelectedPos[0] - 1, this.moveToolSelectedPos[1]]))) || this.getSymbolAtPos([this.moveToolSelectedPos[0] - 1, this.moveToolSelectedPos[1]]) == '')) {
                        this.drawPixel([this.moveToolSelectedPos[0] - 1, this.moveToolSelectedPos[1]],
                            this.getColorAtPos(this.moveToolSelectedPos), this.getSymbolAtPos(this.moveToolSelectedPos));
                        this.erasePixel(this.moveToolSelectedPos);
                        this.moveToolSelectedPos = [this.moveToolSelectedPos[0] - 1, this.moveToolSelectedPos[1]];
                    }
                    break;
                case 38: //up
                    // console.log('up');
                    if (this.moveToolSelectedPos[1] > 0 && (!(this.getCollisions().includes(this.getSymbolAtPos([this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] - 1]))) || this.getSymbolAtPos([this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] - 1]) == '')) {
                        this.drawPixel([this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] - 1],
                            this.getColorAtPos(this.moveToolSelectedPos), this.getSymbolAtPos(this.moveToolSelectedPos));
                        this.erasePixel(this.moveToolSelectedPos);
                        this.moveToolSelectedPos = [this.moveToolSelectedPos[0], this.moveToolSelectedPos[1]  - 1];
                    }
                    break;
                case 39: //right
                    // console.log('right');
                    if (this.moveToolSelectedPos[0] < this.pixelArray.length -1 && (!(this.getCollisions().includes(this.getSymbolAtPos([this.moveToolSelectedPos[0] + 1, this.moveToolSelectedPos[1]]))) || this.getSymbolAtPos([this.moveToolSelectedPos[0] + 1, this.moveToolSelectedPos[1]]) == '')) {
                        this.drawPixel([this.moveToolSelectedPos[0] + 1, this.moveToolSelectedPos[1]],
                            this.getColorAtPos(this.moveToolSelectedPos), this.getSymbolAtPos(this.moveToolSelectedPos),);
                        this.erasePixel(this.moveToolSelectedPos);
                        this.moveToolSelectedPos = [this.moveToolSelectedPos[0] + 1, this.moveToolSelectedPos[1]];
                    }
                    break;
                case 40: //down
                    // console.log('down');
                    if (this.moveToolSelectedPos[1] < this.pixelArray[0].length -1 && (!(this.getCollisions().includes(this.getSymbolAtPos([this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] + 1]))) || this.getSymbolAtPos([this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] + 1]) == '')) {
                        this.drawPixel([this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] + 1],
                            this.getColorAtPos(this.moveToolSelectedPos), this.getSymbolAtPos(this.moveToolSelectedPos),);
                        this.erasePixel(this.moveToolSelectedPos);
                        this.moveToolSelectedPos = [this.moveToolSelectedPos[0], this.moveToolSelectedPos[1] + 1];
                    }
                    break;
                default:
                    break;
            }
        }
    }, this));

    //SCROLLWHEEL STUFF
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    }, false );

    //ENTER/DELETE PRESSED
    $(document).bind('keydown', $.proxy(function(e) {
        if (e.keyCode == 13) {
            if (this.currentTool == 'marquee' && this.marqueeStage == 5) {
                this.marqueeStage = 8;
                this.marqueeTool();
            }
        }
        if (e.keyCode == 8 || e.keyCode == 46) {
            if (this.currentTool == 'marquee' && this.marqueeStage == 4) {
                this.marqueeStage = 7;
                this.marqueeTool();
            }
        }
    }, this));

    //Hide color picker
    $('canvas').mousedown(function() {
        $('#color-picker')[0].color.hidePicker()
        $('#color-picker').blur();
    });

    //Color change
    $('#color-picker').change($.proxy(function() {
        this.penColor = $('#color-picker').val();
        if (this.currentTool == 'eraser') this.changeTool('pen');
    }, this));

    //Clear canvas:
    $('.menu-bar .clearcanvas-button').click($.proxy(function() {
        if (confirm('Warning: Are you sure you want to clear the all pixels?')) {
            this.clearAllPixels();
        }
    }, this));

    $('.menu-bar .random-fill-button').click($.proxy(function() {
        this.randomFill();
    }, this));
    $('.menu-bar .dungeon-fill-button').click($.proxy(function() {
        this.dungeonFill();
    }, this));
    $('.menu-bar .cell-fill-button').click($.proxy(function () {
        this.cellFill();
    }, this));

    //Toggle grid
    $('.menu-bar .grid-button').click($.proxy(function() {
        this.toggleGrid();
    }, this))

    //Save:
    $('.menu-bar .save-button').click($.proxy(function() {
        if (confirm("First click 'okay' on this pop-up, then click and drag to save a section of the canvas.")) {
            this.saveStage = 1;
            this.saveImage();
        }
    }, this));

    //Undo
    $('.menu-bar .undo-button').click($.proxy(function() {
        this.undo();
    }, this));

    //Disable drag menu icon:
    $('img.icon').on('dragstart', function(event) {
        event.preventDefault();
    });

    //Disable context menu on canvs:
    $('body').on('contextmenu', 'canvas', function(e) {
        return false;
    });
    this.menuUp = false;
    this.toggleMenu = toggleMenu;

    function toggleMenu() {
        // console.log('toggleMenu()');
        if (this.menuUp) {
            $('.menu-bar-outer').css('height', 'auto');
            $('.menu-bar-outer').css('overflow', 'visible');
            $('.fa-caret-square-down').removeClass('fa-caret-square-down').addClass('fa-caret-square-up');
            this.menuUp = false;
        } else {
            $('.menu-bar-outer').height(50);
            $('.menu-bar-outer').css('overflow', 'hidden');
            $('.fa-caret-square-up').removeClass('fa-caret-square-up').addClass('fa-caret-square-down');
            this.menuUp = true;
        }

        // $('.menu-bar .menu-toggle-button').toggleClass('');
    }

    /*======================
           Marquee tool
      ======================*/
    this.marqueeOrigMouseGridPos; //when the user clicks the marquee to move it
    //this.marqueePos;//for when the user moves the marquee
    this.origMarqueeCoords;
    this.marqueeTool = marqueeTool;


    function marqueeTool() {
        // console.log(this.marqueeStage)
        switch (this.marqueeStage) {
            case 1: //user just selected tool
                this.changeTool('marquee');
                this.marqueeStage = 2;
                break;
            case 2: //user moused down at first postion
                //this.renderTools();
                this.origMouseGridPos = [this.mouseGridPos[0], this.mouseGridPos[1]];

                this.marqueeCoords[0] = this.mouseGridPos[0];
                this.marqueeCoords[1] = this.mouseGridPos[1];
                this.marqueeCoords[2] = this.mouseGridPos[0] + 1;
                this.marqueeCoords[3] = this.mouseGridPos[1] + 1;

                this.renderTools();
                this.marqueeStage = 3;
                break;
            case 3: //user is moving mouse to second position
                if (this.mouseGridPos[0] >= this.marqueeCoords[0]) {
                    this.marqueeCoords[2] = this.mouseGridPos[0] + 1;
                } else {
                    this.marqueeCoords[2] = this.mouseGridPos[0];
                    this.marqueeCoords[0] = this.origMouseGridPos[0] + 1;
                }
                if (this.mouseGridPos[1] >= this.marqueeCoords[1]) {
                    this.marqueeCoords[3] = this.mouseGridPos[1] + 1;
                } else {
                    this.marqueeCoords[3] = this.mouseGridPos[1];
                    this.marqueeCoords[1] = this.origMouseGridPos[1] + 1;
                }

                this.renderTools();
                break;
            case 4: //user let go of mouse at second position
                if (this.mouseGridPos[0] >= this.marqueeCoords[0]) {
                    this.marqueeCoords[2] = this.mouseGridPos[0] + 1;
                } else {
                    this.marqueeCoords[2] = this.mouseGridPos[0];
                    this.marqueeCoords[0] = this.origMouseGridPos[0] + 1;
                }
                if (this.mouseGridPos[1] >= this.marqueeCoords[1]) {
                    this.marqueeCoords[3] = this.mouseGridPos[1] + 1;
                } else {
                    this.marqueeCoords[3] = this.mouseGridPos[1];
                    this.marqueeCoords[1] = this.origMouseGridPos[1] + 1;
                }

                this.origMouseGridPos = [0, 0];

                //now we must get the top right corner as x1,y1 and bottom left: x2,y2:
                var tempCoords = this.marqueeCoords.slice(0);
                if (tempCoords[0] > tempCoords[2]) {
                    this.marqueeCoords[0] = tempCoords[2];
                    this.marqueeCoords[2] = tempCoords[0];
                }
                if (tempCoords[1] > tempCoords[3]) {
                    this.marqueeCoords[1] = tempCoords[3];
                    this.marqueeCoords[3] = tempCoords[1];
                }

                this.marqueePixelArray = this.getPixelsFromArray(this.marqueeCoords);
                this.renderTools();
                break;
            case 5: //user clicks somewhere (maybe not in marquee area)
                if (this.mouseGridPos[0] >= this.marqueeCoords[0] &&
                    this.mouseGridPos[1] >= this.marqueeCoords[1] &&
                    this.mouseGridPos[0] < this.marqueeCoords[2] &&
                    this.mouseGridPos[1] < this.marqueeCoords[3]) {
                    this.marqueeOrigMouseGridPos = this.mouseGridPos.slice(0);
                    this.origMarqueeCoords = this.marqueeCoords.slice(0);
                    this.marqueeStage = 6;
                } else {
                    this.marqueeStage = 8;
                    this.marqueeTool();
                }
                break;
            case 6: //mouse moving after clicking area
                this.marqueeCoords[0] = this.origMarqueeCoords[0] + (this.mouseGridPos[0] - this.marqueeOrigMouseGridPos[0]);
                this.marqueeCoords[1] = this.origMarqueeCoords[1] + (this.mouseGridPos[1] - this.marqueeOrigMouseGridPos[1]);
                this.marqueeCoords[2] = this.origMarqueeCoords[2] + (this.mouseGridPos[0] - this.marqueeOrigMouseGridPos[0]);
                this.marqueeCoords[3] = this.origMarqueeCoords[3] + (this.mouseGridPos[1] - this.marqueeOrigMouseGridPos[1]);
                this.renderTools();
                break;
            case 7: //user presses del/backspace key after making selection
                this.pushPixelsToHistoryArray();
                for (var x = this.marqueeCoords[0]; x >= this.marqueeCoords[0] && x < this.marqueeCoords[2]; x++) {
                    for (var y = this.marqueeCoords[1]; y >= this.marqueeCoords[1] && y < this.marqueeCoords[3]; y++) {
                        if (x < this.pixelArray.length && y < this.pixelArray[0].length &&
                            x >= 0 && y >= 0)
                            this.pixelArray[x][y] = [this.backgroundColor, ''];
                            this.sendPixel([x, y]);
                    }
                }
                this.renderPixelArray();
                this.renderTools();
                this.marqueeStage = 1;
                break;
            case 8: //they pressed enter - so paste the pixels to the pixelArray
                this.pushPixelsToHistoryArray();
                for (var x = 0; x < this.marqueePixelArray.length; x++) {
                    for (var y = 0; y < this.marqueePixelArray[0].length; y++) {
                        if (x + this.marqueeCoords[0] < this.pixelArray.length && y + this.marqueeCoords[1] < this.pixelArray[0].length &&
                            x + this.marqueeCoords[0] >= 0 && y + this.marqueeCoords[1] >= 0) {
                            //if marquee pixel not transparent, then replace pixelarray color with marqueearray color:
                            if (this.marqueePixelArray[x][y] !== this.backgroundColor) {
                                this.pixelArray[x + this.marqueeCoords[0]][y + this.marqueeCoords[1]] = this.marqueePixelArray[x][y];
                            }
                        }
                    }
                }
                this.sendAllPixels();
                this.renderPixelArray();
                this.renderTools();
                this.marqueeStage = 1;
                break;
            default:
                console.log("Error: Marquee tool stage not recognised.");
        }
    }

    this.boxTool = boxTool;

    function boxTool() {
        //

        // console.log(this.boxStage)
        switch (this.boxStage) {
            case 1: //user just selected tool
                this.changeTool('box');
                this.boxStage = 2;
                break;
            case 2: //user moused down at first postion
                //this.renderTools();
                this.origMouseGridPos = [this.mouseGridPos[0], this.mouseGridPos[1]];

                this.boxCoords[0] = this.mouseGridPos[0];
                this.boxCoords[1] = this.mouseGridPos[1];
                this.boxCoords[2] = this.mouseGridPos[0] + 1;
                this.boxCoords[3] = this.mouseGridPos[1] + 1;

                this.renderTools();
                this.boxStage = 3;
                break;
            case 3: //user is moving mouse to second position
                if (this.mouseGridPos[0] >= this.boxCoords[0]) {
                    this.boxCoords[2] = this.mouseGridPos[0] + 1;
                } else {
                    this.boxCoords[2] = this.mouseGridPos[0];
                    this.boxCoords[0] = this.origMouseGridPos[0] + 1;
                }
                if (this.mouseGridPos[1] >= this.boxCoords[1]) {
                    this.boxCoords[3] = this.mouseGridPos[1] + 1;
                } else {
                    this.boxCoords[3] = this.mouseGridPos[1];
                    this.boxCoords[1] = this.origMouseGridPos[1] + 1;
                }

                this.renderTools();
                break;
            case 4: //user let go of mouse at second position
                if (this.mouseGridPos[0] >= this.boxCoords[0]) {
                    this.boxCoords[2] = this.mouseGridPos[0] + 1;
                } else {
                    this.boxCoords[2] = this.mouseGridPos[0];
                    this.boxCoords[0] = this.origMouseGridPos[0] + 1;
                }
                if (this.mouseGridPos[1] >= this.boxCoords[1]) {
                    this.boxCoords[3] = this.mouseGridPos[1] + 1;
                } else {
                    this.boxCoords[3] = this.mouseGridPos[1];
                    this.boxCoords[1] = this.origMouseGridPos[1] + 1;
                }

                this.origMouseGridPos = [0, 0];
                //now we must get the top right corner as x1,y1 and bottom left: x2,y2:
                var tempCoords = this.boxCoords.slice(0);
                if (tempCoords[0] > tempCoords[2]) {
                    this.boxCoords[0] = tempCoords[2];
                    this.boxCoords[2] = tempCoords[0];
                }
                if (tempCoords[1] > tempCoords[3]) {
                    this.boxCoords[1] = tempCoords[3];
                    this.boxCoords[3] = tempCoords[1];
                }

                this.boxPixelArray = this.getPixelsFromArray(this.boxCoords);
                this.renderLine('main', this.penColor, [this.boxCoords[0], this.boxCoords[1], this.boxCoords[0], this.boxCoords[3]]);
                this.renderLine('main', this.penColor, [this.boxCoords[2]-1, this.boxCoords[1], this.boxCoords[2]-1, this.boxCoords[3]]);
                this.renderLine('main', this.penColor, [this.boxCoords[0], this.boxCoords[1], this.boxCoords[2], this.boxCoords[1]]);
                this.renderLine('main', this.penColor, [this.boxCoords[0], this.boxCoords[3]-1, this.boxCoords[2], this.boxCoords[3]-1]);
                this.boxStage = 1;
                this.renderTools();
                break;
        }

    }
    this.symbolTool = symbolTool;
    function symbolTool(event) {
        $('#symbol-picker').val(String.fromCharCode(event.which));
    }

    this.setCopiedText = setCopiedText;

    async function setCopiedText() {

        function transpose(matrix) {
            const rows = matrix.length, cols = matrix[0].length;
            const grid = [];
            for (let j = 0; j < cols; j++) {
              grid[j] = Array(rows);
            }
            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < cols; j++) {
                grid[j][i] = matrix[i][j];
              }
            }
            return grid;
        }

        try {
            var tempArray = [];
            const text = await navigator.clipboard.readText();
            // console.log(text);
            // console.log(text.split('\t'))
            rows = text.split(/\r?\n/);
            for (var i = 0; i < rows.length; i++) {
                tempArray.push([]);
                cells = rows[i].split('\t')
                for (var j = 0; j < cells.length; j++) {
                    tempArray[tempArray.length - 1].push([this.penColor, cells[j]]);
                }
            }

            this.changeTool('marquee');
            // tempArray[0].map((col, i) => tempArray.map(row => row[i]));
            this.marqueePixelArray = transpose(tempArray);
            this.marqueeCoords = [this.mouseGridPos[0], this.mouseGridPos[1], this.mouseGridPos[0] + tempArray.length, this.mouseGridPos[1] + tempArray[0].length];
            this.marqueeStage = 4;
            console.log(tempArray);
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    }

    this.getCopiedText = getCopiedText;
    function getCopiedText() {
        var clip = "";
        for (var j = 0; j < this.marqueePixelArray[0].length; j++) {
            for (var i = 0; i < this.marqueePixelArray.length; i++) {
                if (i != 0) {
                    clip += "\t"
                }
                // console.log(this.marqueePixelArray[i][j][1])
                clip += this.marqueePixelArray[i][j][1];
            }
            clip += "\n"
        }
        navigator.clipboard.writeText(clip);
    }
    /* ===================================================
    					SAVE AND LOAD
    ====================================================== */
    this.saveToLocalStorage = saveToLocalStorage;

    function saveToLocalStorage() {
        // console.log('save')
        localStorage["pixelArray"] = JSON.stringify(this.pixelArray);
    }
    this.loadFromLocalStorage = loadFromLocalStorage;

    function loadFromLocalStorage() {
        var localArray = JSON.parse(localStorage["pixelArray"]);
        for (var i = 0; i < this.pixelArray.length; i++) {
            for (var j = 0; j < this.pixelArray[i].length; j++) {
                ref = firebase.database().ref('maps/' + this.urlKey + "/" + i + "/" + j);
                ref.on('value', function (snapshot) {
                    if (true) {
                        if (snapshot.val() != null) {
                            // console.log(Number(snapshot.ref.parent.key) + " " + Number(snapshot.key) + " " + snapshot.val()['0'] + " " + snapshot.val()['1'])
                            editor.pixelArray[Number(snapshot.ref.parent.key)][Number(snapshot.key)] = [snapshot.val()['0'], snapshot.val()['1']];
                            // editor.pixelArray[i][j] = [snapshot.val()['0'], snapshot.val()['1']]
                            // editor.drawPixel([i, j], snapshot.val()['0'], snapshot.val()['1']);
                        };
                    };
                });
                if (localArray[i][j]) {
                    this.pixelArray[i][j] = localArray[i][j];
                }
            }
        }
        // this.pixelArray = ;
        this.renderAll();
    }
    //Save every 30 seconds
    $(document).ready($.proxy(function() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDXisJDCGBWCMk58n0CC3upa0xAyXeiknM",
            authDomain: "terminal-b1033.firebaseapp.com",
            databaseURL: "https://terminal-b1033.firebaseio.com",
            projectId: "terminal-b1033",
            storageBucket: "terminal-b1033.appspot.com",
            messagingSenderId: "705305494904",
            appId: "1:705305494904:web:1ac9f9db1472cb82a2748d",
            measurementId: "G-5Q9MSLZETV"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // this.urlKey = urlParams.get('key');

        // if (this.urlKey === null) {
        //     this.urlKey = firebase.database().ref().child('maps').push().key;
        //     urlParams.set('key', this.urlKey);
        //     window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
        //     this.sendAllPixels();
        // } else {
        //     console.log(this.urlKey)
        // }
        var saveInterval = setInterval($.proxy(function() {
            // var localArray = JSON.parse(localStorage["pixelArray"]);
            // for (var i = 0; i < this.pixelArray.length; i++) {
            //     for (var j = 0; j < this.pixelArray[i].length; j++) {
            //         if (this.pixelArray[i][j][0] != localArray[i][j][0] || this.pixelArray[i][j][1] != localArray[i][j][1]) {
            //             // console.log("UPDATING " + i + ", " + j +": FROM " + localArray[i][j] + " TO " + this.pixelArray[i][j])
            //         }
            //     }
            // }
            this.saveToLocalStorage();
        }, this), 1000 * 10); //save every 10 seconds

        var renderInterval = setInterval($.proxy(function() {
            this.renderPixelArray();
            this.symbol = $('#symbol-picker').val();
            $('#symbol-picker').css("text-shadow", '0 0 0 #' + this.penColor);
        }, this), 1000); //save every 5 seconds

        // initial load
        if (localStorage["pixelArray"] && localStorage["pixelArray"] !== "" && typeof localStorage["pixelArray"] !== 'undefined' && localStorage["pixelArray"] !== "undefined" && localStorage["pixelArray"]) {
            if (!this.loading_offshoot) {
                this.loadFromLocalStorage();
                // console.log('load')
            } else {
                //(warning to user about overwiriting their localstorage is on index.php where the offshoot pixels get loaded in)
            }
        }
    }, this));
}

var editor = new Editor(
    $('canvas.main')[0],
    $('canvas.grid')[0],
    $('canvas.tools')[0]
);