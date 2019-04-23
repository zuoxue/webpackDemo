import '../css/index.less';
import Icon from '../image/song.jpg';

function createElementDemo() {
	let div = document.createElement('div');
	let content = document.createTextNode('hello,my worldss!');
	div.appendChild(content);
	document.body.appendChild(div);

	var myIcon = new Image();
	myIcon.src = Icon;
	document.body.appendChild(myIcon);
	console.error('ssss');
}

createElementDemo();
