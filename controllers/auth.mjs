import HttpStatusCodes from "../declarations/HttpStatusCodes.mjs";
import { generateAccessToken } from "../middleware.mjs"
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import bcrypt from "bcryptjs";

let refreshTokens = []

// Temporary storage
let usersData = []

export async function Signup(req, res, next) {
    try {
        const { body: { username, email, password } } = req;

        if (!username || !email || !password) {
            res.status(HttpStatusCodes.NOT_FOUND).send("Invalid input");
            return;
        }

        const signUpUsers = {
            username,
            email,
            password: bcrypt.hashSync(password, 8)
        }

        usersData.push(signUpUsers)

        res.status(HttpStatusCodes.OK).send("Successfully registered");
    } catch (error) {
        next(error);
    }
}

export async function Login(req, res, next) {
    try {
        const { body: { email, password } } = req;

        if (!email || !password) {
            res.status(HttpStatusCodes.NOT_FOUND).send("Invalid input");
            return;
        }

        const filterUser = usersData.filter((user) => user.email == email && bcrypt.compareSync(password, user.password))

        if (!filterUser.length) {
            res.status(HttpStatusCodes.NOT_FOUND).send("Invalid credentials");
            return;
        }

        const user = { name: filterUser[0]?.username }

        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)

        res.status(HttpStatusCodes.OK).json({ accessToken: accessToken, refreshToken: refreshToken });
    } catch (error) {
        next(error);
    }
}

export async function Token(req, res, next) {
    try {
        const { body: { refreshToken } } = req

        if (refreshToken == null) return res.sendStatus(HttpStatusCodes.UNAUTHORIZED)

        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(HttpStatusCodes.FORBIDDEN)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(HttpStatusCodes.FORBIDDEN)
            const accessToken = generateAccessToken({ name: user.name })
            res.json({ accessToken: accessToken })
        })
    } catch (error) {
        next(error);
    }
}