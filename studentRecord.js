// 551. Student Attendance Record I


var checkRecord = function(s) {
    counter_Absent = 0
    counter_Leave = 0

    for(let i = 0 ; i<s.length; i++){
        if(s[i] === "A"){
            counter_Absent = counter_Absent + 1
        }
        if(s[i] === "L" && s[i-1] === "L" && s[i+1] === "L"){
            counter_Leave = counter_Leave + 1
        }

    }
    return counter_Absent < 2 && counter_Leave < 1 
    
};