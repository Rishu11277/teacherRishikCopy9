

function preload() {
    playerImg = loadAnimation("Runner-1.png", "Runner-2.png")
    roadImg = loadImage("Road.png")
    bulletImg = loadImage("bullet.png")
    standingImg = loadImage("Runner-1.png")
    techImg2 = loadImage("tech2.png")
    coinImg = loadImage("bitcoin.png")
    startImg = loadImage("start.png")
    coinSound = loadSound("coin.mp3")
    techSound = loadSound("tech.mp3")
    min1Sound = loadSound("win.mp3")
    bulletSound = loadSound("bullet.mp3")
    loseSound = loadSound("lose.wav")
    restartImg = loadImage("restart.png")

}


function setup() {
    createCanvas(windowWidth, windowHeight)

    


    techGroup = createGroup()

    road = createSprite(width / 2, height / 2)
    road.addImage("ground", roadImg)

    start = createImg("start.png")
    start.position(width / 2 - 100, height / 2.5)
    start.size(200, 200)
    start.mouseClicked(play)


    human = createSprite(width / 2, 638)
    human.addAnimation("standing", standingImg)
    human.addAnimation("running", playerImg)
    human.scale = 0.1

    coinGroup = createGroup()

    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0



    bulletGroup = createGroup()

    score = 5
    gameState = "Serve" 
    equipment = 0
    amounts = 0

    minutesBest = 0
    hoursBest = 0
    milliBest = 0
    secondsBest = 0



    time = [milliseconds, seconds, minutes, hours]
    timeBest = [milliBest, secondsBest, hoursBest, minutesBest]

}

function draw() {
    background("white")
    console.log(gameState)
    road.visible = true
    gamestate(gameState)
    drawSprites()
    if (gameState ==  "Play") {
        fill("white")
        textFont("Monospace")
        textSize(20)
            
        text("Lives: " + score, 20, 20)
        text("Tech: " + equipment, 20, 40)
        text("Coins: " + amounts, 20, 60)
        text(str(hours) + ":" + str(minutes) + ":" + str(seconds), 20, 100)
    }

    if (gameState == "Over") {
        restart = createImg("restart.png")
        restart.position(width / 2 - 200, height / 2 - 100)
        restart.size(200, 200)
        restart.mousePressed(reset)

    }
    

    
}

