scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`myTile2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cactus`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile6`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
})
let goblin: Sprite = null
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
let invincibility = 0
forever(function () {
    let mySprite: Sprite = null
    pause(20000)
    goblin = sprites.createProjectileFromSide(assets.image`Goblin`, 50, 50)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
})
