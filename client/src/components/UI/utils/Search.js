import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//styled components
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    margin-left: 3rem;
`

const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
    svg {
        color: ${({ theme }) => theme.fontColorLight};
        font-size: 1.3rem;
    }
    :focus {
        outline: none;
    }
    :active {
        transform: translateY(2px);
    }
`

const SearchInput = styled.input.attrs({
    type: "text"
})`
    width: 90%;
    height: 3rem;
    border-radius: 5px;
    font-family: inherit; /* input elt does not inherit the font family of the global document */
    font-size: 1.3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.fontColorLight};
    padding: .7rem 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.fontColorLight};
    outline: none;
    margin-right: -2.7rem;
    transition: all .2s;
    
    /*remove Chrome yellow auto-complete*/
    -webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    ::placeholder {
        color: ${({ theme }) => theme.primaryColorLight};
    }
    :focus {
        width: 100%;
    }
`

class Search extends Component {
    render() {
        return (
            <Form>
                <SearchInput
                    aria-label="Search through site content"
                />
                <Button>
                    <FontAwesomeIcon icon="search" />
                </Button>
            </Form>
        )
    }
}

export default Search
