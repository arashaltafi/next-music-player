import { gql } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NextApiRequest, NextApiResponse } from 'next';

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    family: String
    age: Int
  }

  type Slider {
    id: Int
    image: String
    singer: String
    title: String
  }

  type Category {
    id: Int
    image: String
    type: String
  }

  type Banner {
    title: String
    image: String
  }

  type Music {
    id: Int
    image: String
    path: String
    singer: String
    name: String
  }

  type MusicVideo {
    id: Int
    image: String
    path: String
    singer: String
    name: String
  }

  type Home {
    slider: [Slider],
    category: [Category],
    bannerAllMusic: [Banner],
    allMusic: [Music],
    bannerTopMusic: [Banner],
    topMusic: [Music],
    bannerLastMusic: [Banner],
    lastMusic: [Music],
    bannerFavMusic: [Banner],
    favMusic: [Music],
    bannerSuggestedMusic: [Banner],
    suggestedMusic: [Music],
    bannerAllMusicVideo: [Banner],
    allMusicVideo: [MusicVideo],
    bannerTopMusicVideo: [Banner],
    topMusicVideo: [MusicVideo],
    bannerLastMusicVideo: [Banner],
    lastMusicVideo: [MusicVideo],
    bannerFavMusicVideo: [Banner],
    favMusicVideo: [MusicVideo],
    bannerSuggestedMusicVideo: [Banner],
    suggestedMusicVideo: [MusicVideo],
  }

  type Singer {
    id: Int
    image: String
    name: String
  }

  type SingerInfo {
    id: Int
    name: String
    image: String
    bio: String
    music: [Music]
    musicVideo: [MusicVideo]
  }

  type Singers {
    total: Int
    data: [Singer]
  }

  type Token {
    token: String
    message: String
  }

  type Query {
    home: Home,
    singer(name: String!): SingerInfo,
    singers(page: Int!, page_size: Int!): Singers,
  }

  type Mutation {
    createUser(name: String!, family: String, age: Int): User,
    loginUser(email: String!, password: String!): Token,
  }
`;

const resolvers = {
  Query: {
    home: async () => {
      return {
        slider: [
          {
            id: 1,
            image: 'https://arashaltafi.ir/Social_Media/story-01.jpg',
            singer: 'خواننده 1',
            title: 'عنوان 1',
          }, {
            id: 2,
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg',
            singer: 'خواننده 2',
            title: 'عنوان 2',
          }
        ],
        category: [
          {
            id: 1,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_pop.jpg',
            type: 'پاپ'
          }, {
            id: 2,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_rap.jpg',
            type: 'رپ'
          }, {
            id: 3,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_traditional.jpg',
            type: 'سنتی'
          }, {
            id: 4,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_old.jpg',
            type: 'قدیمی'
          }
        ],
        bannerAllMusic: [
          {
            title: 'موزیک 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک 3',
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg'
          }
        ],
        allMusic: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerTopMusic: [
          {
            title: 'موزیک 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک 3',
            image: 'https://arashaltafi.ir/Social_Media/story-01.jpg'
          }
        ],
        topMusic: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن یگانه',
            name: 'تست موزیک'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن یگانه',
            name: 'تست موزیک'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن یگانه',
            name: 'تست موزیک'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن یگانه',
            name: 'تست موزیک'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن یگانه',
            name: 'تست موزیک'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن یگانه',
            name: 'تست موزیک'
          }
        ],
        bannerLastMusic: [
          {
            title: 'موزیک 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک 3',
            image: 'https://arashaltafi.ir/Social_Media/story-01.jpg'
          }
        ],
        lastMusic: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerFavMusic: [
          {
            id: 1,
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            id: 2,
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            id: 3,
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg'
          }
        ],
        favMusic: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerSuggestedMusic: [
          {
            id: 1,
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            id: 2,
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            id: 3,
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg'
          }
        ],
        suggestedMusic: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerAllMusicVideo: [
          {
            title: 'موزیک ویدیو 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک ویدیو 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک ویدیو 3',
            image: 'https://arashaltafi.ir/Social_Media/story-01.jpg'
          }
        ],
        allMusicVideo: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerTopMusicVideo: [
          {
            title: 'موزیک ویدیو 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک ویدیو 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک ویدیو 3',
            image: 'https://arashaltafi.ir/Social_Media/story-01.jpg'
          }
        ],
        topMusicVideo: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerLastMusicVideo: [
          {
            title: 'موزیک ویدیو 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک ویدیو 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک ویدیو 3',
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg'
          }
        ],
        lastMusicVideo: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerFavMusicVideo: [
          {
            title: 'موزیک ویدیو 1',
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            title: 'موزیک ویدیو 2',
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            title: 'موزیک ویدیو 3',
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg'
          }
        ],
        favMusicVideo: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        bannerSuggestedMusicVideo: [
          {
            id: 1,
            image: 'https://arashaltafi.ir/Social_Media/story-03.jpg'
          }, {
            id: 2,
            image: 'https://arashaltafi.ir/Social_Media/story-04.jpg'
          }, {
            id: 3,
            image: 'https://arashaltafi.ir/Social_Media/story-02.jpg'
          }
        ],
        suggestedMusicVideo: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 4,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 5,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 6,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
      }
    },
    singer: async (obj: any, args: any, context: any) => {
      console.log('obj:', obj)
      console.log('args:', args)
      console.log('token:', context.token)
      console.log('theme:', context.theme)
      console.log('-------------------')

      const { name } = args;

      return {
        id: 1,
        name: name,
        image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
        bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        music: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ],
        musicVideo: [
          {
            id: 1,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }, {
            id: 3,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            path: '"https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3"',
            singer: 'محسن چاوشی',
            name: 'آمد بهار جان ها'
          }
        ]
      }
    },
    singers: async (obj: any, args: any) => {
      const { page, page_size } = args;
      const startIndex = (page - 1) * page_size;
      const endIndex = page * page_size;

      const singersData = [
        {
          id: 1,
          name: 'محسن یگانه',
          image: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg"
        },
        {
          id: 2,
          name: 'محسن چاوشی',
          image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg"
        },
        {
          id: 3,
          name: 'علیرضا طلیسچی',
          image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg"
        },
        {
          id: 4,
          name: "یوسف زمانی",
          image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg"
        },
        {
          id: 5,
          name: 'محسن چاوشی',
          image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg"
        },
        {
          id: 6,
          name: 'علیرضا طلیسچی',
          image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg"
        },
        {
          id: 7,
          name: "یوسف زمانی",
          image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg"
        },
        {
          id: 8,
          name: 'علیرضا طلیسچی',
          image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg"
        },
        {
          id: 9,
          name: "یوسف زمانی",
          image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg"
        },
        {
          id: 10,
          name: 'محسن چاوشی',
          image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg"
        },
        {
          id: 11,
          name: 'علیرضا طلیسچی',
          image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg"
        },
        {
          id: 12,
          name: "یوسف زمانی",
          image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg"
        }
      ];

      return {
        total: singersData.length,
        data: singersData.slice(startIndex, endIndex)
      }
    },
  },
  Mutation: {
    createUser: async (obj: any, args: any, context: any) => {
      return {
        _id: 1,
        name: args.name,
        family: args.family,
        age: args.age
      }
    },
    loginUser: async (obj: any, args: any, context: any) => {
      if (args.email === 'admin' && args.password === 'admin') {
        return {
          token: "asdaljfdnoqwefn",
          message: "login success"
        }
      } else {
        return {
          token: "",
          message: "login error"
        }
      }
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    message: "Please visit this link for GraphQL",
    link: 'http://localhost:3000/api/graphql'
  });
}