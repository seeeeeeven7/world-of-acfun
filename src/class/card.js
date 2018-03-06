var Card = {
    scale: 0.7,
    createNew: function(type, x, y) {
        var card = {
            type: type,
            position: {
                x: x,
                y: y
            }
            stats: {
                hp: 50,
                hpMax: 100,
                mp: 50,
                mpMax: 100,
                exp: 50,
                expMax: 500
            }
        }
        card.image = new Image();
        card.image.src = "../images/acfun_emoji/" + type + ".png"
        card.drawIn = function(context) {
            var scale = 0.7;
            context.drawImage(this.image, this.position.x, this.position.y, dw = this.image.width * scale, dh = this.image.height * scale)
            context.font = "15px tahoma"
            context.fillStyle = "deepgray";
            context.fillText("HP", this.position.x + 120, this.position.y + 26)
            context.fillText("MP", this.position.x + 120, this.position.y + 53)
            context.fillText("EXP", this.position.x + 120, this.position.y + 80)
        }
        return card;
    }
};