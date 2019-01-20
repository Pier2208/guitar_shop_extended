import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { below } from '../../../styles/mediaQueries'

//fixed data
const SOCIALS = [{ name: 'facebook-square' }, { name: 'youtube-square' }, { name: 'twitter-square' }, { name: 'instagram' }]


const SocialIcons = ({ className }) =>
    <div className={className}>
        {
            SOCIALS.map(({ name }) => <FontAwesomeIcon key={name} icon={['fab', `${name}`]} />)
        }
    </div>


//styled components
export default styled(SocialIcons)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18rem;
    background-color: transparent;
    margin-right: auto;

    svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.color.fontLight};
    }

    ${below.medium`
        display: none;
    `}
`