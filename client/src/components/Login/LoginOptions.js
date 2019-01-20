import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = {
    radio: {
        padding: '.5rem 1rem',
        '&$checked': {
            color: '#3A2D32'
        }
    },
    checked: {},
    formControlLabel: {
        width: '35rem'
    },
    label: {
        fontSize: '1.3rem'
    }
}

const LoginOptions = ({ hasPassword, handleChange, classes }) => {

    return (
        <RadioGroup
            aria-label="Do you have a password?"
            name="hasPassword"
            value={hasPassword}
            onChange={handleChange}
        >
            <FormControlLabel
                label="No, I am new to the website"
                control={<Radio disableRipple classes={{ root: classes.radio, checked: classes.checked }} />}
                labelPlacement="end"
                value="false"
                classes={{ label: classes.label, root: classes.formControlLabel }}
            />
            <FormControlLabel
                label="Yes, I have a password"
                control={<Radio disableRipple classes={{ root: classes.radio, checked: classes.checked }} />}
                labelPlacement="end"
                value="true"
                classes={{ label: classes.label, root: classes.formControlLabel }}
            />
        </RadioGroup>
    )
}

LoginOptions.propTypes = {
    hasPassword: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginOptions)

