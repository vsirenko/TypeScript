const str: string = 'lol'
const isFetching: boolean = true
const isLoading: boolean = false
const  int: number = 42
const float: number = 4.2

const  numberArray: number[] = [1,2,3,4,5,6,7]
const numberArray2: Array<number> = [1,2,3,4,5,6,7] //generic type
const words: string[] = ['hello','ts']
// Tuple
const contact: [string,string, number] = ['Vova','1234567', 123]
//ANY

let variable: any = 42
variable = []
//...

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Hasinberg')

// void ничего не возвращает

// never

function throwError(mes: string): never {
        throw new Error(mes)
}

function infinite(): never {
    while(true) {

    }
}

// Type

type Login = string

const login: Login = 'add'

type ID = string | number
const id: ID = 123

type SomeType = string | null | undefined



