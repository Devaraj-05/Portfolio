import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  @media (max-width: 960px) {
    padding: 40px 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 20px;
  gap: 24px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }

`

const EmailButton = styled.a`
  text-decoration: none;
  padding: 12px 32px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  border: 2px solid transparent;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
  }
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Let's work together</Title>
        <Desc>
          If you need a modern and powerful website for your business, startup or yourself, I am available for work.
        </Desc>
        <EmailButton 
          href="mailto:devarajpadma.work@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me
        </EmailButton>
      </Wrapper>
    </Container>
  )
}

export default Contact