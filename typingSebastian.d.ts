// to be edited later when we have the schema made
interface scoreObj {
    _id: string
    game: string
    score: {
        time: number
    }
}

export interface scoresSudoku {
    scores : scoreObj[]
}

interface userInfo {
    name: string
    username: string
    email: string
    password?: string
}