const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var drops=[];
var maxDrops=100;
var thunderC = 0;
var thunder,umbrella;

function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");  
    t3 = loadImage("images/thunderbolt/3.png");  
    t4 = loadImage("images/thunderbolt/4.png"); 

    b1 = loadImage("/Users/aditi/Downloads/images/Walking Frame/walking_1.png");
    // b2 = loadImage("images/Walking Frame/walking_2.png");
    // b3 = loadImage("images/Walking Frame/walking_3.png");
    // b4 = loadImage("images/Walking Frame/walking_4.png");
    // b5 = loadImage("images/Walking Frame/walking_5.png");
    // b6 = loadImage("images/Walking Frame/walking_6.png");
    // b7 = loadImage("images/Walking Frame/walking_7.png");
    // b8 = loadImage("images/Walking Frame/walking_8.png");
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella (300,300,5);
    umbrella.addImage(b1);

    if(frameCount%100===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400),0));
        }
    }

    // adding image to bruce
    if (frameCount%2===0){
        umbrella.addImage(b1);
    }

    if (frameCount%3===0){
        // umbrella.addImage(b2);
    }

    if (frameCount%5===0){
        // umbrella.addImage(b3);
    }

    if (frameCount%7===0){
        // umbrella.addImage(b4);
    }

    if (frameCount%11===0){
        // umbrella.addImage(b5);
    }

    if (frameCount%13===0){
        // umbrella.addImage(b6);
    }

    if (frameCount%17===0){
        // umbrella.addImage(b7);
    }

    if (frameCount%19===0){
        // umbrella.addImage(b8);
    }
}

function draw(){ 
    background(0,0,0);
    Engine.update(engine);
    var rand = Math.round(random(1,4));

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }  

    umbrella = new Umbrella (300,300,5);

    /*
    // adding image to bruce
    if(frameCount%2===0){
    umbrella.addImage(b1);
    }

    if (frameCount%3===0){
    umbrella.addImage(b2);
    }

    if (frameCount%5===0){
    umbrella.addImage(b3);
    }

    if (frameCount%7===0){
    umbrella.addImage(b4);
    }

    if (frameCount%11===0){
    umbrella.addImage(b5);
    }

    if (frameCount%13===0){
    umbrella.addImage(b6);
    }

    if (frameCount%17===0){
    umbrella.addImage(b7);
    }

    if (frameCount%19===0){
    umbrella.addImage(b8);
    }
    */

    if(frameCount%50===0){
        thunder = createSprite(200,50,10,10);
        thunderC = frameCount;
        switch(rand){
            case 1 : thunder.addImage(t1);
            break;
            case 2 : thunder.addImage(t2);
            break;
            case 3 : thunder.addImage(t3);
            break;
            case 4 : thunder.addImage(t4);
            break;
        }
        thunder.scale=random(0.2,0.4);
    }

    if(thunderC+10===frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}