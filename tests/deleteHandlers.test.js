// eslint-disable-next-line no-undef
const config = require('../config');

test('Status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus). toBe(200)
});

test('Data shoulbe be true', async () => {
    let data;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'DELETE',
        });
        data = await response.json(); 
    } catch (error) {
        console.error(error);
    }
    expect(data).toEqual({ ok: true });
});
