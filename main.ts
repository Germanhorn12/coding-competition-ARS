scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level1`)
let epicGuy = sprites.create(img`
    . . f f f f f f f f f f f . . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f 1 f . . . 
    . . f f f f f f f f 1 1 f . . . 
    . . f f f f f f f f f f f . . . 
    . . . f f f f f f f f f 1 . . . 
    . . f f f 2 2 2 2 2 f f f . . . 
    . . f 2 f 2 2 2 2 2 f 2 f . . . 
    . . f 2 f 2 2 2 2 2 f 2 f . . . 
    . . f f f 2 2 2 2 2 f f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f 2 f . f 2 f . . . . . 
    . . . . f 2 f . f 2 f . . . . . 
    . . . . f 2 f . f 2 f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(epicGuy)
scene.cameraFollowSprite(epicGuy)
