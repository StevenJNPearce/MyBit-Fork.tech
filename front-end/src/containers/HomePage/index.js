/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components/macro';

import H1 from 'components/H1';
import P from 'components/P';
import Button from 'components/Button';
import Constants from 'components/Constants';

const StyledNote = styled.div`
  margin-top: 40px;
`;

const StyledHowTo = styled.span`
  span {
    margin: 0px 0px;
    display: block;
  }
`;

const StyledParagraphGroupText = styled.div`
  margin-top: 30px;
`;

const StyledCreateNewButton = styled.div`
  margin-top: 50px;
`;

const StyledMakeDappAwesome = styled.div`
  margin-top: 80px;
`;

const StyledCenterButton = styled.div`
  margin: 0 auto;
  width: max-content;
`;

const StyledPage = styled.article`
  text-align: center;
  margin-top: 30px;
`;

export class HomePage extends React.PureComponent {
  render() {
    return (
      <StyledPage>
        <Helmet>
          <title>MyBit Fork</title>
          <meta
            name="MyBit Fork"
            content="Create transactions on the MyBit Fork dApp"
          />
        </Helmet>
        <H1>Fork on the Blockchain.</H1>
        <H1>Split bills without a middleman.</H1>
        <StyledParagraphGroupText>
          <P
            fontSize={Constants.paragraphs.homePage.fontSize}
            textAlign={Constants.paragraphs.homePage.textAlign}
            text="How it works:"
          />
          <P
            fontSize={Constants.paragraphs.homePage.fontSize}
            textAlign={Constants.paragraphs.homePage.textAlign}
            text="The Fork Dapp allows users to split bills."
          />
          <P
            fontSize={Constants.paragraphs.homePage.fontSize}
            textAlign={Constants.paragraphs.homePage.textAlign}
          >
            <StyledHowTo>
              <span>1. Enable Metamask</span>
              <span>
                2. Create a bill, specifying the payers and payee.
              </span>
              <span>3. Pay your bill on the blockchain</span>
            </StyledHowTo>
          </P>
          <StyledNote>
            <P
              fontSize={Constants.paragraphs.homePage.fontSize}
              textAlign={Constants.paragraphs.homePage.textAlign}
              text="Please note: although live, this dApp is still under development."
            />
          </StyledNote>
        </StyledParagraphGroupText>
        <StyledCenterButton>
          <StyledCreateNewButton>
            <Button
              styling={Constants.buttons.primary.green}
              linkTo="/create-new"
              size="large"
            >
              Create new
            </Button>
          </StyledCreateNewButton>
        </StyledCenterButton>
        <StyledMakeDappAwesome>
          <P
            fontSize={Constants.paragraphs.homePage.fontSize}
            textAlign={Constants.paragraphs.homePage.textAlign}
            text="Make this dApp awesome here:"
          />
        </StyledMakeDappAwesome>
        <StyledCenterButton>
          <Button
            styling={Constants.buttons.secondary.default}
            href="https://ddf.mybit.io"
          >
            Contribute
          </Button>
        </StyledCenterButton>
      </StyledPage>
    );
  }
}

export default HomePage;
