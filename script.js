<script type="text/javascript">



var theImages = new Array() // do not change this

theImages[0] = '1.png'
theImages[1] = '2.png'
theImages[2] = '3.png'
theImages[3] = '4.png'
theImages[5] = '5.png'
theImages[6] = '6.png'
theImages[7] = '7.png'
theImages[8] = '8.png'

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">');
}

</script>
