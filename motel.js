const customer= {
    Firt: 'Brian',
    Last: 'Jackman',
    DOB: '1989/09/23',
    Gender: 'male',
    RoomPref:[ 'Top floor, king size bed'],
    PaymentMethod: 'Cash',
    Address: {
        Street: '53 Carrick Drive',
        City: 'St. Johns',
        Province: ' NL',
        Postal: ' A1A4N3',
        CSSImportRuleountry: 'Canada'
},
    PhoneNum: '7097496464',
    CheckInDate: '2024/03/22',
    CheckOutDate: '2024/03/24'
},



getAge: function(){const today = new Date();
    const birthDate = this.birthDate;
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

getDuration: function(){
    const checkInDate = this.checkInDate.getTime();
    const checkOutDate = this.checkOutDate.getTime();
    const duration = Math.abs(checkOutDate - checkInDate);
    return Math.round(duration / oneDay);
}



getDescription: function(){
    return '${customer.First} ${customer.Last} was born on ${customer.DOB} he wil be paying with ${cutomer.PaymentMethod} and will be chiecking in on ${customer.CheckInDate} and leaving on ${customer.CheckOutDate} his phone number is ${customer.PhoneNum}'
}