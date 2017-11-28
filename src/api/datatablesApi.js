import Utils from "../Utils";

class DatatablesApi {

    static getDatatablesData() {
        return fetch('http://localhost:5000/api/v1/datatables').then(response => {
            //return response.json();
            return Utils.getMockRows();
        }).catch(error => {
            //return error;
            return Utils.getMockRows();
        });
    }
};


export default DatatablesApi;
