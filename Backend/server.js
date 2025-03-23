import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//   res.send('Server is ready!');
// });

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            question: 'Why did the scarecrow win an award?',
            answer: 'Because he was outstanding in his field.'
        },
        {
            id: 2,
            question: 'How do you organize a space party?',
            answer: 'You planet.'
        },
        {
            id: 3,
            question: 'Why did the math book look sad?',
            answer: 'Because it had too many problems.'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    }
);