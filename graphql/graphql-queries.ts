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

export const GET_STUDENTS = gql`
  query getStudents {
    students(page: 1, page_size: 5) {
      id
      name
      family
      age
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
  query category {
    home {
      category {
        id,
        image,
        type,
      }
    }
  }
`;

export const GET_HOME = gql`
  query home {
    home {
      bannerAllMusic {
        title,
        image,
      }
      allMusic {
        id,
        image,
        singer,
        title,
      }
      bannerTopMusic {
        title,
        image,
      }
      topMusic {
        id,
        image,
        singer,
        title,
      }
      bannerLastMusic {
        title,
        image,
      }
      lastMusic {
        id,
        image,
        singer,
        title,
      }
      bannerFavMusic {
        title,
        image,
      }
      favMusic {
        id,
        image,
        singer,
        title,
      }
      bannerAllMusicVideo {
        title,
        image,
      }
      allMusicVideo {
        id,
        image,
        singer,
        title,
      }
      bannerTopMusicVideo {
        title,
        image,
      }
      topMusicVideo {
        id,
        image,
        singer,
        title,
      }
      bannerLastMusicVideo {
        title,
        image,
      }
      lastMusicVideo {
        id,
        image,
        singer,
        title,
      }
      bannerFavMusicVideo {
        title,
        image,
      }
      favMusicVideo {
        id,
        image,
        singer,
        title,
      }
    }
  }
`;