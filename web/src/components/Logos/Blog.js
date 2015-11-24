// third party imports
import React, {Component, PropTypes} from 'react'


const all = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}


export default class BlogLogo extends Component {
    static propTypes = {
        bodyFill: PropTypes.string,
        eyeFill: PropTypes.string,
        noseFill: PropTypes.string,
        wingFill: PropTypes.string,
        hatRimFill: PropTypes.string,
        hatTopFill: PropTypes.string,
        glassesLensFill: PropTypes.string,
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
        glassesEarLoopStroke: PropTypes.string,
        glassesBridgeStroke: PropTypes.string,
        glassesLensStroke: PropTypes.string,
    }


    static defaultProps = {
        bodyFill: 'transparent',
        eyeFill: 'black',
        noseFill: 'transparent',
        wingFill: 'transparent',
        hatRimFill: 'transparent',
        hatTopFill: 'transparent',
        glassesLensFill: 'transparent',
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
        glassesEarLoopStroke: 'black',
        glassesBridgeStroke: 'black',
        glassesLensStroke: 'black',
    }


    render() {
        const {
            bodyFill,
            eyeFill,
            noseFill,
            wingFill,
            hatRimFill,
            hatTopFill,
            glassesLensFill,
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
            glassesEarLoopStroke,
            glassesBridgeStroke,
            glassesLensStroke,
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
                        d='m 752.08203,118.76172 c -0.0649,1.21607 -0.16342,2.48056 -0.33203,3.85156 -2.24908,18.28817 -56.48534,-16.78893 -153.75977,25.58399 -97.27444,42.37292 -126.59621,85.81993 -137.65429,81.38867 -1.30862,-0.5244 -2.48225,-1.352 -3.53906,-2.41992 -17.83195,21.59109 -35.95798,45.96931 -55.08008,73.06445 -2.08083,2.94843 -4.19487,5.91507 -6.30664,8.87891 15.31367,-3.51429 32.22495,-5.41175 51.52734,-5.36915 102.78708,0.22684 146.00617,110.57999 117.81641,207.44922 C 536.56415,608.05868 374.84475,702.3265 254.48242,696.23242 234.81834,695.2368 216.80926,692.429 200.18555,687.98633 245.7898,743.81915 294.7665,790.90762 369.94336,812.37305 501.62319,849.97189 674.27814,805.61432 769.92969,694.61914 865.58123,583.62394 906.66965,486.04875 908.24414,356.30664 909.57416,246.7093 848.93377,151.01422 752.08203,118.76172 Z'
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
                <path // hat top
                    {...all}
                    fill={hatTopFill}
                    stroke={hatTopStroke}
                    d='M 459.9454,167.81488 C 495.79271,113.3277 508.08246,44.271182 556.09925,25.507187 604.11605,6.7431913 698.40694,77.430262 698.40694,77.430262'
                />
                <path // hat rim
                    {...all}
                    fill={hatRimFill}
                    stroke={hatRimStroke}
                    d='m 598.59051,118.93795 c -98.4718,38.85204 -148.68078,42.55894 -149.83748,61.65954 -1.15671,19.1006 0.52429,44.5579 11.58237,48.98916 11.05808,4.43126 40.38023,-39.01617 137.65467,-81.38909 97.27443,-42.37292 151.51039,-7.29648 153.75947,-25.58465 2.24908,-18.28814 -5.02223,-21.43568 -13.96784,-45.629258 -8.94561,-24.19358 -40.71939,3.10227 -139.19119,41.954298 z'
                />
                <path // glasses lens
                    {...all}
                    fill={glassesLensFill}
                    stroke={glassesLensStroke}
                    d='m 699.05639,253.78298 136.53846,-3.84615 -28.84616,109.61539 -88.46153,-1.92307 z'
                />
                <path // glasses bridge
                    {...all}
                    stroke={glassesBridgeStroke}
                    d='m 827.60776,287.6544 73.5963,-21.86974'
                />
                <path // glasses ear loop
                    {...all}
                    stroke={glassesEarLoopStroke}
                    d='m 702.90254,290.32144 -140.38461,-5.76923 -23.07693,40.38462 30.76923,9.61538'
                />
            </svg>
        )
    }
}
