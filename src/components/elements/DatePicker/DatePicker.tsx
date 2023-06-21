import ReactDatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ja from 'date-fns/locale/ja'

type DatePickerProps = {
  selected: Date,
  onChange: (value: Date) => void
}

const CalendarContainer = ({ className, children }) => {
  return (
    <div style={{ padding: "0px", background: "#216ba5", color: "#fff", backgroundColor: '#fff' }}>
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
};

const MyContainer = ({ className, children }) => {
  return (
    <div className='p-10 bg-white h-60'>
      <div className='relative'>
        {children}
      </div>
    </div>
  );
};

export const DatePicker = (
  {
    selected,
    onChange
  }: DatePickerProps
) => {
  registerLocale('ja', ja)
  return (
    <ReactDatePicker
      locale='ja'
      className=''
      dateFormat='yyyy/MM/dd'
      wrapperClassName="flex flex-row-reverse"
      selected={selected}
      onChange={onChange}
    />
  )
}
