// third party imports
import React, {Component, PropTypes} from 'react'


const all = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 10,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}


export default class MainLogo extends Component {
    static propTypes = {
        bodyFill: PropTypes.string,
        eyeFill: PropTypes.string,
        noseFill: PropTypes.string,
        wingFill: PropTypes.string,
        hatRimFill: PropTypes.string,
        hatTopFill: PropTypes.string,
        bodyStroke: PropTypes.string,
        eyeStroke: PropTypes.string,
        noseStroke: PropTypes.string,
        wingStroke: PropTypes.string,
        leftLegStroke: PropTypes.string,
        leftFootStroke: PropTypes.string,
        rightLegStroke: PropTypes.string,
        rightFootStroke: PropTypes.string,
        hatRimStroke: PropTypes.string,
        hatTopStroke: PropTypes.string,
    }


    static defaultProps = {
        bodyFill: 'transparent',
        eyeFill: 'black',
        noseFill: 'transparent',
        wingFill: 'transparent',
        hatRimFill: 'transparent',
        hatTopFill: 'transparent',
        bodyStroke: 'black',
        eyeStroke: 'black',
        noseStroke: 'black',
        wingStroke: 'black',
        leftLegStroke: 'black',
        leftFootStroke: 'black',
        rightLegStroke: 'black',
        rightFootStroke: 'black',
        hatRimStroke: 'black',
        hatTopStroke: 'black',
    }


    render() {
        const {
            bodyFill,
            eyeFill,
            noseFill,
            wingFill,
            hatRimFill,
            hatTopFill,
            bodyStroke,
            eyeStroke,
            noseStroke,
            wingStroke,
            leftLegStroke,
            leftFootStroke,
            rightLegStroke,
            rightFootStroke,
            hatRimStroke,
            hatTopStroke,
            ...unusedProps,
        } = this.props

        return (
            <svg {...unusedProps} viewBox='0 0 1000 1000'>
                <g
                    transform='matrix(0.97312777,0,0,0.97311315,11.11902,61.548416)'
                >
                    <path // body
                        {...all}
                        fill={bodyFill}
                        stroke={bodyStroke}
                        d='M 702.59961 108.33398 L 477.88477 202.83984 C 453.16437 229.86732 428.41035 262.40693 401.7168 300.23047 C 399.63597 303.1789 397.52193 306.14554 395.41016 309.10938 C 410.72383 305.59509 427.63511 303.69763 446.9375 303.74023 C 549.72458 303.96707 592.94367 414.32022 564.75391 511.18945 C 536.56415 608.05868 374.84475 702.3265 254.48242 696.23242 C 234.81834 695.2368 216.80926 692.429 200.18555 687.98633 C 245.7898 743.81915 294.7665 790.90762 369.94336 812.37305 C 501.62319 849.97189 674.27814 805.61432 769.92969 694.61914 C 865.58123 583.62394 906.66965 486.04875 908.24414 356.30664 C 909.78825 229.06754 827.80166 120.57434 702.59961 108.33398 z '
                        transform='matrix(1.0276143,0,0,1.0276297,-11.426064,-63.248982)'
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
                    <circle // eye
                        {...all}
                        fill={eyeFill}
                        stroke={eyeStroke}
                        cy='251.03983'
                        cx='774.96344'
                        r='40'
                    />
                    <path // nose
                        {...all}
                        fill={noseFill}
                        stroke={noseStroke}
                        d='m 913.37659,222.1105 c 22.69336,13.51366 45.08345,27.14864 81.14963,35.31301 -28.23796,13.29928 -54.93472,28.13979 -72.32164,52.29043 z'
                    />
                </g>
                <rect // hat rim
                    {...all}
                    fill={hatRimFill}
                    stroke={hatRimStroke}
                    width='308.81189'
                    height='34.342751'
                    x='328.19128'
                    y='337.89496'
                    transform='matrix(0.92179884,-0.38766853,0.38683795,0.92214771,0,0)'
                 />
                <rect // hat top
                    {...all}
                    fill={hatTopFill}
                    stroke={hatTopStroke}
                    width='182.99963'
                    height='89.291161'
                    x='391.09738'
                    y='248.60382'
                    transform='matrix(0.92179884,-0.38766853,0.38683795,0.92214771,0,0)'
                />
            </svg>
        )
    }
}
