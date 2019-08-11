import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import PostController from './controllers/post';
const Post = new PostController();

const app = express();
mongoose.connect(
    'mongodb://localhost/blog',
    {
        useNewUrlParser: true,
    }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// TODO: move in routes !!!!!
app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.patch('/posts/:id', Post.update);

app.listen(3333, () => {
    console.log('SERVER STARTED!');
});
