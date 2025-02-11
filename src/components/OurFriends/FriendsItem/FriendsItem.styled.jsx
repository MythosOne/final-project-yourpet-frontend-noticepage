import styled from '@emotion/styled';

export const FriendItem = styled.li`
    width: 280px;
    padding: 16px 12px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.defaultShadow};

  @media screen and (min-width: 768px) {
    width: 336px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 395px;
   

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.hoverShadow};
    }
  }
`;

export const FriendLinkTitle = styled.a`
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  text-decoration: none;
  
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const FriendBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

// export const FriendImgBoxWrap = styled.div`
// width: 100px;
// display: flex;
// align-items: center;
// justify-content: center;

// @media screen and (min-width: 768px) {
//    width: 120px;
//   }
// `;


export const FriendImgBox = styled.img`
//   display: block;
//   width: 100%;
//   height: auto;
//   object-fit: contain; 
 
  margin-right: 16px;
  max-width: 100%;

 @media screen and (min-width: 768px}) {
    max-width: 120px;
    margin-right: 14px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 158px;
    margin-right: 16px;
  }






`;

export const FriendInfoBox = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-around;
//   padding-left: 10px;

    display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;


 
`;

export const TextWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

// export const WorkTime = styled.p`
//   font: inherit;
//   font-weight: 500;
// //   font-size: ;
//   line-height: 1.34;
//   display: flex;
//   align-items: center;
//   padding: 0;
//   cursor: pointer;
//   border: none;
//   background-color: inherit;

//   :focus {
//     color: blue;
//   }

// `;

export const TextTitle = styled.p`
  font-weight: 500;
  font: inherit;
  font-size: 12px;
  line-height: 1.34;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16x;
    line-height: 1.375;
  }
  
`;

export const Text = styled.p`
  font: inherit;
  margin:0;
  font-size: 12px;
  line-height: 1.34;

   :focus,
   :hover {
    color: ${({ theme }) => theme.colors.blue}
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }

   @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }

`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  
  font-size: 12px;
  line-height: 1.34;

  :focus,
  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }

   @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

// export const WorkTimeList = styled.ul`
//   padding: 12px;
//   position: absolute;
//   top: 48px;
//   left: 0;

//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   justify-content: center;

//   background: #ffffff;
//   border: 1px solid blue;
//   box-shadow: ;
//   border-radius: 8px;

//   color: black;
// `;

// export const WorkTimeItem = styled.li`
//   width: 100px;
//   :not(:last-child) {
//     margin-bottom: 4px;
//   }
 
// `;