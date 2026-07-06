import {faker} from '@faker-js/faker'

export class randomdatagenerator
{

static getfirstname():string
{
    return faker.person.firstName();
}

static getlastname():string
{
    return faker.person.lastName();
}

static username():string
{
    return faker.person.fullName()

}


static getemail():string
{

   return faker.internet.email()
}

static getphone():string
{

   return faker.phone.number();

}
static getpwd() :string
{

return faker.internet.password({length:10})

}
static getalphanumericpwd(): string
{

return faker.string.alphanumeric({length:10})

}


}