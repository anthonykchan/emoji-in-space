controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f 4 2 4 2 5 4 5 4 f f . . 
        2 4 f 2 4 2 4 2 5 4 5 4 5 4 f . 
        . . . f 4 2 4 2 5 4 5 4 5 4 5 f 
        2 4 f 2 4 2 4 2 5 4 5 4 5 4 5 f 
        . . . f 4 2 4 2 5 4 5 4 5 4 5 f 
        2 4 f 2 4 2 4 2 5 4 5 4 5 4 f . 
        . . . f 4 2 4 2 5 4 5 4 f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceship, 200, 0)
})
function start () {
    spaceship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 f f f 5 5 f f . 
        . f 5 5 5 5 5 5 f 1 f 5 5 5 f . 
        . f 5 5 5 5 5 5 f f f 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 f f f . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    spaceship.setFlag(SpriteFlag.StayInScreen, true)
    info.setLife(3)
    controller.moveSprite(spaceship, 200, 200)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let spaceship: Sprite = null
let dart: Sprite = null
game.splash("Level 1", "Score 10 to move on")
timer.background(function () {
	
})
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . f f 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 2 2 2 2 2 2 2 2 f . . 
        . f f 2 f f f 2 2 2 2 2 2 f f . 
        . f 2 2 f 1 f 2 2 2 2 2 2 2 f . 
        . f 2 2 f f f 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 f f f f f 2 2 2 2 f . 
        . f f 2 2 2 2 2 2 2 2 2 2 f f . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . . f f 2 2 2 2 2 f f f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
