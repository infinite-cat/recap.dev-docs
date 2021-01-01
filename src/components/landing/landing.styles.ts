import styled from '@emotion/styled'
import { Typography, Fab } from '@material-ui/core'

export const Wrapper = styled.div`
  padding: 20px 0;
`

export const TitleBlock = styled.div`
  margin-top: -64px;
  width: 100%;
  background-size: cover;
`

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 600px;
`

export const TitleBlockContent = styled.div`
  position: relative;
  background: linear-gradient(322.36deg, #01e1f7 0.58%, #203bdd 112.86%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 108px 20px 20px 20px;
`

export const ProjectName = styled(Typography)`
  margin: 80px 0;
  color: white;
  text-align: center;
`

export const ProjectDescription = styled(Typography)`
  color: white;
  margin-bottom: 0;
  text-align: center;
`

export const SupportedTechnologies = styled(Typography)`
  color: white;
  margin-top: 20px;
  text-align: center;
`

export const PaddedHeading = styled(Typography)`
  color: white;
  margin-bottom: 80px;
  text-align: center;

  a {
    color: white;
    text-decoration: underline;
  }
`

export const ActionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 80px;
`

export const CallToActionButton = styled(Fab)`
  margin: 20px 10px;
  padding: 0 40px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(23, 20, 43, 0.2);
  background: #03c6fb;
  text-shadow: 0 2px 4px rgba(0, 26, 94, 0.38);
  letter-spacing: 2px;
  border-radius: 45px;
  height: 60px;
  &:hover {
    background: #4fd7fc;
  }
`

export const NoUnderlineLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const FeaturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: url('/white-background.svg') center 0 no-repeat;
  background-size: cover;
  background-color: #fafafa;
`

export const Features = styled.div`
  color: #333333;
  background: url('/features.svg') center 0 no-repeat;
  background-size: cover;
  max-width: 570px;
  width: 100%;
  height: 88px;
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 75px;
`

export const FeatureBlock = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 150px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`

export const BlueBackgroundFeature = styled.div`
  position: relative;
  background: linear-gradient(322.36deg, #01e1f7 0.58%, #203bdd 112.86%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 150px 20px 0 20px;
`

export const WhiteBackgroundFeature = styled(BlueBackgroundFeature)`
  background: linear-gradient(180deg, #ffffff 10.82%, #d9e8ff 150.43%), #ecf3ff;
  color: #1c1e21;
`

export const FeatureLeftBlock = styled.div`
  margin: 0 10px;
  @media (min-width: 951px) {
    max-width: 650px;
  }
  @media (max-width: 950px) {
    margin-bottom: 40px;
  }
`

export const FeatureTitle = styled.div`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333333;
`

export const FeatureTitleWhite = styled(FeatureTitle)`
  color: white;
`

export const FeatureDescription = styled.div`
  font-size: 24px;
  color: #333333;
`

export const FeatureDescriptionWhite = styled(FeatureDescription)`
  color: white;
`

export const FeatureIcon = styled.img`
  margin: 0 20px;
  box-shadow: 0 2px 0 rgba(54, 45, 89, 0.15), 0 0 100px rgba(54, 45, 89, 0.2);
  max-width: 310px;
  border-radius: 5px;
`

export const FeatureIconOnBlue = styled(FeatureIcon)`
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.15), 0 0 100px rgba(255, 255, 255, 0.2);
`

export const CommunityHeader = styled.div`
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 40px;
`

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

export const Email = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 150px;
`
