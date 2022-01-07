
import styled from 'styled-components';
import { Color, Colors } from '../../utils/types/Common';
import { Props } from './StyledKanji';

function getSize(size: string) {
    switch (size) {
        case 'lg':
            return '6rem';
        default:
            return '1rem'
    }
}

function getBorderColor(backgroundColor: Color) {
    switch (backgroundColor) {
        case Colors.LightPink:
            return Colors.Pink;
        default:
            return Colors.Pink
    }
}

export const StyledDiv = styled.div<Props>`
    font-family: 'Kosugi Maru', sans-serif;
    font-size: ${props => getSize(props.size)};
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => getBorderColor(props.backgroundColor)};
    line-height: 1;
    padding: 0.5rem;
    font-family: 'Kosugi Maru', sans-serif;
`;