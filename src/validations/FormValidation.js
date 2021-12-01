import * as yup from 'yup'
import "yup-phone";
import { parse, isDate } from "date-fns";

const today = new Date();
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'the name must contain at least 3 letters')
        .max(255, 'name is too long')
        .required('name is required'),
    gender: yup.string()
        .typeError('*')
        .required('email is required'),
    dateOfBirth: yup.date()
        .typeError('date have to be in "dd-MM-yyyy" format')
        .transform(parseDateString)
        .max(today, 'are you a traveler in time? :)'),
    email: yup.string()
        .email('your email is not valid')
        .required('email is required'),
    mobile: yup.string()
        .phone()
        .required('phone number is required'),
    customerID: yup.number()
        .positive('customerID cannot be negative')
        .integer('customerID has to be integer')
        .typeError('customerID is required'),
    membership: yup.string()
        .typeError('*')
        .required('membership is required')
})

export function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd-MM-yyyy", new Date());

    return parsedDate;
}