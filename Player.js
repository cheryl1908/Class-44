class Player{
    constructor(){
        this.index=null;
        this.x1=0;
        this.y1=0;
        this.x2=0;
        this.y2=0;
        this.name1=null;
        this.name2=null;
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    update(){
        var playerIndex="players/player"+this.index;
        if(this.index===1){
            database.ref("playerIndex").set({
                x:this.x1,
                y:this.y1,
                name:this.name1
            })
        }else if(this.index===2){
            database.ref("playerIndex").set({
                x:this.x2,
                y:this.y2,
                name:this.name2
            })
        }
    }
    static getPlayersInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}