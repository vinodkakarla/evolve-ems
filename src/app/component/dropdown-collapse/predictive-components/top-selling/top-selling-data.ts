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
        productName: 'Tesla X',
        status: '15',
        weeks: 35,
        budget: '95$'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Nissan Leaf',
        status: '13',
        weeks: 35,
        budget: '85$'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Daneil John',
        gmail: 'djohn@gmail.com',
        productName: 'Tesla 3',
        status: '10',
        weeks: 24,
        budget: '75$'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Johnathan Ray',
        gmail: 'jray@gmail.com',
        productName: 'Tesla CyberTruck',
        status: '4',
        weeks: 20,
        budget: '74$'
    },

]