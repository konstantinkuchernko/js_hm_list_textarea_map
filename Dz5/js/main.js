/*
* @Author: konstantinkuchernko
* @Date:   2017-05-16 22:35:56
* @Last Modified by:   konstantinkuchernko
* @Last Modified time: 2017-05-18 20:15:56
*/s

'use strict';

document.onkeydown = function(e) {
	if (e.keyCode == 27) {
		quite();
		return false;
}

	if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
		edit();
		return false;
}

	if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
		save();
		return false;
}
};

function quite() {
  area.style.display = 'none';
  block.style.display = 'block';
};

function edit() {
  block.style.display = 'none';
  area.value = block.innerHTML;
  area.style.display = 'block';
  area.focus();
};

function save() {
  area.style.display = 'none';
  block.innerHTML = area.value;
  block.style.display = 'block';
};

