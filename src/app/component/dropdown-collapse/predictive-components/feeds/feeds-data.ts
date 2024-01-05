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
        task: 'Well-lit charging station nestled alongside a coffee shop',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hand-thumbs-up',
        task: 'Leaves feeling refreshed and excited for the next leg of the journey',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-hand-thumbs-up',
        task: 'Checks real-time charging progress on a digital display',
        time: '8 Hrs'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hand-thumbs-up',
        task: 'Received personalized tips for nearby tourist attractions',
        time: '10 Hrs'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-hand-thumbs-down',
        task: 'Aminities could have improved',
        time: '21 Hrs'
    },

] 