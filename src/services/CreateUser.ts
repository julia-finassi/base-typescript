interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>
}
/* desestruturação por isso usando interface */
export default function createUser({ name='', email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }
    return user
}