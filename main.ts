namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
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
    `, SpriteKind.NPC)
tiles.placeOnTile(First_guy, tiles.getTileLocation(63, 63))
controller.moveSprite(epicGuy)
scene.cameraFollowSprite(epicGuy)
info.setLife(6)
let invincibility = 0
let megaBoss = sprites.create(assets.image`bigTroll`, SpriteKind.Enemy)
tiles.placeOnTile(megaBoss, tiles.getTileLocation(33, 4))
forever(function () {
    pause(20000)
    goblin = sprites.createProjectileFromSide(assets.image`Goblin`, 75, 75)
    tiles.placeOnTile(goblin, tiles.getTileLocation(randint(0, 63), randint(0, 63)))
    goblin.follow(epicGuy)
})
