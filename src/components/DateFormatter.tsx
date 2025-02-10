import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

export const DateFormatter = ({ dateString }: Props) => {
  new Date(dateString).toLocaleDateString('en', {
    dateStyle: 'medium',
  })
  // const date = parseISO(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
