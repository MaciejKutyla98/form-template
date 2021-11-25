import * as yup from 'yup'
import "yup-phone";
import { parse, isDate } from "date-fns";

const today = new Date();
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'The name must contain at least 3 letters')
        .max(255, 'Name is too long')
        .required('Name is required'),
    gender: yup.string()
        .typeError('*')
        .required('Email is required'),
    dateOfBirth: yup.date()
        .typeError('Date have to be in "dd-MM-yyyy" format')
        .transform(parseDateString)
        .max(today, 'Are you a traveler in time? :)'),
    email: yup.string()
        .email('Your email is not valid')
        .required('Email is required'),
    mobile: yup.string()
        .phone()
        .required('Phone number is required'),
    customerID: yup.number()
        .positive('CustomerID cannot be negative')
        .integer('CustomerID has to be integer')
        .typeError('CustomerID is required'),
    membership: yup.string()
        .typeError('*')
        .required('Membership is required')
})

export function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd-MM-yyyy", new Date());

    return parsedDate;
}