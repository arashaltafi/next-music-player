import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      message
      token
    }
  }
`;

export const GET_HELLO_WORLD = gql`
  query helloWorld {
    hello
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      name
      family
      age
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: Int!) {
    user(id: $id) {
      _id
      name
      family
      age
    }
  }
`;

export const GET_SINGERS = gql`
  query singers($page: Int!, $page_size: Int!) {
    singers(page: $page, page_size: $page_size) {
      total,
      data {
        id
        name
        image
      }
    }
  }
`;

export const GET_SINGER = gql`
  query singer($name: String!) {
    singer(name: $name) {
      id
      name
      image
      bio
      music {
        id
        name
        image
        path
        singer
      }
      musicVideo {
        id
        name
        image
        path
        singer
      }
    }
  }
`;

export const GET_SLIDER = gql`
  query slider {
    home {
      slider {
        id,
        image,
        singer,
        title,
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    home {
      categories {
        id,
        image,
        type,
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query category($category: String!) {
    category(category: $category) {
      id,
      image,
      type,
      music {
        id
        name
        image
        path
        singer
      }
      musicVideo {
        id
        name
        image
        path
        singer
      }
    }
  }
`;

export const GET_ALL_MUSICS = gql`
  query musics($name: String!, $page: Int!, $page_size: Int!) {
    musics(name: $name, page: $page, page_size: $page_size) {
      total,
      data {
        id
        name
        image
        singer
        path
      }
    }
  }
`;

export const GET_ALL_MUSIC_VIDEOS = gql`
  query musicVideos($name: String!, $page: Int!, $page_size: Int!) {
    musicVideos(name: $name, page: $page, page_size: $page_size) {
      total,
      data {
        id
        name
        image
        singer
        path
      }
    }
  }
`;

export const GET_ALL_MUSIC = gql`
  query allMusic {
    home {
      allMusic {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_TOP_MUSIC = gql`
  query topMusic {
    home {
      topMusic {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_LAST_MUSIC = gql`
  query lastMusic {
    home {
      lastMusic {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_SUGGESTED_MUSIC = gql`
  query suggestedMusic {
    home {
      suggestedMusic {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_FAV_MUSIC = gql`
  query favMusic {
    home {
      favMusic {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_ALL_MUSIC_VIDEO = gql`
  query allMusicVideo {
    home {
      allMusicVideo {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_TOP_MUSIC_VIDEO = gql`
  query topMusicVideo {
    home {
      topMusicVideo {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_LAST_MUSIC_VIDEO = gql`
  query lastMusicVideo {
    home {
      lastMusicVideo {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_SUGGESTED_MUSIC_VIDEO = gql`
  query suggestedMusicVideo {
    home {
      suggestedMusicVideo {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_FAV_MUSIC_VIDEO = gql`
  query favMusicVideo {
    home {
      favMusicVideo {
        id,
        image,
        path,
        singer,
        name,
      }
    }
  }
`;

export const GET_HOME = gql`
  query home {
    home {
      bannerAllMusic {
        id,
        title,
        image,
      }
      bannerTopMusic {
        id,
        title,
        image,
      }
      bannerLastMusic {
        id,
        title,
        image,
      }
      bannerFavMusic {
        id,
        title,
        image,
      }
      bannerSuggestedMusic {
        id,
        title,
        image,
      }
      bannerAllMusicVideo {
        id,
        title,
        image,
      }
      bannerTopMusicVideo {
        id,
        title,
        image,
      }
      bannerLastMusicVideo {
        id,
        title,
        image,
      }
      bannerFavMusicVideo {
        id,
        title,
        image,
      }
      bannerSuggestedMusicVideo {
        id,
        title,
        image,
      }
    }
  }
`;