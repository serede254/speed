const prompt=require("prompt-sync")({sigint:true}); 
let speed = prompt("Enter speed here:");
points= 0
if (speed<=70){
    console.log(points);
}
else if(speed > 70 && speed <75){
   licensePoints= points+1
console.log (`Points:${licensePoints}`);
}
else if(speed >= 75 && speed <80){
    licensePoints= points+2
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=80 && speed <85){
    licensePoints= points+3
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=85 && speed <90){
    licensePoints= points+4
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=90 && speed <95){
    licensePoints= points+5
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >= 95 && speed <100){
    licensePoints= points+6
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=100 && speed <105){
    licensePoints= points+7
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=105 && speed <110){
    licensePoints= points+8
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=110 && speed <115){
    licensePoints= points+9
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=115 && speed <120){
    licensePoints= points+10
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=120 && speed <125){
    licensePoints= points+11
 console.log (`Points:${licensePoints}`);
 }
 else if(speed >=125 && speed <130){
    licensePoints= points+12
 console.log (`Points:${licensePoints}`);
 }
 else if(speed>=130){
    licensePoints=points+1
    console.log(`Points:${licensePoints}`)
    console.log("your license is suspended")
 }