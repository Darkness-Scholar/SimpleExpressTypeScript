import express, { Request, Response, Express } from "express"

const app:Express = express()

app.get('/', (req:Request, res:Response):void => {
    res.send('Hello World')
})

app.listen(4444, ():void => {
    // tslint:disable-next-line:no-console
    console.log(`Server is running on port 4444`)
})