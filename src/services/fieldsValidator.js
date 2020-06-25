import validator from 'validator';

const { ignore_whitespace } = validator;

const fieldsValidator = {
    
    /**
     * Returns true if the param field IS undefined and false otherwise.
     * @param {*} field 
     */
    isUndefined: function (field) {
        return field === undefined
    },

    /**
     * Return true if the param field have NO characters and false otherwise.
     * @param {*} field 
     */
    isEmpty: function (field) {
        try {
            const trimedField = validator.trim(field, ' ');
            return validator.isEmpty(trimedField, {ignore_whitespace});
        } catch {
            return false;
        }
    },

    /**
     * Return true if the param field have ONLY number and false otherwise.
     * @param {*} field 
     */
    isNumeric: function (field) {
        try {
            return validator.isNumeric(field, {no_symbols: true})
        } catch {
            return false;
        }
    }
}

export default fieldsValidator;