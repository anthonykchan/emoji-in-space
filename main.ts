namespace SpriteKind {
    export const FastEnemy = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
function Levels () {
    game.splash("Level 1", "Score 10 to move on")
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
        game.splash("Level 4", "Defeat the Boss to Win")
    }
    BossBattle()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spaceship.setImage(img`
        . . f f f f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 5 5 5 f f f 5 5 f f 
        f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 f f f 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 f f f 
        . . f f f f f f f f f f f f . . 
        `)
    timer.background(function () {
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
        pause(200)
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 5 f f f 5 5 f f 
            f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 f f f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    dart.destroy(effects.fire, 500)
    statusbar.value += -1
    Boss_HP = statusbar.value
})
function BossBattle () {
    Boss = sprites.create(img`
        ....ffffffffffffffffffff....
        ....ffffffffffffffffffff....
        ..ffffccccccccccc5ccccff....
        ..ffffccccccc5ccc5ccccff....
        ffffccccfff55fcccc5cccccff..
        ffffccccf55fffccccc5ccccff..
        ffcccccc5f22ffccccc5ccccccff
        ffccccccff52ffcccccc5cccccff
        ..ffccccffffffccccccc5ccccff
        ..ffccccffffffccccccccccccff
        ....ffcccccccccc55ccccccccff
        ....ffcccccccc5ccc555cccccff
        ......ffccccccc5ccccc55cccff
        ......ffcc5ccccc5cccccc55cff
        ....ffccc5cccc5cc5ccccccccff
        ....ffcc5cccc5cccc55ccccccff
        ..ffccc5ccccc5cccccc5cccccff
        ..ffcc5ccccc5cccccccc5ccccff
        ffcccc5cccc5cccccccccc5cccff
        ffccc5ccccc5ccc5ccccccc5ccff
        ffcc5ccccc5ccccc5cccccccff..
        ffc5ccccc5ccccccc55cccccff..
        ffffffccc5ccccccccc5ccff....
        ffffffccccccccccccccccff....
        ....ffffffffffffffffffff....
        ....ffffffffffffffffffff....
        `, SpriteKind.Boss)
    Boss.setPosition(123, 57)
    Boss_HP = 50
    statusbar = statusbars.create(100, 4, StatusBarKind.Health)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.value = 50
    statusbar.setLabel("HP:", Boss_HP)
    statusbar.setColor(7, 15, 2)
    Boss.setVelocity(0, -50)
    Boss.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FastEnemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FastEnemy, function (sprite, otherSprite) {
    timer.background(function () {
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 f 5 5 5 f 5 f f 
            f 5 5 5 5 5 5 5 f f f f f 5 5 f 
            f 5 5 5 5 5 5 9 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 9 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 9 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
        music.powerDown.play()
        otherSprite.destroy(effects.fire, 500)
        info.changeLifeBy(-1)
        pause(500)
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 5 f f f 5 5 f f 
            f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 f f f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    timer.background(function () {
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f 5 5 5 5 5 5 5 f f f f f 5 5 f 
            f 5 5 5 5 5 5 5 f 5 5 5 f 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
        music.powerUp.play()
        otherSprite.destroy(effects.hearts, 500)
        info.changeLifeBy(1)
        pause(500)
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 5 f f f 5 5 f f 
            f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 f f f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
    })
})
function BossFlash () {
    timer.background(function () {
        pause(1000)
        Boss.setImage(img`
            ....ffffffffffffffffffff....
            ....ffffffffffffffffffff....
            ..ffffccccccccccc4ccccff....
            ..ffffccccccc4ccc4ccccff....
            ffffccccfff44fcccc4cccccff..
            ffffccccf44fffccccc4ccccff..
            ffcccccc4f22ffccccc4ccccccff
            ffccccccff52ffcccccc4cccccff
            ..ffccccffffffccccccc4ccccff
            ..ffccccffffffccccccccccccff
            ....ffcccccccccc44ccccccccff
            ....ffcccccccc4ccc444cccccff
            ......ffccccccc4ccccc44cccff
            ......ffcc4ccccc4cccccc44cff
            ....ffccc4cccc4cc4ccccccccff
            ....ffcc4cccc4cccc44ccccccff
            ..ffccc4ccccc4cccccc4cccccff
            ..ffcc4ccccc4cccccccc4ccccff
            ffcccc4cccc4cccccccccc4cccff
            ffccc4ccccc4ccc4ccccccc4ccff
            ffcc4ccccc4ccccc4cccccccff..
            ffc4ccccc4ccccccc44cccccff..
            ffffffccc4ccccccccc4ccff....
            ffffffccccccccccccccccff....
            ....ffffffffffffffffffff....
            ....ffffffffffffffffffff....
            `)
        pause(1000)
        Boss.setImage(img`
            ....ffffffffffffffffffff....
            ....ffffffffffffffffffff....
            ..ffffccccccccccc2ccccff....
            ..ffffccccccc2ccc2ccccff....
            ffffccccfff22fcccc2cccccff..
            ffffccccf22fffccccc2ccccff..
            ffcccccc2f22ffccccc2ccccccff
            ffccccccff52ffcccccc2cccccff
            ..ffccccffffffccccccc2ccccff
            ..ffccccffffffccccccccccccff
            ....ffcccccccccc22ccccccccff
            ....ffcccccccc2ccc222cccccff
            ......ffccccccc2ccccc22cccff
            ......ffcc2ccccc2cccccc22cff
            ....ffccc2cccc2cc2ccccccccff
            ....ffcc2cccc2cccc22ccccccff
            ..ffccc2ccccc2cccccc2cccccff
            ..ffcc2ccccc2cccccccc2ccccff
            ffcccc2cccc2cccccccccc2cccff
            ffccc2ccccc2ccc2ccccccc2ccff
            ffcc2ccccc2ccccc2cccccccff..
            ffc2ccccc2ccccccc22cccccff..
            ffffffccc2ccccccccc2ccff....
            ffffffccccccccccccccccff....
            ....ffffffffffffffffffff....
            ....ffffffffffffffffffff....
            `)
        pause(1000)
        Boss.setImage(img`
            ....ffffffffffffffffffff....
            ....ffffffffffffffffffff....
            ..ffffccccccccccc5ccccff....
            ..ffffccccccc5ccc5ccccff....
            ffffccccfff55fcccc5cccccff..
            ffffccccf55fffccccc5ccccff..
            ffcccccc5f22ffccccc5ccccccff
            ffccccccff52ffcccccc5cccccff
            ..ffccccffffffccccccc5ccccff
            ..ffccccffffffccccccccccccff
            ....ffcccccccccc55ccccccccff
            ....ffcccccccc5ccc555cccccff
            ......ffccccccc5ccccc55cccff
            ......ffcc5ccccc5cccccc55cff
            ....ffccc5cccc5cc5ccccccccff
            ....ffcc5cccc5cccc55ccccccff
            ..ffccc5ccccc5cccccc5cccccff
            ..ffcc5ccccc5cccccccc5ccccff
            ffcccc5cccc5cccccccccc5cccff
            ffccc5ccccc5ccc5ccccccc5ccff
            ffcc5ccccc5ccccc5cccccccff..
            ffc5ccccc5ccccccc55cccccff..
            ffffffccc5ccccccccc5ccff....
            ffffffccccccccccccccccff....
            ....ffffffffffffffffffff....
            ....ffffffffffffffffffff....
            `)
        pause(1000)
    })
}
function start () {
    Boss_HP = 1
    levelcount = 1
    spaceship = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 5 5 5 f f f 5 5 f f 
        f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 f f f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 f f f 
        . . f f f f f f f f f f f f . . 
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
    timer.background(function () {
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 f 5 5 5 f 5 f f 
            f 5 5 5 5 5 5 5 f f f f f 5 5 f 
            f 5 5 5 5 5 5 9 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 9 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 9 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
        music.powerDown.play()
        otherSprite.destroy(effects.fire, 500)
        info.changeLifeBy(-1)
        pause(500)
        spaceship.setImage(img`
            . . f f f f f f f f f f f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f f . 
            . f 5 5 5 5 5 5 5 f f f 5 5 f f 
            f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 f f f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 f f f 
            . . f f f f f f f f f f f f . . 
            `)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    spaceship.setImage(img`
        . . f f f f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 5 5 f 5 5 5 f 5 f f 
        f 5 5 5 5 5 5 5 f f f f f 5 5 f 
        f 5 5 5 5 5 5 9 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 9 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 9 5 5 5 5 5 f f f . 
        f 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 f f f 
        . . f f f f f f f f f f f f . . 
        `)
    music.powerDown.play()
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-3)
    pause(500)
    spaceship.setImage(img`
        . . f f f f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 5 5 5 f f f 5 5 f f 
        f 5 5 5 5 5 5 5 5 f 1 f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 f f f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 f f f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 f f f 
        . . f f f f f f f f f f f f . . 
        `)
})
let bogey: Sprite = null
let Speed_Sprite: Sprite = null
let Life: Sprite = null
let Boss: Sprite = null
let Boss_HP = 0
let statusbar: StatusBarSprite = null
let dart: Sprite = null
let spaceship: Sprite = null
let levelcount = 0
start()
timer.background(function () {
    Levels()
})
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
    } else if (4 == levelcount) {
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
        Speed_Sprite.setPosition(Boss.x, Boss.y)
        Speed_Sprite.setVelocity(-200, 0)
        Speed_Sprite.setFlag(SpriteFlag.AutoDestroy, true)
    } else {
    	
    }
})
forever(function () {
    if (4 == levelcount) {
        BossFlash()
        if (0 == Boss_HP) {
            game.over(true, effects.confetti)
        }
    }
})
game.onUpdateInterval(500, function () {
    if (4 > levelcount) {
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
    } else {
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
        bogey.setPosition(Boss.x, Boss.y)
        bogey.setVelocity(-100, 0)
        bogey.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
