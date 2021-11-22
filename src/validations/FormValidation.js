import * as yup from 'yup'
import { parse, isDate } from "date-fns";

const today = new Date();
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    name: yup.string()
        .min(3)
        .max(255).
        required(),
    dateOfBirth: yup.date().transform(parseDateString).max(today),
    email: yup.string().email().required(),
    mobile: yup.string().matches(phoneRegExp).required(),
    customerID: yup.number().positive().integer()
})

export function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd-MM-yyyy", new Date());

    return parsedDate;
}