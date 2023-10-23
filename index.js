class logger{
    method = "log";
    showDateTime = false;
    color = {
        black: "\u001b[30m",
        red: "\u001b[31m",
        green: "\u001b[32m",
        yellow: "\u001b[33m",
        blue: "\u001b[34m",
        magenta: "\u001b[35m",
        cyan: "\u001b[36m",
        white: "\u001b[37m",
        alert: "\u001b[31m",
        warn: "\u001b[33m",
        log: "\u001b[37m"
    }

    constructor(...options){
        if(options[0] == true) {
            this.showDateTime = true;
        }
        return;
        if(method == "warn"){
        
            this.method = "warn";
        } else if(method == "alert"){
        
            this.method = "alert";
        } else {
            
            this.method = "log";
        }
    }

    getCurrentDateTime(){
        let currentdate = new Date(); 
        let datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        return datetime;
    }

    getColorCode(code) {
        let color = "\x1b[36m";

        try{
            color = this.color[code];
        } catch(e){
            color = this.color["white"];
        }
        
        if(!color){
            color = this.color["white"];
        }

        return color;
    }

    getLogFormat(data){
        let text = data.split(" ")
        
        let color = text[0];
        
        if(color[0] == "@"){
            text = text.slice(1);
        }
        text = text.join(" ");
        
        color = color.replace("@", "");
        color = this.getColorCode(color);
        
        return Array(color, text);
    }

    log(...data) {
        data = data.join(" ");
        let txt = this.getLogFormat(data);
        let format = txt[0]
        data = txt[1]
        if(this.showDateTime){
            let consoleData =  format  + "[ " + this.getCurrentDateTime() + " ]  -  " + data + format;
            console.log(consoleData);
        } else {
            
            console.log(data);
        }
    }
}

module.exports = logger;
