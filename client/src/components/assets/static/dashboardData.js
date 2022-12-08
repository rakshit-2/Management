
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendDown} from '@fortawesome/free-solid-svg-icons';

const dashboardData=
{
    head:"Dashboard",

    col1:
    [
        {
            id:0,
            label:"Issued Books",
            link:"/issued-book",
            icon:faSave,
            color:"#34BAB5",
            arrow:faArrowTrendUp,
            colorArrow:"#57f542"
        },
        {
            id:1,
            label:"Overdue Books",
            link:"/overdue-book",
            icon:faTimeline,
            color:"#F2B44C",
            arrow:faArrowTrendDown,
            colorArrow:"#de1616"
        },        
        {
            id:2,
            label:"Visitors",
            link:"/visitors",
            icon:faIdCardClip,
            color:"#F5E756",
            arrow:faArrowTrendUp,
            colorArrow:"#8116de"
        }
    ],
}

export default dashboardData;