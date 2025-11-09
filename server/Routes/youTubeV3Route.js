import e from "express"
import {channelList} from '../Controller/YouTubeV3API/youtubeV3Controller.js'
const route=e.Router()

route.get('/channelList/:channelName',channelList)

export default route;
