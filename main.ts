namespace SpriteKind {
    export const FastEnemy = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FastEnemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FastEnemy, function (sprite, otherSprite) {
    music.powerDown.play()
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy(effects.hearts, 500)
    info.changeLifeBy(1)
})
function start () {
    spaceship = sprites.create(img`
        . . f f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 5 f f f 5 5 f f 
        f 5 5 5 5 5 5 f 1 f 5 5 5 f 
        f 5 5 5 5 5 5 f f f 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 f f f 
        . . f f f f f f f f f f . . 
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
    music.powerDown.play()
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let Speed_Sprite: Sprite = null
let Life: Sprite = null
let spaceship: Sprite = null
let dart: Sprite = null
let levelcount = 1
start()
game.splash("Level 1", "Score 10 to move on")
timer.background(function () {
    while (info.score() < 10) {
        pause(100)
    }
    if (info.score() == 10) {
        info.setScore(0)
        info.setLife(3)
        levelcount += 1
        game.splash("Level 2", "Score 20 to move on")
    }
    while (info.score() < 20) {
        pause(100)
    }
    if (info.score() == 20) {
        info.setScore(0)
        info.setLife(3)
        levelcount += 1
        game.splash("Level 3", "Score 30 to move on")
    }
    while (info.score() < 30) {
        pause(100)
    }
    if (info.score() == 30) {
        info.setScore(0)
        info.setLife(3)
        levelcount += 1
        game.splash("Level 4", "Score Defeat the Boss to Win")
    }
})
let Boss = sprites.create(img`
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    `, SpriteKind.Boss)
game.onUpdateInterval(5000, function () {
    if (2 <= levelcount) {
        Life = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.Food)
        Life.setVelocity(-100, 0)
        Life.left = scene.screenWidth()
        Life.y = randint(0, scene.screenHeight())
        Life.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(2000, function () {
    if (3 == levelcount) {
        Speed_Sprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f 9 9 9 9 9 9 9 f f . . 
            . . f f 9 9 9 9 9 9 9 9 9 f . . 
            . . f f 9 9 9 9 9 9 9 9 9 f . . 
            . f f 9 f f f 9 9 9 9 9 9 f f . 
            . f 9 9 f 2 f 9 9 9 9 9 9 9 f . 
            . f 9 9 f f f 9 9 9 9 9 9 9 f . 
            . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
            . f 9 9 9 f f f f f 9 9 9 9 f . 
            . f f 9 9 9 9 9 9 9 9 9 9 f f . 
            . . f f 9 9 9 9 9 9 9 9 f f . . 
            . . . f f 9 9 9 9 9 f f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.FastEnemy)
        Speed_Sprite.setVelocity(-200, 0)
        Speed_Sprite.left = scene.screenWidth()
        Speed_Sprite.y = randint(0, scene.screenHeight())
        Speed_Sprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
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
