// here we will use interafaces to make sure our data is correct. 

interface Example {
    // this Type will have 
    id: string
    createdAt: string

}


// this type can now be imported. and used in the ts files. 
// these are very useful for db entries. if you need to mess around see if you can make a general for other parts and then extend. 
export interface ExpandedExample extends Example {
    title: string
    complete: boolean
}

export interface BrandonExample extends ExpandedExample {
    brandon: boolean
}

export interface AboutUs {
    name: string
    url: string
    blurb: string
    github: string
    linkedin: string
    portfolio: string
}