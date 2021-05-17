var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width = 400
canvas.height = 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)

  


//座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos  = i*50
    ctx.moveTo(pos, 0)
    ctx.lineTo(pos, 400)
    ctx.fillText(pos, pos, 10)
    ctx.moveTo(0,pos)
    ctx.lineTo(400,pos)
    ctx.fillText(pos, 10,pos)
  }
  ctx.strokeStyle = "rgba(0,0,0,1)"
  ctx.stroke()


//屋頂
ctx.beginPath()
ctx.moveTo(200,0)
ctx.lineTo(25,75)
ctx.lineTo(375,75)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//上層1
ctx.beginPath()
ctx.moveTo(15,75)
ctx.lineTo(15,85)
ctx.lineTo(385,85)
ctx.lineTo(385,75)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//上層2
ctx.beginPath()
ctx.moveTo(20,85)
ctx.lineTo(20,100)
ctx.lineTo(380,100)
ctx.lineTo(380,85)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子上1
ctx.beginPath()
ctx.moveTo(35,100)
ctx.lineTo(35,120)
ctx.lineTo(75,120)
ctx.lineTo(75,100)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子1
ctx.beginPath()
ctx.moveTo(45,120)
ctx.lineTo(45,350)
ctx.lineTo(60,350)
ctx.lineTo(60,120)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子下1
ctx.beginPath()
ctx.moveTo(35,350)
ctx.lineTo(35,375)
ctx.lineTo(75,375)
ctx.lineTo(75,350)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子上2
ctx.beginPath()
ctx.moveTo(85,100)
ctx.lineTo(85,120)
ctx.lineTo(125,120)
ctx.lineTo(125,100)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子上1
ctx.beginPath()
ctx.moveTo(95,120)
ctx.lineTo(95,350)
ctx.lineTo(110,350)
ctx.lineTo(110,120)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子2
ctx.beginPath()
ctx.moveTo(85,350)
ctx.lineTo(85,375)
ctx.lineTo(125,375)
ctx.lineTo(125,350)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子3上
ctx.beginPath()
ctx.moveTo(330,100)
ctx.lineTo(330,120)
ctx.lineTo(365,120)
ctx.lineTo(365,100)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子3
ctx.beginPath()
ctx.moveTo(340,120)
ctx.lineTo(340,350)
ctx.lineTo(355,350)
ctx.lineTo(355,120)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子2
ctx.beginPath()
ctx.moveTo(330,350)
ctx.lineTo(330,375)
ctx.lineTo(365,375)
ctx.lineTo(365,350)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子4上
ctx.beginPath()
ctx.moveTo(285,100)
ctx.lineTo(285,120)
ctx.lineTo(320,120)
ctx.lineTo(320,100)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子4
ctx.beginPath()
ctx.moveTo(295,120)
ctx.lineTo(295,350)
ctx.lineTo(310,350)
ctx.lineTo(310,120)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子4下
ctx.beginPath()
ctx.moveTo(285,350)
ctx.lineTo(285,375)
ctx.lineTo(320,375)
ctx.lineTo(320,350)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子5上
ctx.beginPath()
ctx.moveTo(230,100)
ctx.lineTo(230,120)
ctx.lineTo(270,120)
ctx.lineTo(270,100)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子2
ctx.beginPath()
ctx.moveTo(245,120)
ctx.lineTo(245,350)
ctx.lineTo(260,350)
ctx.lineTo(260,120)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子2下
ctx.beginPath()
ctx.moveTo(230,350)
ctx.lineTo(230,375)
ctx.lineTo(270,375)
ctx.lineTo(270,350)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子5上
ctx.beginPath()
ctx.moveTo(135,100)
ctx.lineTo(135,120)
ctx.lineTo(170,120)
ctx.lineTo(170,100)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子5
ctx.beginPath()
ctx.moveTo(145,120)
ctx.lineTo(145,350)
ctx.lineTo(160,350)
ctx.lineTo(160,120)
ctx.closePath()
ctx.fillStyle= "#F4EEA9"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//柱子5下
ctx.beginPath()
ctx.moveTo(135,350)
ctx.lineTo(135,375)
ctx.lineTo(170,375)
ctx.lineTo(170,350)
ctx.closePath()
ctx.fillStyle= "#f6d365"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//門
ctx.beginPath()
ctx.moveTo(160,250-mouse.y/5)
ctx.lineTo(190,350-mouse.y/5)
ctx.lineTo(220,350-mouse.y/5)
ctx.lineTo(245,250-mouse.y/5)
ctx.closePath()
ctx.fillStyle= "#DACA1B"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//門下
ctx.beginPath()
ctx.moveTo(170,350-mouse.y/5)
ctx.lineTo(170,375-mouse.y/5)
ctx.lineTo(230,375-mouse.y/5)
ctx.lineTo(230,350-mouse.y/5)
ctx.closePath()
ctx.fillStyle= "#C8B919"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//底
ctx.beginPath()
ctx.moveTo(10,375)
ctx.lineTo(10,380)
ctx.lineTo(390,380)
ctx.lineTo(390,375)
ctx.closePath()
ctx.fillStyle= "black"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//時鐘繪製
/ctx.beginPath()
ctx.arc(203,200 , 42, Math.PI*2,Math.PI,true)
ctx.arc(203,200 , 42,Math.PI, Math.PI*2,true)
ctx.arc(203,200 , 42, Math.PI*2,Math.PI,false)
ctx.arc(203,200 , 42,Math.PI,Math.PI*2,false)
/ctx.closePath()
 ctx.fillStyle= "white"
 ctx.fill()
ctx.strokeStyle="black"
 ctx.stroke()

//中心
ctx.beginPath()
ctx.arc(203,200 , 5,Math.PI, Math.PI*2,true)
ctx.arc(203,200 , 5, Math.PI,Math.PI*2,false)
ctx.closePath()
ctx.fillStyle= "black"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//指針垂直
ctx.beginPath()
ctx.moveTo(202,160)
ctx.lineTo(202,200)
ctx.lineTo(203,200)
ctx.lineTo(203,160)
ctx.closePath()
ctx.fillStyle= "black"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//指針垂直
ctx.beginPath()
ctx.moveTo(202,200)
ctx.lineTo(202,202)
ctx.lineTo(245,202)
ctx.lineTo(245,200)
ctx.closePath()
ctx.fillStyle= "black"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

//月亮
ctx.beginPath()
let carx = time%440-40
ctx.arc(carx+50,50,35,0,Math.PI*2)
ctx.closePath()
ctx.fillStyle= "#E9DB49"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()




    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})