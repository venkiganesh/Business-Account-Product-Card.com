function add_name() {
  var x = document.getElementById('input-1').value;
  var y = document.getElementById('head-card');
  y.innerHTML=x;

  var a = document.getElementById('input-2').value;
  var b = document.getElementById('para-card');
  b.innerHTML=a;

  var c = document.getElementById('input-3').value;
  var d = document.getElementById('price-card');
  d.innerHTML=c;

  var e = document.getElementById('input-4').value;
  var f = document.getElementById('time-card');
  f.innerHTML=e;

  var q = document.getElementById('time-span');
  q.style.visibility="visible";


  var r = document.getElementById('publish-btn');
  r.style.visibility="visible";

}
const image_input = document.getElementById('input-5');
var uploaded_image = "";

image_input.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.getElementById('product-img').style.backgroundImage = `url(${uploaded_image})`;
});
  reader.readAsDataURL(this.files[0]);

})
