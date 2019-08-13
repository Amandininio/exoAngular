import {User} from '../models/User.model';
import {Subject} from 'rxjs';


export class UserService {
    private users: User[] = [
            {
            firstName: 'Amandio',
            lastName: 'Mota',
            email: 'Amandiomota@gmail.com',
            drinkPreference: 'Jus de noix',
            hobbies: ['coder', 'faire du sport']
            }
    ];

    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}
