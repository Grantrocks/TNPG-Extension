var Menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Menu" });
    },
    init: function() {},
    preload: function() {
    },
    create: function() {
    var button = this.add.text(10, 10, 'Donate To The Dev', {fontFaimly: 'Ubuntu', fill: '#0f0'}).setInteractive();

    button.on('pointerup', openExternalLink, this);

    this.add.text(300, 60, 'That New Platformer Game', { fontFaimly: 'Ubuntu', fill: '#0f0'})
    this.add.text(300, 90, 'Made By Grant M', { fontFaimly: 'Ubuntu', fill: '#0f0'})

    this.clickButton = this.add.text(260, 150, 'Original Map', { fontFaimly: 'Ubuntu', fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("DefaultMap")} )
    this.clickDevil = this.add.text(270, 150, "Devil", { fontFaimly: 'Ubuntu', fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("DevilMap")} )
    this.clickDontFall = this.add.text(220, 150, "Don't Fall!", { fontFaimly: 'Ubuntu', fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("DFMap")} )
    this.clickDontFall = this.add.text(290, 150, "Going Up", { fontFaimly: 'Ubuntu', fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("GUMap")} )
    },
    update: function() {
    }
});
function openExternalLink ()
{
    var url = 'https://greatdeveloping.itch.io/that-new-platformer-game';

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}
