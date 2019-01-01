import React from 'react'
import styled from 'styled-components'

//imported components
import SocialIcons from '../UI/utils/SocialIcons'
import Search from '../UI/utils/Search'

//styled components
const SearchBarWrapper = styled.div`
    width: 100%;
    height: 5rem;
    background: ${({ theme }) => theme.primaryColorDark};
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`


const SearchBar = () =>
    <SearchBarWrapper>
        <Container>
            <SocialIcons />
            <Search />
        </Container>
    </SearchBarWrapper>


export default SearchBar
