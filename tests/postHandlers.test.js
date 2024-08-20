// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"deliveryTime": 10,
	"products": [
	  {
		"id": 2,
		"quantity": 1
	  }
	]
  }

test('Status should be 200', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus). toBe(200)
});



test('Data should be true', async () => {
    let data;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
            method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        data = await response.json(); 
    } catch (error) {
        console.error(error);
    }
    expect(data).toEqual({
		"Fast Delivery": {
			"deliveryPrice": 0
		},
		"Speedy": {
			"deliveryPrice": 0
		},
		"Food Service": {
			"deliveryPrice": 0
		},
		"Order and Go": {
			"deliveryPrice": 0
		}
	}); 
});
