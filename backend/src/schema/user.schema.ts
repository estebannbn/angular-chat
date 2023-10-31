import {object, string, TypeOf, undefined} from 'zod'

export const createUserSchema = object({
    body: object({
        firstName: string({required_error:'first name required'})
            .min(3,'min name length: 3')
            .max(18, 'max name length: 18'),
        lastName: string()
            .min(3,'min name length: 3')
            .max(18, 'max name length: 18'),
        password: string({required_error: 'password required'})
            .min(6, 'min password length: 6'),
        passwordConfirmation: string({required_error: 'password confirmation required'})
            .min(6, 'min password confirmation length: 6').or(undefined()),
        email: string({required_error:'email required'})
            .email('not a valid email')
    }).refine((data)=> data.password === data.passwordConfirmation,{
        message: 'Passwords don\'t match',
        path: ['/confirm']
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"]