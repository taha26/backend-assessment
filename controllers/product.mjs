import HttpStatusCodes from "../declarations/HttpStatusCodes.mjs";
import 'dotenv/config.js'

const product = [
  {
    name: 'T-shirt',
    quanity: 3,
    id: "21343242"
  },
  {
    name: 'Laptop',
    quanity: 9,
    id: "44221242"
  },
  {
    name: 'Watch',
    quanity: 29,
    id: "54221242"
  },
  {
    name: 'Headphone',
    quanity: 3,
    id: "85621242"
  },
]

export async function Product(req, res, next) {
  try {
    res.status(HttpStatusCodes.OK).json({ data: product });
  } catch (error) {
    next(error);
  }
}