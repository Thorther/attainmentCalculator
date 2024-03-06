// Fill function
document.getElementById("Fill").onclick = function()
{
	let firstValue = document.getElementById("rate1").value;
	for(let i = 1; i < 9; i++)
	{
		let idIndex = (i).toString();
		let idValue = "rate"+idIndex;
		let curBox = document.getElementById(idValue);
		curBox.value = firstValue;
	}
}

document.getElementById("Calc").onclick = function()
{
	for(let i = 1; i < 9; i++)
	{
		let idIndex = (i).toString();
		let idValue = "rate"+idIndex;
		let rateValue = parseInt(document.getElementById(idValue).value);
		idValue = "actual"+idIndex;
		let actualValue = parseInt(document.getElementById(idValue).value);
		idValue = "diff"+idIndex;
		let diffBox = document.getElementById(idValue);
		let diff = actualValue-rateValue;
		if(diff > 0)
		{
			diffBox.parentNode.style.backgroundColor = "#b0ffb8";
		} else if(diff < 0)
		{
			diffBox.parentNode.style.backgroundColor = "#fa9c93";
		}
		diffBox.value = (diff).toString();
		
		if(i == 1)
		{
			let run = document.getElementById("run1");
			run.value = diffBox.value;
			if(parseInt(run.value) > 0)
			{
				run.parentNode.style.backgroundColor = "#b0ffb8";
			} else if(parseInt(run.value) < 0)
			{
				run.parentNode.style.backgroundColor = "#fa9c93";
			}
		} else {
			let preVal = i-1;
			let preValIndex = (preVal).toString();
			let preValue = "run"+preValIndex;
			idValue = "run"+idIndex;
			let prevRunTot = parseInt(document.getElementById(preValue).value);
			let curTot = document.getElementById(idValue);
			let runningTotal = prevRunTot+diff;
			
			if(runningTotal > 0)
			{
				curTot.parentNode.style.backgroundColor = "#b0ffb8";
			} else if(runningTotal < 0)
			{
				curTot.parentNode.style.backgroundColor = "#fa9c93";
			}
			
			curTot.value = (runningTotal).toString();
		}
		
	}
}