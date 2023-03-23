import { ReactComponent as CtctIcon } from '../assets/constantcontactlogo.svg';
import { ReactComponent as SharpSpringIcon } from '../assets/SharpSpring.svg';
import { ReactComponent as DroneIcon } from '../assets/drone.svg';
import { ReactComponent as ExtensisIcon } from '../assets/extensis.svg';
import styled from 'styled-components';

export const StyledCtctIcon = styled(CtctIcon)`
    height: 55px !important;
    width: 55px !important;
    top: 14px !important;
    left: 15px !important;

    @media only screen and (max-width: 1170px) {
        height: 40px !important;
        width: 40px !important;
        top: 12px !important;
        left: 13px !important;
    }
`;

export const StyledSSIcon = styled(SharpSpringIcon)`
    height: 75px !important;
    width: 75px !important;
    top: 4px !important;
    left: 5px !important;

    @media only screen and (max-width: 1170px) {
        height: 50px !important;
        width: 50px !important;
        top: 7px !important;
        left: 7px !important;
    }
`;

export const StyledDroneIcon = styled(DroneIcon)`
    height: 55px !important;
    width: 55px !important;
    top: 15px !important;
    left: 15px !important;
    
    
    @media only screen and (max-width: 1170px) {
        height: 38px !important;
        width: 38px !important;
        top: 14px !important;
        left: 13px !important;
    }
`;

export const StyledExtensisIcon = styled(ExtensisIcon)`
    height: 58px !important;
    width: 58px !important;
    top: 15px !important;
    left: 13px !important;

    @media only screen and (max-width: 1170px) {
        height: 38px !important;
        width: 38px !important;
        top: 14px !important;
        left: 13px !important;
    }
`;