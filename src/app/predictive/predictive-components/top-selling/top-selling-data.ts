export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Able Tutor',
        gmail: 'atutor@gmail.com',
        productName: '7.5',
        status: '5 / 5',
        weeks: 35,
        budget: '95$'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: '8',
        status: '4.7 / 5 ',
        weeks: 35,
        budget: '85$'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Daneil John',
        gmail: 'djohn@gmail.com',
        productName: '7',
        status: '4.5 / 5',
        weeks: 30,
        budget: '75$'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Johnathan Ray',
        gmail: 'jray@gmail.com',
        productName: '7.6',
        status: '4.4 / 5',
        weeks: 46,
        budget: '74$'
    },

]