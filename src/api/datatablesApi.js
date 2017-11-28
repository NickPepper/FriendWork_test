let mock = [
    {id: 1, date: "2016-04-02", hits: 5, unique: 3, regs: 0, demoregs: 0, conversion: 0, deposit: 2, ftd: 0, deals: 187, profit: 122.17},
    {id: 2, date: "2016-04-03", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 1, ftd: 0, deals: 14, profit: 0.34},
    {id: 3, date: "2016-04-04", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 2, ftd: 0, deals: 49, profit: 3.34},
    {id: 4, date: "2016-04-05", hits: 128, unique: 120, regs: 1, demoregs: 1, conversion: 0, deposit: 1, ftd: 0, deals: 90, profit: 12.42},
    {id: 5, date: "2016-04-06", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 0, ftd: 0, deals: 55, profit: 10000.48},
    {id: 6, date: "2016-04-07", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 0, ftd: 0, deals: 43, profit: 1.12}
];


class DatatablesApi {

    static getDatatablesData() {

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomMoney(min, max) {
            return (Math.random() * (max - min + 1) + min).toFixed(2);
        }

        // re-fill mock with data
        for(let i = 0, l = mock.length; i < l; i++) {
            mock[i].hits        = getRandomInt(0, 128);
            mock[i].unique      = getRandomInt(0, 128);
            mock[i].regs        = getRandomInt(0, 10);
            mock[i].demoregs    = getRandomInt(0, 10);
            mock[i].conversion  = getRandomInt(0, 5);
            mock[i].deposit     = getRandomInt(0, 64);
            mock[i].deals       = getRandomInt(0, 1000);
            mock[i].profit      = getRandomMoney(0, 11000);
        }

        return fetch('http://localhost:5000/api/v1/datatables').then(response => {
            //return response.json();
            return mock;
        }).catch(error => {
            //return error;
            return mock;
        });
    }
};

export default DatatablesApi;
