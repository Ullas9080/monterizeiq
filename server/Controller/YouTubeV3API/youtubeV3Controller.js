import axios from "axios";
import err from "../../err.js";

export const channelList = async (req, res) => {
  try {
    const { channelName } = req.params;
    if (!channelName) return err(res, 400, "Channel name is required");


    const searchRes = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${channelName}&key=${process.env.YOUTUBE_V3_API_KEY}`
    );

    const items = searchRes.data.items;
    if (!items || items.length === 0)
      return err(res, 404, "Channel not found");

    const channelIds = items.map((i) => i.id.channelId).join(",");

 
    const statsRes = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelIds}&key=${process.env.YOUTUBE_V3_API_KEY}`
    );

    const channelStats = statsRes.data.items;
    if (!channelStats || channelStats.length === 0)
      return err(res, 404, "Statistics not found");


    const responseData = channelStats.map((i) => ({
      channelId: i.id,
      title: i.snippet.title,
      description: i.snippet.description,
       logo:
     i.snippet.thumbnails.high?.url ||
     i.snippet.thumbnails.medium?.url ||
     i.snippet.thumbnails.default?.url,
      subscriberCount: i.statistics.subscriberCount,
      viewCount: i.statistics.viewCount,
      videoCount: i.statistics.videoCount,
    }));

    console.log({ success: true, data: responseData });
    return res.json({ success: true, data: responseData });

  } catch (error) {
    console.error(error.message);
    return err(res, 500, "Something went wrong");
  }
};
