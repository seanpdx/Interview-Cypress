class Utility {

    static returnDate(dateString: string) {
        let formattedDate: string;
        let today: Date = new Date();
        if (dateString == 'today') {

            formattedDate = (today.getMonth() + 1) + ' ' + today.getDate() + ' ' + today.getFullYear();
            return formattedDate;
        } else {

        }
       
    }

}
export default Utility;