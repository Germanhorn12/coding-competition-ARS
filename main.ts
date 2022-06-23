scene.onOverlapTile(SpriteKind.Player, assets.tile`cactus`, function (sprite, location) {
    if (invincibility == 0) {
        info.changeLifeBy(-1)
        invincibility = 1
    }
})
let invincibility = 0
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
let First_guy = sprites.create(img`
    . . f f f f f f f f f f f . . . 
    . . f 6 6 6 6 6 6 6 6 6 6 f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f 1 f . . . 
    . . f f f f f f f f 1 1 f . . . 
    . . f f f f f f f f f f f . . . 
    . . . f f f f f f f f f 1 . . . 
    . . f f f 6 6 6 6 6 f f f . . . 
    . . f 6 f 6 6 6 6 6 f 6 f . . . 
    . . f 6 f 6 6 6 6 6 f 6 f . . . 
    . . f f f 6 6 6 6 6 f f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f 6 f . f 6 f . . . . . 
    . . . . f 6 f . f 6 f . . . . . 
    . . . . f 6 f . f 6 f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(First_guy, tiles.getTileLocation(63, 63))
controller.moveSprite(epicGuy)
scene.cameraFollowSprite(epicGuy)
info.setLife(6)
invincibility = 0
forever(function () {
    if (invincibility == 1) {
        pause(1000)
        invincibility = 0
    }
})
