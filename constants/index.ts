export const headerLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Profile',
        route: '/profile',
    },
    {
        label: 'My Events',
        route: '/events/create',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}