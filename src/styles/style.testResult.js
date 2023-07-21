import { styled } from "styled-components";

export const Page = styled.div`
  background-color: #f4f9dd;
  min-height: 100vh;
`;

export const ButtonContainer = styled.div`
  float: right;
  margin-top: 15px;
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #102e54;
  color: white;
  border-radius: 18px;
  padding: 13px;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #09192e;
  }
`;

export const DetailButton = styled.button`
  cursor: pointer;
  background-color: #102e54;
  color: white;
  border-radius: 10px;
  margin-left: 125px;
  margin-top: 5px;
  width: 65px;
  height: 30px;

  padding: 7px;
  border: none;
  &:hover {
    background-color: #09192e;
  }
`;

export const TypeCharacter = styled.img`
  width: 250px;
  height: auto;
  margin-top: 115px;
`;

// 장소 추천
export const Place = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export const Description = styled.pre`
  background-color: #e5d3a9;
  padding: 30px;
  text-align: center;
  line-height: 22px;
  margin-bottom: 10px;
  line-height: 30px;
  border-radius: 7px;
`;

export const GongjuTypeContainer = styled.div`
  margin-top: 64px;
`;

export const GongjuExName = styled.div`
  font-size: 30px;
  // margin-left: 250px;
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
`;

export const GongjuTypeLabel = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const BoxLocation = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-left: 200px;
`;

export const ImageTitle = styled.li`
  margin-left: 9px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  object-fit: cover;
  width: 300px;
  height: 200px;
  margin: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 5px;
`;

export const FooterTitle = styled.div`
  color: #503b3b;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
`;

export const GomgjuNickname = styled.div`
  font-size: 20px;
`;

export const SNSShareLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SNSButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`;
