import * as Moment from 'moment';

export interface Interest {
  id: string;
  label: string;
  description: string;
  size: string;
}

export interface User {
  id: string;
  login: string;
  email: string;
  firstName?: string;
  lastName?: string;
  rights?: string;
}

export interface Sight {
  id: string;
  name: string;
  adress: string;
  accessTime: {
    from: number;
    to: number;
  };
<<<<<<< HEAD
  interest: Interest;
  coordinates: {
    latitude: number;
    longitude: number;
=======
  interestsLabel: string;
  coordinates: {
    latitude: number; //Широта
    longitude: number; //Долгота
>>>>>>> feat:  Page of sights (BE) initial
  };

  history?: string;
  photos?: string[];
  reviews?: SightReview[];
  rating?: number[];
}

export interface SightReview {
  id: string;
  user: User;
  date: Date;
  rating: number;
  message?: string;
}

export interface Route {
  id: string;
  title: string;
  duration: Moment.Duration;
  distance: number;
  rating: number;
  reviews: number;
  places: number;
  image?: string;
}