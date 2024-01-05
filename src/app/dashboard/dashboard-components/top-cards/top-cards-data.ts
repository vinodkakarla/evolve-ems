export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: '$21k',
        subtitle: 'Todays Revenue'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '169',
        subtitle: 'No of EVs charged'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '456',
        subtitle: 'Grid Energy Consumed'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '47',
        subtitle: '% of Stored energy left'
    },

] 