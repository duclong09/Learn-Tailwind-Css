function updateClock(){
    const now = new Date();
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou == 0){
            hou = 12;
        }
        if(hou > 12){
            hou = hou - 12;
            pe = "PM";
        }

        Number.prototype.pad = function(digits){
            for(let n =  this.toString(); n.length < digits; n = 0 + n){
                return n;
            }
               
            
        }

        const months = ["Jan", "Feb", "March", "Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        const groupID = ["dayname","month","daynumber","year","hour","minutes","seconds","period"];

        const values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe];

        for(let i = 0; i < groupID.length; i++){
            document.getElementById(groupID[i]).firstChild.nodeValue = values[i];
        }
       
        
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}