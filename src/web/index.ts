import express from 'express';

const app = express();

app.use(express.json({ limit: '100KB' }));
app.use(express.urlencoded({ extended: true, limit: '100KB' }));

export default app;
