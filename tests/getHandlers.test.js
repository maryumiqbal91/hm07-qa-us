// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`);
	actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
expect(actualStatus). toBe(200)
});

test('Data shoulbe be true', async () => {
    let data;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/cards`, {
            method: 'GET',
        });
        data = await response.json(); 
    } catch (error) {
        console.error(error);
    }
    expect(data).toEqual ([
		{
			"id": 1,
			"name": "For the situation"
		},
		{
			"id": 2,
			"name": "Prepare a dish"
		}
	]);
});
