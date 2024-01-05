export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-hand-thumbs-up',
        task: 'Battery1 life is at the end. Replace it with 12KWh XYZ battery model',
        time: 'Just Now'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-hand-thumbs-down',
        task: 'Holiday season nearing. Peek time spikes would be high',
        time: '2 Hours ago'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hand-thumbs-up',
        task: 'More alerts are noticed with EV3 & EVC4. Service recommended',
        time: '8 Hrs'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hand-thumbs-up',
        task: 'Many Customers suggest to add play area for Kids',
        time: '10 Hrs'
    }

] 