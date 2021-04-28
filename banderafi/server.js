const express = require('express');
// const users = require('./data/users.json');
//const methods = require('./methods');
const fs = require('mz/fs');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

app.post('/create-account', async (req, res) => {
    try {
        const users = JSON.parse(await fs.readFile('./data/users.json'));
    
        const newUser = {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        };

        for (let existingUser of users) {
            if (existingUser.username === newUser.username) {
                throw 'Username Already Exists';
            }
        }
        
        users.push({
            "username": newUser.username,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "password": newUser.password});

        const toWrite = JSON.stringify(users, null, 4);
        
        await fs.writeFile('./data/users.json', toWrite);
            
        res.status(200).json(newUser);
    } catch (e) {
        res.status(400).send('Username Already Exists');
    }
});

app.post('/login', async (req, res) => {
    try {
        const users = JSON.parse(await fs.readFile('./data/users.json'));
        const loginAttempt = {
            username: req.body.username,
            password: req.body.password
        };

        for (let existingUser of users) {
            if (existingUser.username === loginAttempt.username) {
                if (existingUser.password === loginAttempt.password) {
                    res.status(200).json(existingUser);
                    return;
                }
                if (existingUser.password !== loginAttempt.password) {
                    throw 'Username Or Password Incorrect';
                }
            }
        }

        throw 'Username Or Password Incorrect';
    } catch (e) {
        res.status(400).send('Username Or Password Incorrect');
    }
});

/*
{
    username:
    pass:
    highScore: 
        states:{
            freeplay:
            survival:
            timed:
        }
        countries: {
            freeplay:
            survival:
            timed:
        }
}
*/

app.post('/highscore', async (req, res) => {
    try {
        const users = JSON.parse(await fs.readFile('./data/users.json'));
        const info = {
            username: req.body.username,
            gameTopic: req.body.gameTopic,
            gameMode: req.body.gameMode,
            highScore: req.body.highScore
        };

        const returnedUser = {};

        for (let savedUser of users) {
            if (savedUser.username === info.username) {
                // if game mode high score exists, compare it to score given
                if (!savedUser.highScore[info.gameTopic][info.gameMode] || savedUser.highScore[info.gameTopic][info.gameMode] < info.highScore) {
                    savedUser.highScore[info.gameTopic][info.gameMode] = info.highScore;
                    returnedUser = savedUser;
                    break;
                }
            }
        }

        const toWrite = JSON.stringify(users, null, 4);
        
        await fs.writeFile('./data/users.json', toWrite);
            
        res.status(200).json(returnedUser);
    } catch (e) {
        res.status(500).send('High Score Not Saved');
    }
});