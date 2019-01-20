import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//styled components
const QuestionsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-around;

    h3 {
        color: ${({ theme }) => theme.color.fontLight};
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: uppercase;
        margin-left: .8rem;
    }
    
    svg {
        color: ${({ theme }) => theme.color.fontLight};
        font-size: 2.2rem;
    }
`

const Questions = () => {
    return (
        <QuestionsWrapper>
            <FontAwesomeIcon icon="question-circle" />
            <h3>Questions</h3>
        </QuestionsWrapper>
    )
}

export default Questions
