import React, { Component } from 'react'
import styled from 'styled-components'
import { elevation } from '../../styles'


//styled components
const MenuWrapper = styled.div`
    width: 100%;
    height: 35rem;
    left: 0;
    position: absolute;
    z-index: -1;
    transition: all 0.4s ease-in-out;
    background: white;
    ${elevation[3]};
  
    &.hidden {
      opacity: 0;
      bottom: 60rem;
    }

    &.visible {
      opacity: 1;
      bottom: -35rem;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`

const MenuItem = styled.div`
    display: flex;
    flex: auto;
    flex-wrap: wrap;
`
const MenuCard = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1;
`
const MenuCardHead = styled.h2`
    margin: 3rem 0 3rem 0;
    color: ${({ theme }) => theme.color.fontLight};
    background: ${({ theme }) => theme.color.primaryDark};
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 5px;
`

const MenuCardBody = styled.div`
    display: flex;
`

const MenuCardImage = styled.div`
    width: auto;
    height: auto;
    img {
      width: 25rem;
      display: block;
    }
    img.amps_effects {
      width: 25rem;
    }
`

const MenuCardLinks = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-left: 2rem;
`
const MenuCardLink = styled.button`
    padding: .4rem;
    margin-bottom: .5rem;
    background: transparent;
    color: #000;
    border: none;
    outline: none;
    font-size: 1.5rem;
    transition: all .2s ease-in-out;
    border-radius: 5px;

    :hover {
      background: ${({ theme }) => theme.color.secondaryDark};
      transform: rotate(-2deg) scale(1.1) translate(1.5rem, -.5rem);
      color: white;
      border: none;
    }

`


const CATEGORIES = [
  {
    name: 'Browse All Guitars',
    image: 'https://res.cloudinary.com/dwhnxncff/image/upload/v1547330283/Guitar_shop_static_images/cat_guitar_2.png',
    subCat: [
      {
        name: 'Electric Guitars',
        linkTo: ''
      },
      {
        name: 'Acoustic Guitars',
        linkTo: ''
      },
      {
        name: 'Acoustic-Electric Guitars',
        linkTo: ''
      },
      {
        name: 'Classical & Nylon Guitars',
        linkTo: ''
      }
    ]
  },
  {
    name: 'Browse All Basses',
    image: 'https://res.cloudinary.com/dwhnxncff/image/upload/v1547330117/Guitar_shop_static_images/cat_bass_1.png',
    subCat: [
      {
        name: 'Electric Basses',
        linkTo: ''
      },
      {
        name: 'Acoustic Basses',
        linkTo: ''
      }
    ]
  },
  {
    name: 'Browse All Amps',
    image: 'https://res.cloudinary.com/dwhnxncff/image/upload/v1547319912/Guitar_shop_static_images/cat_amp.png',
    subCat: [
      {
        name: 'Guitar Amps',
        linkTo: ''
      },
      {
        name: 'Bass Amps',
        linkTo: ''
      }
    ]
  },
  {
    name: 'Browse All Effects',
    image: 'https://res.cloudinary.com/dwhnxncff/image/upload/v1547340477/Guitar_shop_static_images/cat_effects.png',
    subCat: [
      {
        name: 'Guitar Pedals',
        linkTo: ''
      },
      {
        name: 'Bass Pedals',
        linkTo: ''
      }
    ]
  },
]



class MainMenu extends Component {
  render() {
    return (
      <MenuWrapper className={`${this.props.isMenuOpen ? 'visible' : 'hidden'}`}>
        <Container>
          {
            CATEGORIES.map(item => (
              <MenuItem key={item.name}>
                <MenuCard>
                  <MenuCardHead>
                    {item.name}
                  </MenuCardHead>
                  <MenuCardBody>
                    <MenuCardImage>
                      <img src={item.image} className={`${item.name === 'Browse All Amps & Effects' && 'amps_effects'}`} />
                    </MenuCardImage>
                    <MenuCardLinks>
                      {
                        item.subCat.map((el, i) => (
                          <MenuCardLink key={i}>
                            {el.name}
                          </MenuCardLink>)
                        )
                      }
                    </MenuCardLinks>
                  </MenuCardBody>
                </MenuCard>
              </MenuItem>
            ))
          }
        </Container>
      </MenuWrapper>
    )
  }
}

export default MainMenu
