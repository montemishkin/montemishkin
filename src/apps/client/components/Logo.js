// third party imports
import React, {Component, PropTypes} from 'react'


// length of a side of the logo in svg viewbox units
const side = 1000


const all = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}


export default class Logo extends Component {
    static propTypes = {
        bodyFill: PropTypes.string,
        eyeFill: PropTypes.string,
        noseFill: PropTypes.string,
        wingFill: PropTypes.string,
        footFill: PropTypes.string,
    }


    static defaultProps = {
        bodyFill: 'white',
        eyeFill: 'black',
        noseFill: 'white',
        wingFill: 'white',
        footFill: 'none',
    }


    render() {
        const {
            bodyFill,
            eyeFill,
            noseFill,
            wingFill,
            footFill,
            ...unusedProps,
        } = this.props

        return (
            <svg {...unusedProps} viewBox={`0 0 ${side} ${side}`}>
                <path
                    {...all}
                    fill={noseFill}
                    d='m 839.17625,351.97381 c 49.60765,22.83524 98.23119,23.71818 147.83884,34.74209 -47.24538,14.17359 -79.26043,9.90474 -150.12849,45.33872'
                />
                <path
                    {...all}
                    fill={footFill}
                    d='m 394.58561,986.29952 21.92437,-45.78111 c 10.73863,27.34798 9.79116,26.40775 15.69663,46.75438 m -17.90504,1.0625 c 2.90622,-61.89287 3.30138,-56.08045 3.87672,-127.88458'
                />
                <path
                    {...all}
                    fill={footFill}
                    d='m 473.7671,986.15761 20.21582,-45.13597 c 11.73116,26.93716 10.77031,24.61619 17.4156,44.73335 m -17.85423,1.7163 c 0.64178,-61.95773 1.24915,-56.16365 -0.8007,-127.94082'
                />
                <path
                    {...all}
                    fill={bodyFill}
                    transform='translate(0,-52.362271)'
                    d='M 586.32424,190.64949 C 242.23423,191.47285 240.75972,735.7823 37.437021,766.90327 342.51295,986.68804 668.02167,945.78414 761.68946,740.55783 855.35724,535.33151 930.41426,189.82612 586.32424,190.64949 Z'
                />
                <ellipse
                    {...all}
                    fill={eyeFill}
                    ry='31.890579'
                    rx='31.890629'
                    cy='351.54965'
                    cx='742.51367'
                />
                <path
                    {...all}
                    fill={wingFill}
                    transform='translate(0,-52.362271)'
                    d='M 345.87686,510.0288 C 152.65915,510.48232 198.73936,755.99703 18.422682,758.20319 103.00598,840.31975 386.89397,966.16031 506.58717,814.33397 626.28036,662.50762 539.09454,509.57528 345.87686,510.0288 Z'
                />
            </svg>
        )
    }
}
