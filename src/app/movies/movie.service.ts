import {Injectable} from '@angular/core';
import {IMovieDetail} from './moviedetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: IMovieDetail[] = [
    {
      id: 1,
      title: 'War for the planet of the apes',
      imageUrl: '../../assets/images/war-apes.jpg',
      year: 2017,
      rating: 7.5,
      genre: 'Thriller,Science-fiction',
      description: 'Caesar (Andy Serkis) and his apes are forced into a deadly conflict with an army ' +
        'of humans led by a ruthless colonel (Woody Harrelson). After the apes suffer unimaginable losses, ' +
        'Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. ' +
        'As the journey finally brings them face to face, Caesar and the colonel are pitted against each other' +
        ' in an epic battle that will determine the fate of both of their species and the future of the planet.'
    },
    {
      id: 2,
      title: 'Beauty and the beast',
      imageUrl: '../../assets/images/beauty-and-the-beast.jpg',
      year: 2017,
      rating: 7.2,
      genre: 'Fantasy,Romance',
      description: 'An arrogant prince is cursed to live as a terrifying beast until he finds true love. Strangely,' +
        ' his chance comes when he captures an unwary clockmaker, whose place is then taken by his bold and beautiful' +
        ' daughter Belle. Helped by the Beast\'s similarly enchanted servants - including a clock, ' +
        'a teapot and a candelabra - Belle begins to see the sensitive soul behind the fearsome facade. ' +
        'But as time runs out, it soon becomes obvious that Belle\'s cocky suitor Gaston is the real beast of the piece.'
    },
    {
      id: 3,
      title: 'Coco',
      imageUrl: '../../assets/images/coco.jpg',
      year: 2017,
      rating: 8.4,
      genre: 'Animation',
      description: 'Despite his family\'s generations-old ban on music, young Miguel dreams of becoming an ' +
        'accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, ' +
        'Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, ' +
        'the two new friends embark on an extraordinary journey to unlock the real story behind Miguel\'s family history.'
    },
    {
      id: 4,
      title: 'The shape of water',
      imageUrl: '../../assets/images/the-shape-of-water.jpg',
      year: 2017,
      rating: 7.4,
      genre: 'Drama,Thriller',
      description: 'Elisa is a mute, isolated woman who works as a cleaning lady in a hidden, ' +
        'high-security government laboratory in 1962 Baltimore. Her life changes forever when she discovers the lab\'s classified secret ' +
        '-- a mysterious, scaled creature from South America that lives in a water tank.' +
        ' As Elisa develops a unique bond with her new friend, she soon learns that its fate and ' +
        'very survival lies in the hands of a hostile government agent and a marine biologist.'
    },
    {
      id: 5,
      title: 'Wonder woman',
      imageUrl: '../../assets/images/wonder-woman.jpg',
      year: 2017,
      rating: 7.5,
      genre: 'Action',
      description: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, ' +
        'trained to be an unconquerable warrior. Raised on a sheltered island paradise, ' +
        'Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s ' +
        'raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. ' +
        'Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.'
    },
    {
      id: 6,
      title: 'Incredibles 2',
      imageUrl: '../../assets/images/incredibles-2.jpg',
      year: 2018,
      rating: 7.8,
      genre: 'Animation,Action',
      description: 'The Incredibles hero family takes on a new mission, which involves a change in family roles: ' +
        'Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.'
    },
    {
      id: 7,
      title: 'Guardians of the galaxy',
      imageUrl: '../../assets/images/guardians-of-the-galaxy.jpg',
      year: 2017,
      rating: 7.7,
      genre: 'Action,Fantasy',
      description: 'Peter Quill and his fellow Guardians are hired by a powerful alien race, ' +
        'the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen ' +
        'the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. ' +
        'As the Guardians try to escape, the mystery of Peter\'s parentage is revealed.'
    },
    {
      id: 8,
      title: 'A Star is Born',
      imageUrl: '../../assets/images/a-star-is-born.jpg',
      year: 2018,
      rating: 7.9,
      genre: 'Drama,Music,Romance',
      description: 'A musician helps a young singer find fame, even as age and alcoholism send his own career into a downward spiral.'
    },
    {
      id: 9,
      title: 'Ladybird',
      imageUrl: '../../assets/images/lady-bird.jpg',
      year: 2017,
      rating: 7.5,
      genre: 'Comedy,Drama',
      description: 'Marion McPherson, a nurse, works tirelessly to keep her family afloat after her husband loses his job. ' +
        'She also maintains a turbulent bond with a teenage daughter who is just like her: loving, strong-willed and deeply opinionated.'
    },
    {
      id: 10,
      title: 'Eighth Grade',
      imageUrl: '../../assets/images/eighth-grade.jpg',
      year: 2018,
      rating: 7.5,
      genre: 'Comedy,Drama',
      description: 'An introverted teenage girl tries to survive the last week of her disastrous ' +
        'eighth grade year before leaving to start high school.'
    },
    {
      id: 11,
      title: 'Black Panther',
      imageUrl: '../../assets/images/black-panther.jpg',
      year: 2018,
      rating: 7.4,
      genre: 'Fantasy,Action',
      description: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to ' +
        'lead his people into a new future and must confront a challenger from his country\'s past.'
    },
    {
      id: 12,
      title: 'Logan',
      imageUrl: '../../assets/images/logan.jpg',
      year: 2017,
      rating: 8.1,
      genre: 'Science-fiction,Drama',
      description: 'In the near future, a weary Logan (Hugh Jackman) cares for an ' +
        'ailing Professor X (Patrick Stewart) at a remote outpost on the Mexican border. ' +
        'His plan to hide from the outside world gets upended when he meets a young mutant (Dafne Keen) who is very much like him. ' +
        'Logan must now protect the girl and battle the dark forces that want to capture her.'
    }
  ];
}
