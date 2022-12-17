import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon icon="fa-regular " /> */}
const navData=[
    {
        id:0,
        icon:faChartLine,
        link:"/dashboard",
    },
    {
        id:1,
        icon:faUser,
        link:"/profile",
    },
    {
        id:2,
        icon:faIdCardClip,
        link:"/visitors",
    },
    {
        id:3,
        icon:faTimeline,
        link:"/overdue-book",
    },
    {
        id:4,
        icon:faCheck,
        link:"/returned-book",
    },
    {
        id:5,
        icon:faSave,
        link:"/issued-book",
    }
]

export default navData;