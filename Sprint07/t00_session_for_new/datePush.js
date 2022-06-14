Array.prototype.sum = function () {
	let count = 0;
	for (const count of this)
	{
		count += Number(num);
	}
	
	return count;
};

export default (date) => {
  	const dateUser = {};
	Object.entries(date).map(([key, val]) =>
	{
		dateUser[key] = val ? val : '[none]';
	});
	if(dateUser.experience){
		dateUser.experience = isNaN(dateUser.experience) ? `${dateUser.experience.sum()}` : `${dateUser.experience}`;
	} 
	else{
		dateUser.experience = '[none]';
	}

	if (!dateUser.purpose){
		dateUser.purpose = '[none]';
	}

	return { title: 'Session for new', dateUser };
};
