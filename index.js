module.exports = function (packname, mode) {
	if (mode === undefined) mode = '-S';
	try { return require(packname) } catch(e) { console.error('npm package "'+packname+'" not installed, installing...'); }
	require('child_process').execSync('npm i '+(mode?mode+' ':'')+packname);
	const path = process.cwd()+'/node_modules/'+packname+'/';
	const index = require(path+'/package.json').main || 'index.js';
	return require(path+index);
};