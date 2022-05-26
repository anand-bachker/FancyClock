let wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const container = document.getElementsByClassName("container")[0];

function getCurrentRotation(elid) {
  var el = document.getElementById(elid);
  var st = window.getComputedStyle(el, null);
  var tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "fail...";

  if (tr !== "none") {
    var values = tr.split("(")[1];
    values = values.split(")")[0];
    values = values.split(",");
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a * a + b * b);

    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  } else {
    var angle = 0;
  }
  return angle;
}
function giveclock(x, y) {
  const clock = document.createElement("div");
  const hourhandrotator = document.createElement("div");
  const minhandrotator = document.createElement("div");
  const hourhand = document.createElement("div");
  const minhand = document.createElement("div");

  clock.classList.add("clock");
  hourhandrotator.classList.add("hourhandrotator");
  hourhandrotator.id = `${x}-${y}-h`;
  minhandrotator.classList.add("minhandrotator");
  minhandrotator.id = `${x}-${y}-m`;
  hourhand.classList.add("hourhand");
  minhand.classList.add("minhand");

  hourhandrotator.appendChild(hourhand);
  minhandrotator.appendChild(minhand);
  clock.appendChild(hourhandrotator);
  clock.appendChild(minhandrotator);
  return clock;
}


function makeclock() {
  for (let i = 0; i < 8; i++) {
    for (let z = 0; z < 23; z++) {
      let clock = giveclock(i, z);
      container.appendChild(clock);
    }
  }
}

async function randomize() {
  for (let i = 0; i < 23; i++) {
    for (let z = 0; z < 8; z++) {
      document.getElementById(
        `${z}-${i}-h`
      ).style.transform = `rotate(${Math.floor(Math.random() * 360 + 0)}deg)`;
      document.getElementById(
        `${z}-${i}-m`
      ).style.transform = `rotate(${Math.floor(Math.random() * 360 + 0)}deg)`;
    }
    await wait(90);
  }
}

async function resetclock() {
  for (let i = 0; i < 23; i++) {
    for (let z = 0; z < 8; z++) {
      document.getElementById(`${z}-${i}-h`).style.transform = "rotate(-10deg)";
      document.getElementById(`${z}-${i}-m`).style.transform = "rotate(-50deg)";
    }
    await wait(90);
  }
  for (let i = 0; i < 23; i++) {
    for (let z = 0; z < 8; z++) {
      document.getElementById(`${z}-${i}-h`).style.transform = "rotate(0deg)";
      document.getElementById(`${z}-${i}-m`).style.transform = "rotate(-180deg)";
    }
    await wait(90);
  }
}


const mapDB = {
	'┘': [   -180, -90],
	'└': [   -90,  0],
	'┐': [ -180, 90],
	'┌': [  0, 90],
	'|': [   -90, 90],
	'-': [ -180,  0] 
};

const charDB = [
	[ 
		'┌---┐',
		'|┌-┐|',
		'||-||',
		'||-||',
		'|└-┘|',
		'└---┘'
	], [ 
		'--┌┐-',
		'--||-',
		'--||-',
		'--||-',
		'--||-',
		'--└┘-'
	], [ 
		'┌---┐',
		'└--┐|',
		'┌--┘|',
		'|┌--┘',
		'|└--┐',
		'└---┘'
	], [ 
		'┌---┐',
		'└--┐|',
		'┌--┘|',
		'└--┐|',
		'┌--┘|',
		'└---┘'
	], [ 
		'┌┐-┌┐',
		'||-||',
		'|└-┘|',
		'└--┐|',
		'---||',
		'---└┘'
	], [ 
		'┌---┐',
		'|┌--┘',
		'|└--┐',
		'└--┐|',
		'┌--┘|',
		'└---┘'
	], [ 
		'┌┐---',
		'||---',
		'|└--┐',
		'|┌-┐|',
		'|└-┘|',
		'└---┘'
	], [ 
		'┌--┐-',
		'└-┐|-',
		'--||-',
		'--||-',
		'--||-',
		'--└┘-'
	], [ 
		'┌---┐',
		'|┌-┐|',
		'|└-┘|',
		'|┌-┐|',
		'|└-┘|',
		'└---┘'
	], [ 
		'┌---┐',
		'|┌-┐|',
		'|└-┘|',
		'└--┐|',
		'---||',
		'---└┘'
	]
];

async function timesetter(){
  let time = new Date();
  console.log();
  let curr='-'
  let xbase=1;
  let ybase=1;
  let hour=time.getHours().toString()
  let min=time.getMinutes().toString()
  if(hour.length==1){
    hour='0'+hour
  }
  if(min.length==1){
    min='0'+min
  }
  let a=parseInt(hour[0])
  let b=parseInt(hour[1])
  let c=parseInt(min[0])
  let d=parseInt(min[1])

  for(let i=1;i<7;i++){
    curr='|'
    document.getElementById(`${i}-${0}-m`).style.transform = `rotate(${mapDB[curr][0]}deg)`;
    document.getElementById(`${i}-${0}-h`).style.transform = `rotate(${mapDB[curr][1]}deg)`;
    document.getElementById(`${i}-${22}-m`).style.transform = `rotate(${mapDB[curr][0]}deg)`;
    document.getElementById(`${i}-${22}-h`).style.transform = `rotate(${mapDB[curr][1]}deg)`;
  }

  document.getElementById(`${0}-${0}-m`).style.transform = `rotate(${mapDB['┌'][0]}deg)`;
  document.getElementById(`${0}-${0}-h`).style.transform = `rotate(${mapDB['┌'][1]}deg)`;
  document.getElementById(`${7}-${0}-m`).style.transform = `rotate(${mapDB['└'][0]}deg)`;
  document.getElementById(`${7}-${0}-h`).style.transform = `rotate(${mapDB['└'][1]}deg)`;
  document.getElementById(`${0}-${22}-m`).style.transform = `rotate(${mapDB['┐'][0]}deg)`;
  document.getElementById(`${0}-${22}-h`).style.transform = `rotate(${mapDB['┐'][1]}deg)`;
  document.getElementById(`${7}-${22}-m`).style.transform = `rotate(${mapDB['┘'][0]}deg)`;
  document.getElementById(`${7}-${22}-h`).style.transform = `rotate(${mapDB['┘'][1]}deg)`;


  for (let i = 0; i < 5; i++) {
    for (let z = 0; z < 6; z++) {
        curr=charDB[a][z][i]
        document.getElementById(`${z+ybase}-${i+xbase}-m`).style.transform = `rotate(${mapDB[curr][0]}deg)`;
        document.getElementById(`${z+ybase}-${i+xbase}-h`).style.transform = `rotate(${mapDB[curr][1]}deg)`;
    }
    await wait(90);
  }
  xbase+=5;
  for (let i = 0; i < 5; i++) {
    for (let z = 0; z < 6; z++) {
        curr=charDB[b][z][i]
        document.getElementById(`${z+ybase}-${i+xbase}-m`).style.transform = `rotate(${mapDB[curr][0]}deg)`;
        document.getElementById(`${z+ybase}-${i+xbase}-h`).style.transform = `rotate(${mapDB[curr][1]}deg)`;
    }
    await wait(90);
  }
  xbase+=6;
  for (let i = 0; i < 5; i++) {
    for (let z = 0; z < 6; z++) {
        curr=charDB[c][z][i]
        document.getElementById(`${z+ybase}-${i+xbase}-m`).style.transform = `rotate(${mapDB[curr][0]}deg)`;
        document.getElementById(`${z+ybase}-${i+xbase}-h`).style.transform = `rotate(${mapDB[curr][1]}deg)`;
    }
    await wait(90);
  }
  xbase+=5;
  for (let i = 0; i < 5; i++) {
    for (let z = 0; z < 6; z++) {
        curr=charDB[d][z][i]
        document.getElementById(`${z+ybase}-${i+xbase}-m`).style.transform = `rotate(${mapDB[curr][0]}deg)`;
        document.getElementById(`${z+ybase}-${i+xbase}-h`).style.transform = `rotate(${mapDB[curr][1]}deg)`;
    }
    await wait(90);
  }
}



makeclock();

async function work() {
  while(true){  
  randomize();
  await wait(4000);
  resetclock();
  await wait(5500);
  timesetter();
  await wait(5000);
  }
}

work();




