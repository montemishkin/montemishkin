// third party imports
import React, {Component, PropTypes} from 'react'


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
        bodyStroke: PropTypes.string,
        eyeStroke: PropTypes.string,
        noseStroke: PropTypes.string,
        wingStroke: PropTypes.string,
        leftLegStroke: PropTypes.string,
        leftFootStroke: PropTypes.string,
        rightLegStroke: PropTypes.string,
        rightFootStroke: PropTypes.string,
    }


    static defaultProps = {
        bodyFill: 'transparent',
        eyeFill: 'black',
        noseFill: 'transparent',
        wingFill: 'transparent',
        bodyStroke: 'black',
        eyeStroke: 'black',
        noseStroke: 'black',
        wingStroke: 'black',
        leftLegStroke: 'black',
        leftFootStroke: 'black',
        rightLegStroke: 'black',
        rightFootStroke: 'black',
    }


    render() {
        const {
            bodyFill,
            eyeFill,
            noseFill,
            wingFill,
            bodyStroke,
            eyeStroke,
            noseStroke,
            wingStroke,
            leftLegStroke,
            leftFootStroke,
            rightLegStroke,
            rightFootStroke,
            ...unusedProps,
        } = this.props

        return (
            <svg {...unusedProps} viewBox='0 0 993.81463 921.08513'>
                <g transform='translate(-4.2108383,-43.196452)'>
                    <path // body
                        {...all}
                        fill={bodyFill}
                        stroke={bodyStroke}
                        d='M 674.49023 3.5039062 C 556.68307 4.3874577 487.81252 73.647256 397.17383 202.08008 C 395.03554 205.10998 392.8615 208.15935 390.69141 211.20508 C 406.42796 207.5937 423.80717 205.64372 443.64258 205.6875 C 549.26805 205.9206 593.68109 319.32149 564.71289 418.86719 C 535.74469 518.41289 369.5591 615.2859 245.87305 609.02344 C 225.66596 608.00031 207.15893 605.11425 190.07617 600.54883 C 236.93975 657.9243 287.26867 706.31454 364.52148 728.37305 C 499.83756 767.01074 677.26179 721.42718 775.55469 607.36523 C 873.84758 493.30326 916.06953 393.03193 917.6875 259.70508 C 919.30546 126.37824 831.68238 13.068191 698.72656 4.2421875 C 690.41682 3.6905623 682.34405 3.4450028 674.49023 3.5039062 z '
                        transform='translate(4.2108383,43.196452)'
                    />
                    <path // wing
                        {...all}
                        fill={wingFill}
                        stroke={wingStroke}
                        d='m 448.023,249.14714 c 105.62547,0.2331 150.03664,113.63221 121.06844,213.17791 -28.9682,99.5457 -195.15316,196.41916 -318.83921,190.1567 C 126.56619,646.21929 66.22719,570.59626 10.236224,462.37771 50.68732,481.85475 128.79439,431.16627 217.586,368.17196 306.37759,305.17764 342.39752,248.91402 448.023,249.14714 Z'
                    />
                    <path // right leg
                        {...all}
                        stroke={rightLegStroke}
                        d='m 572.32776,777.33117 c 27.7938,61.93219 20.49435,120.848 9.6036,169.03027'
                    />
                    <path // right foot
                        {...all}
                        stroke={rightFootStroke}
                        d='m 632.76155,930.97393 c -1.68166,-26.15927 -19.2815,-50.33049 -40.74458,-69.82627 l -71.30304,57.24496'
                    />
                    <path // left leg
                        {...all}
                        stroke={leftLegStroke}
                        d='m 464.70013,785.90633 c 15.18214,60.98108 15.60151,119.33193 0,174.82841'
                    />
                    <path // left foot
                        {...all}
                        stroke={leftFootStroke}
                        d='m 514.95179,948.2925 c -2.63281,-31.76196 -20.73572,-58.32762 -39.38643,-80.49966 l -69.26579,62.9361'
                    />
                    <ellipse // eye
                        {...all}
                        fill={eyeFill}
                        stroke={eyeStroke}
                        ry='40'
                        rx='40'
                        cy='251.03983'
                        cx='774.96344'
                    />
                    <path // nose
                        {...all}
                        fill={noseFill}
                        stroke={eyeStroke}
                        d='m 913.37659,222.1105 c 22.69336,13.51366 45.08345,27.14864 81.14963,35.31301 -28.23796,13.29928 -54.93472,28.13979 -72.32164,52.29043 z'
                    />
                </g>
            </svg>
        )
    }
}
