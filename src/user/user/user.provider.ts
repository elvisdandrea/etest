import { Users } from "./entities/user.entity";

export const userProvider = [{
    provide: 'USER_REPOSITORY',
    useValue: Users
}]