let data = 0;

window.onload = anonymous = async () => {
	const response = await fetch('/views-count');
	const dataCurr = await response.json();
	console.log(dataCurr);
	if (dataCurr.count !== data){
		data = dataCurr;

		let str = `This page was loaded ${dataCurr.views} time(s) in last minutes.`;

		document.getElementById('views-count').innerText = str;
	}
	setTimeout(() => {
		anonymous();
	}, 5000);
};
