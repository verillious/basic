function hexEditor() {
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

    var self = this;
    this.database = [];

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.charKey = urlParams.get('key');
    this.fontSize = 18;
    this.hexSize = 20;
    this.draw = SVG().addTo('#body').size('100%', '100%');
    this.Hex = Honeycomb.extendHex({ size: this.hexSize });
    this.Grid = Honeycomb.defineGrid(this.Hex);

    this.renderAll = renderAll;
    function renderAll(){
        this.draw.clear();
        for(i=0;i< this.grid.length;i++){
            this.grid[i].text = this.database[i].text;
            this.grid[i].color = this.database[i].color;
            this.grid[i].selected = this.database[i].selected;
            this.grid[i].render();
        }
        for(i=0;i< this.grid.length;i++){
            if(this.database[i].selected){
                this.grid[i].renderHighlighted(this.draw);
            }
        }
    }
    this.addHooks = addHooks;
    function addHooks(){
        // console.log(self.database.length);
        // console.log(self.grid.length);
        for (i = 0; i < this.grid.length; i++) {
            ref = firebase.database().ref('hexes/' + this.charKey + "/" + i);
            // console.log(ref)
            ref.on('value', function (snapshot) {
                // console.log('change')
                // console.log(snapshot.val())
                // console.log(self.database[i])
                self.database[i] = snapshot.val();
                // console.log(self.database[i]
            });
        }
    }

    this.clear = clear;
    function clear(){
        for(i=0;i<this.database.length;i++){
            this.database[i].text = '';
            this.database[i].color = '0000';
            this.database[i].selected = false;
        }
        this.storeDatabase();
        this.renderAll();
    }
    this.setUp = setUp;
    function setUp(){
        this.Hex = Honeycomb.extendHex({
            size: Math.min($(window).width() / 35, $(window).height() / 35),
            orientation: 'flat',
            origin: {x:-1 * ($(window).width()/2 - self.hexSize), y: -1 * ($(window).height()/2 - self.hexSize)},
            text: '',
            color: '',
            render() {
                const position = this.toPoint()
                // draw the hex
                // console.log(this.corners().map(({ x, y }) => `${x},${y}`));
                self.draw
                    .polygon(this.corners().map(({ x, y }) => `${x},${y}`))
                    .fill('none')
                    .stroke({ width: 2, color: '#26754e'})
                    .translate(position.x, position.y)
            },
            renderHighlighted() {
                const position = this.toPoint()
                const centerPosition = this.center().add(position)
                // this.draw = draw
                // draw the hex
                // console.log(this.corners().map(({ x, y }) => `${x},${y}`));
                self.draw
                    .polygon(this.corners().map(({ x, y }) => `${x},${y}`))
                    .fill('none')
                    .stroke({ width: 3, color: this.color})
                    .translate(position.x, position.y)
                self.draw
                    .text(this.text)
                    .font({
                        size: self.fontSize,
                        anchor: 'middle',
                        leading: 1.4,
                        fill: this.color
                    })
                    .translate(centerPosition.x, centerPosition.y - self.fontSize)
            },
            highlight() {
                console.log('highlight()')
                const position = this.toPoint()
                const centerPosition = this.center().add(position)
                poly = self.draw.polygon(this.corners().map(({ x, y }) => `${x},${y}`))
                .stroke({ width: 3, color: '#26754e' })
                .fill({ opacity: 1, color: '#26754e' })
                .translate(position.x, position.y)
                .animate(1000).fill({ opacity: 0, color: this.color }).stroke({ width: 3, color: self.color });
                // draw content
                self.draw
                    .text(this.text)
                    .font({
                        size: self.fontSize,
                        anchor: 'middle',
                        leading: 1.4,
                        fill: self.color
                    })
                    .translate(centerPosition.x, centerPosition.y - self.fontSize)
            }
        })

        this.Grid = Honeycomb.defineGrid(this.Hex)
        this.grid = this.Grid.hexagon({
            radius: 8,
            center: [0, 0],
            onCreate(hex){
                var hex_text = '#';
                var hex_color = '#14fdce'
                hex.text = hex_text;
                hex.color = '#14fdce';

            }
        })
        return this.grid;
    }
    this.current_color = '#14fdce';
    this.current_text = "#";
    this.grid = this.setUp();

    document.addEventListener('click', function(e){
        const hexCoordinates = self.Grid.pointToHex([e.offsetX, e.offsetY])
        const hex = self.grid.get(hexCoordinates)
        if (hex) {
            self.database[self.grid.indexOf(hex)].text = self.current_text;
            self.database[self.grid.indexOf(hex)].color = self.current_color;
            self.database[self.grid.indexOf(hex)].selected = true;
            self.storeCellDatabase(self.grid.indexOf(hex))
            // hex.highlight();
            self.renderAll();
        }
    });

    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
        const hexCoordinates = this.Grid.pointToHex([e.offsetX, e.offsetY])
        const hex = this.grid.get(hexCoordinates)
        if (hex) {
            this.current_color = this.database[this.grid.indexOf(hex)].color;
            this.current_text = this.database[this.grid.indexOf(hex)].text;
            // this.database[grid.indexOf(hex)].selected = false;
            // storeCellDatabase(grid.indexOf(hex));
            // render();
        }
    });

    var rtime;
    var timeout = false;
    var delta = 100;
    this.resizeend = resizeend;
    function resizeend() {
        console.log('resizeend')
        if (new Date() - rtime < delta) {
            setTimeout(self.resizeend, delta);
        } else {
            timeout = false;
            self.draw.clear();
            self.grid = self.setUp();
            self.renderAll();
        }
    }

    $(window).resize(function () {
        console.log('resize')
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(self.resizeend, delta);
        }
    });



    $('#color-picker').change($.proxy(function() {
        this.current_color = `#${$('#color-picker').val()}`
    }, this));
    $('.menu-bar .clear-button').click($.proxy(function() {
        this.clear();
    }, this));
    this.changeSymbol = changeSymbol;
    function changeSymbol(event){
        this.current_text = String.fromCharCode(event.which);
        $('#symbol-picker').val(String.fromCharCode(event.which));
    }
    this.storeDatabase = storeDatabase;
    function storeDatabase() {
        var updates = {};
        updates['/hexes/' + charKey] = this.database;
        return firebase.database().ref().update(updates);
    }
    this.storeCellDatabase = storeCellDatabase;
    function storeCellDatabase(i) {
        var updates = {};
        updates['/hexes/' + this.charKey +'/'+ i] = this.database[i];
        return firebase.database().ref().update(updates);
    }

    this.loadDatabase = loadDatabase;
    function loadDatabase(){
        firebase.database().ref('/hexes/' + this.charKey).once('value').then(function(snapshot) {
            val = snapshot.val();
            self.database = val;
            console.log(self.database)
            self.renderAll();
        });
    }


    if (this.charKey === null) {
        this.charKey = firebase.database().ref().child('characters').push().key;
        urlParams.set('key', charKey);
        window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
        this.storeDatabase();
        this.renderAll();
    } else {
        this.loadDatabase();
        this.addHooks();
        // console.log(this.database);
    };
    var renderInterval = setInterval($.proxy(function() {
        this.renderAll();
    }, this), 1000); //save every 5 seconds

}

var hexEditor = new hexEditor();