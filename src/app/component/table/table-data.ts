export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export interface TableRows {
    fname: string,
    lname: string,
    uname: string,
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Rosswel Honda',
        gmail: 'Downtown Atlanta',
        productName: 'Flexy React',
        status: 'danger',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Hanna Gover',
        gmail: 'Times Square',
        productName: 'Landing pro React',
        status: 'info',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Charge EV',
        gmail: 'Dallas',
        productName: 'Elite React	',
        status: 'warning',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Parker GreenWay',
        gmail: 'Bay Area',
        productName: 'Ample React',
        status: 'success',
        weeks: 35,
        budget: '95K'
    },

]

export const Employee : TableRows[] = [
    {
        fname: "Mark",
        lname: "Otto",
        uname: "@mdo",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@fat",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@twitter",
    }
]