import React from 'react';
import dayjs from 'dayjs';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dayjs(dateString);
  const formattedDate = date.format('MMMM D, YYYY');

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
