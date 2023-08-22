import React from "react";
export const required = (value: any) => {
    if (value) return undefined;
    return 'field is required'
}
export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} simbols`;
    return undefined
}