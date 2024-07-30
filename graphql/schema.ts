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
    singer: String
    title: String
  }

  type MusicVideo {
    id: Int
    image: String
    singer: String
    title: String
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
    bannerAllMusicVideo: [Banner],
    allMusicVideo: [MusicVideo],
    bannerTopMusicVideo: [Banner],
    topMusicVideo: [MusicVideo],
    bannerLastMusicVideo: [Banner],
    lastMusicVideo: [MusicVideo],
    bannerFavMusicVideo: [Banner],
    favMusicVideo: [MusicVideo],
  }

  type Token {
    token: String
    message: String
  }

  type Query {
    home: Home
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    createUser(name: String!, family: String, age: Int): User,
    loginUser(email: String!, password: String!): Token
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
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
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }, {
            id: 2,
            image: 'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg',
            singer: 'محسن چاوشی',
            title: 'آمد بهار جان ها'
          }
        ],
      }
    },
    users: async () => {
      return [
        {
          _id: '1',
          name: 'name1',
          family: 'family1',
          age: 1
        }, {
          _id: '2',
          name: 'name2',
          family: 'family2',
          age: 2
        }, {
          _id: '3',
          name: 'name3',
          family: 'family3',
          age: 3
        }
      ]
    },
    user: async (obj: any, args: any, context: any) => {
      console.log('obj:', obj)
      console.log('args:', args)
      console.log('token:', context.token)
      console.log('theme:', context.theme)
      console.log('-------------------')
      return {
        _id: args.id,
        name: 'name1',
        family: 'family1',
        age: 1
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