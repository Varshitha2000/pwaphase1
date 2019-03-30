function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
  }
  loadJson("data.json",function(text){
    let data=JSON.parse(text);
    console.log(data);
    profile(data.profile);
    career_objective(data.career_objective);
    edu(data.edu);
    skills(data.skills);
    hobbies(data.hobbies);
  })
  var left=document.querySelector(".left");
  function profile(p){
    var image=document.createElement("img");
    image.src=p.image;
    left.append(image);
    var h2=document.createElement("h2");
    h2.textContent=p.name;
    left.append(h2);
    var h3=document.createElement("h3");
    h3.textContent=p.id;
    left.append(h3);
    var h4=document.createElement("h4");
    h4.textContent=p.mobile;
    left.append(h4);
    var h5=document.createElement("h5");
    h5.textContent=p.email;
    left.append(h5);
}
var right=document.querySelector(".right");
function career_objective(c){
  var h1=document.createElement("h1");
  h1.textContent="career objective";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var p=document.createElement("p");
  p.textContent=c.info;
  right.append(p);
}
//education_details
  function edu(e){
    var h1=document.createElement("h1");
    h1.textContent="education details";
    right.append(h1);
    var hr=document.createElement("hr");
    right.append(hr);
    var table=document.createElement("table");
    //(already in css)table.border="1";
    //right.append(table);
    var tr1="<tr><th>id</th><th>insti</th><th>quali</th><th>per</th><th>yop</th></tr>";
    var tr2="";
    for(i=0;i<e.length;i++)
    {
      tr2=tr2+"<tr><td>"+e[i].id+"</td><td>"+e[i].insti+"</td><td>"+e[i].quali+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td>";
    }
    table.innerHTML=tr1+tr2;
    right.append(table);
  }
function skills(s){
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ol=document.createElement("li");
  ol.textContent=s.s1;
  right.append(ol);
  var h5=document.createElement("li");
  h5.textContent=s.s2;
  right.append(h5);
}
function hobbies(h){
  var h1=document.createElement("h1");
  h1.textContent="hobbies";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("li");
  ul.textContent=h.h1;
  right.append(ul);
  var h5=document.createElement("li");
  h5.textContent=h.h2;
  right.append(h5);
}
