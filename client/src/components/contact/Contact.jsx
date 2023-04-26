
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import vid2 from '../about/vid2mov.mov';

const Banner = styled(Box)`
    width: 100%;
    height:1vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;
const Box1=styled(Box)`
display: flex;
flex-direction: column;
justify-content:centre;
`;
const Video=styled('video')({
    maxWidth:'100%',
    height:'auto'
    
});
const Wrapper = styled(Box)`
    padding: 50px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #ffffff;
`;
const Typography1 = styled(Typography)`
    color: #ffffff;
`;

const Contact = () => {
    return (
        <Box>
            <Banner>
            <Video src={vid2} autoPlay loop muted/>
            </Banner>

            <Wrapper>
                <Typography1 variant="h5">Thank you for your interest in GLA Blogspot. If you have any questions,<br/>
                comments, or suggestions, please do not hesitate to contact us.<br/>
                We value your feedback and are always eager to hear from our readers.</Typography1>    
                <Text variant="h3"> Contact Us</Text>
                <Typography1 variant="h5">
                    <Box1 component="span" style={{ marginLeft: 5 }}>
                    <br/>
                    <Box><Link href="mailto:chiragsingh21002@gmail.com?Subject=This is a subject" target="_blank" color="inherit"><Email /></Link><Link href="https://github.com/Chirag-Sngh" color="inherit" target="_blank"><GitHub /></Link><Link href="https://www.instagram.com/_.s_t_a_s._._/" color="inherit" target="_blank"><Instagram /></Link>Chirag</Box>
                        <br/>
                        <Box><Link href="mailto:prakhar72001@gmail.com?Subject=This is a subject" target="_blank" color="inherit"><Email /></Link><Link href="https://github.com/Prakhar788" color="inherit" target="_blank"><GitHub /></Link><Link href="https://www.instagram.com/_._.prakhar._._/" color="inherit" target="_blank"><Instagram /></Link>Prakhar</Box>
                        <br/>
                        <Box><Link href="mailto:surajagarwal560@gmail.com?Subject=This is a subject" target="_blank" color="inherit"><Email /></Link><Link href="https://github.com/SurajAg1" color="inherit" target="_blank"><GitHub /></Link><Link href="https://www.instagram.com/mr.suraj.agarwal/" color="inherit" target="_blank"><Instagram /></Link>Suraj</Box>
                        <br/>
                        <Box><Link href="mailto:rishabhrochlani37@gmail.com?Subject=This is a subject" target="_blank" color="inherit"><Email /></Link><Link href="https://github.com/Rishabh122333" color="inherit" target="_blank"><GitHub /></Link><Link href="https://www.instagram.com/rishabh_rochlani20/" color="inherit" target="_blank"><Instagram /></Link>Rishabh</Box>
                        <br/>
                        <Box><Link href="mailto:deviljindal47@gmail.com?Subject=This is a subject" target="_blank" color="inherit"><Email /></Link><Link href="https://github.com/devjindal135" color="inherit" target="_blank"><GitHub /></Link><Link href="https://www.instagram.com/dev_jindal47/" color="inherit" target="_blank"><Instagram /></Link>Dev</Box>
                    </Box1>
                </Typography1>
            </Wrapper>
            
        </Box>
    );
}

export default Contact;