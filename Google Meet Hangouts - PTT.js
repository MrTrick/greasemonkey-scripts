// ==UserScript==
// @name         Google Meet Hangouts - PTT with Space
// @namespace    http://mindbleach.com/
// @version      0.1
// @description  Hold down Space key to talk, let go to mute. Does not interfere with other operation, works multinationally.
// @author       Patrick Barnes
// @match        https://meet.google.com/*
// @grant        none
// ==/UserScript==

(() => {
	var el = undefined;
	const mic = en => ({key,repeat,target}) => {
		el && el.isConnected || (el = document.querySelector('[data-is-muted][role="button"]'));
		el && key===' ' && !repeat && !('value' in target) && el.dataset.isMuted === String(en) && el.click()
	}
	document.body.addEventListener('keydown', mic(true))
	document.body.addEventListener('keyup', mic(false))
})();
